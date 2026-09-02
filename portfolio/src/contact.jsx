import { Link } from "react-router-dom";
import "./App.css";
import { FaEnvelope, FaPhone, FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdEngineering } from "react-icons/md";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submission, setSubmission] = useState({ status: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedData = Object.fromEntries(
      Object.entries(formData).map(([field, value]) => [field, value.trim()]),
    );

    if (Object.values(trimmedData).some((value) => !value)) {
      setSubmission({ status: "error", message: "Please complete all fields." });
      return;
    }

    setSubmission({ status: "loading", message: "" });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || ""}/api/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmedData),
      });
      const responseBody = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(responseBody.message || "Unable to send your message. Please try again.");
      }

      setSubmission({ status: "success", message: "Message sent successfully" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmission({ status: "error", message: error.message || "Unable to send your message. Please try again." });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        id="main"
      >
        <Link to="/" className="anker">
          <IoHome /> Home
        </Link>
        <a href="/#About" className="anker">
          <CgProfile /> About
        </a>
        <a href="/#skills" className="anker">
          <MdEngineering /> Skills
        </a>
        <a href="/#Project" className="anker">
          <FaCode />
          Project
        </a>
        <Link to="/contact" className="anker">
          <LuPhoneCall />
          Contact
        </Link>
      </motion.nav>

      <section className="contact-page" id="contact">

      {/* Heading */}
      <div className="contact-heading">
        <span>CONTACT</span>
        <h1>/CONTACT</h1>
      </div>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">
          <p className="small-title">GET IN TOUCH</p>

          <h2>
            Let's work <br />
            <span>together.</span>
          </h2>

          <p className="contact-description">
            Have a project in mind or want to discuss an opportunity?
            Feel free to reach out. I’m always open to new projects,
            collaborations and ideas.
          </p>

          <div className="info-box">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div>
                <p>Email</p>
                <span>yourmail@gmail.com</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div>
                <p>Phone</p>
                <span>+91 XXXXX XXXXX</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaLocationDot />
              </div>
              <div>
                <p>Location</p>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>

            <div className="input-row">
              <div className="input-group">
                <label>Your Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength="100"
                  required
                />
              </div>

              <div className="input-group">
                <label>Your Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength="254"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                maxLength="200"
                required
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                maxLength="5000"
                required
              />
            </div>

            <button type="submit" className="send-btn" disabled={submission.status === "loading"}>
              {submission.status === "loading" ? "Sending..." : "Send Message"}
              <FaPaperPlane />
            </button>

            {submission.status !== "idle" && submission.status !== "loading" && (
              <p className={`form-status ${submission.status}`} role="status" aria-live="polite">
                {submission.message}
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
    </>
  );
};

export default Contact;
