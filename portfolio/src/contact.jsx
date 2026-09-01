import { Link } from "react-router-dom";
import "./App.css";
import { FaEnvelope, FaPhone, FaLocationDot, FaPaperPlane } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdEngineering } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! I will get back to you soon.');
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
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
              <FaPaperPlane />
            </button>

          </form>
        </div>

      </div>
    </section>
    </>
  );
};

export default Contact;
