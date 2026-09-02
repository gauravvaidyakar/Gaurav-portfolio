import nodemailer from "nodemailer";
import ContactMessage from "../models/ContactMessage.js";

const escapeHtml = (value) =>
  value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character]);

const validateContactInput = ({ name, email, subject, message }) => {
  const fields = { name, email, subject, message };
  const limits = { name: [2, 100], email: [3, 254], subject: [2, 200], message: [10, 5000] };

  for (const [field, value] of Object.entries(fields)) {
    if (typeof value !== "string") return `${field[0].toUpperCase()}${field.slice(1)} is required.`;

    const [minimum, maximum] = limits[field];
    if (value.trim().length < minimum || value.trim().length > maximum) {
      return `${field[0].toUpperCase()}${field.slice(1)} must be between ${minimum} and ${maximum} characters.`;
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return "Please provide a valid email address.";
  return null;
};

const createTransporter = () => {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, CONTACT_RECIPIENT_EMAIL } = process.env;
  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASSWORD || !CONTACT_RECIPIENT_EMAIL) {
    throw new Error("Email configuration is incomplete.");
  }

  return nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: Number(EMAIL_PORT) === 465,
    auth: { user: EMAIL_USER, pass: EMAIL_PASSWORD },
  });
};

export const submitContactMessage = async (request, response, next) => {
  const { name, email, subject, message } = request.body;
  const validationError = validateContactInput({ name, email, subject, message });
  if (validationError) return response.status(400).json({ message: validationError });

  const contactMessage = { name: name.trim(), email: email.trim().toLowerCase(), subject: subject.trim(), message: message.trim() };

  try {
    await ContactMessage.create(contactMessage);
    const transporter = createTransporter();
    await transporter.sendMail({
      from: `Portfolio Contact Form <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_RECIPIENT_EMAIL,
      replyTo: contactMessage.email,
      subject: `Portfolio contact: ${contactMessage.subject}`,
      text: `Name: ${contactMessage.name}\nEmail: ${contactMessage.email}\nSubject: ${contactMessage.subject}\n\nMessage:\n${contactMessage.message}`,
      html: `<h2>New portfolio contact message</h2><p><strong>Name:</strong> ${escapeHtml(contactMessage.name)}</p><p><strong>Email:</strong> ${escapeHtml(contactMessage.email)}</p><p><strong>Subject:</strong> ${escapeHtml(contactMessage.subject)}</p><p><strong>Message:</strong><br>${escapeHtml(contactMessage.message).replace(/\n/g, "<br>")}</p>`,
    });
    return response.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    return next(error);
  }
};
