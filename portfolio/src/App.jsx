import "./App.css";
import { motion, spring } from "framer-motion";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import profile from "./assets/WhatsApp_Image_2026-05-19_at_6.13.28_PM-removebg-preview.png";
import image from "./assets/Screenshot (98).png"
import project from "./assets/Screenshot (99).png";
import { MdEngineering } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import images from "./assets/WhatsApp Image 2026-05-21 at 1.07.39 PM.jpeg";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";
import Contact from "./assets/WhatsApp Image 2026-05-26 at 11.41.45 AM.jpeg";
import { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactPage from "./contact.jsx";

// Home Page Component
function HomePage() {
  const imageRef = useRef(null);

  const handleMove = (e) => {
    const rect = imageRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    imageRef.current.style.setProperty("--x", `$${x}px`);
    imageRef.current.style.setProperty("--y", `$${y}px`);
    imageRef.current.style.setProperty("--radius", `100px`);
  };

  const handleLeave = () => {
    imageRef.current.style.setProperty("--radius", `0px`);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        id="main"
      >
        <motion.a href="#home" className="anker ">
          {" "}
          <IoHome /> Home
        </motion.a>
        <a href="#About" className="anker">
          {" "}
          <CgProfile /> About
        </a>
        <a href="#skills" className="anker">
          {" "}
          <MdEngineering /> Skills
        </a>
        <a href="#Project" className="anker">
          {" "}
          <FaCode />
          Project
        </a>
        <a href="#contact" className="anker">
          {" "}
          <LuPhoneCall />
          Contact
        </a>
      </motion.nav>
      <div id="home">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="name"
        >
          <span>GAURAV</span> VAIDYAKAR
        </motion.h1>

        <div id="main-developer-section">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="developer-section"
          >
            <h1>Full Stack Developer</h1>
            <p>
              Building Modern Web Experiences, <br /> Crafting Scalable Full
              Stack Solutions.
            </p>
            <button>
              let's collaborate <MdArrowOutward />
            </button>
          </motion.div>

          {/* <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            id="logo"
          > */}
          {/* <motion.img
            src={profile}
            alt=""
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            id="logo"
          /> */}
          <div
            ref={imageRef}
            className="image-container"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
          >
            <motion.img src={profile} alt="" className="bw-image logo" initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }} />
            <motion.img src={profile} alt="" className="color-image logo" />
          </div>
          {/* </motion.div> */}

          <motion.div
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="social-section"
          >
            {/* <div> */}
            <a href="https://github.com/gauravvaidyakar">
              <FaGithub />
              Github
            </a>
            {/* </div> */}
            <br />
            <div>
              <a href="https://www.linkedin.com/in/gaurav-vaidyakar-5561a7384/">
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
            <br />
          </motion.div>
        </div>
      </div>

      <div id="About">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          // animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          id="service-section"
        >
          ABOUT
        </motion.h1>
        <motion.h1
          whileInView={{
            y: 0,
          }}
          initial={{ y: 100 }}
          // animate={{ y: 0 }}
          transition={{ duration: 1 }}
          id="service-section-h1"
        >
          /About Me
        </motion.h1>

        <div>
          <motion.div
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            initial={{ y: -250, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 100,
              damping: 15,
            }}
            className="profile"
          >
            <img src={images} alt="" />
          </motion.div>

          <motion.div
            whileInView={{ x: 0 }}
            initial={{ x: -200 }}
            // animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="About-me-section"
          >
            <h1>Gaurav Vaidyakar</h1>
            <p>
              I’m a passionate Full Stack Developer dedicated to building <br />
              modern, high-performance, and visually engaging web applications.{" "}
              <br />
              I enjoy transforming ideas into seamless digital experiences
              through <br />
              clean code, intuitive user interfaces, and scalable architectures.{" "}
              <br />
              With a strong focus on both frontend creativity and backend
              functionality, <br />
              I strive to develop applications that are not only visually
              impressive <br />
              but also fast, responsive, and user-friendly.{""}
            </p>
          </motion.div>
        </div>
      </div>

      <div id="skills">
        <motion.h1
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          initial={{ y: 100, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          id="Skills-section"
        >
          SKILLS
        </motion.h1>
        <motion.h1
          whileInView={{
            y: 0,
          }}
          initial={{ y: 100 }}
          // animate={{ y: 0 }}
          transition={{ duration: 2 }}
          id="Skills-section-h1"
        >
          /My Skills
        </motion.h1>
        <div id="UI">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            drag
            initial={{ y: -250, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 100,
              damping: 10,
            }}
          >
            <FaHtml5 className="fahtml icons-div" />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            drag
            initial={{ y: -250, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 100,
              damping: 15,
            }}
          >
            <BiSolidFileCss className="BiSolidFileCss icons-div-css" />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            drag
            initial={{ y: -250, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 100,
              damping: 20,
            }}
          >
            <FaNodeJs className="FaNodeJs icons-div-node" />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            drag
            initial={{ y: -250, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 100,
              damping: 25,
            }}
          >
            <FaReact className="FaReact icons-div-React" />
          </motion.div>

          <motion.div
            whileInView={{ y: 0 }}
            drag
            initial={{ y: -250 }}
            // animate={{ y: 0 }}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 100,
              damping: 30,
            }}
          >
            <SiRedux className="SiRedux icons-div-Redux" />
          </motion.div>

          <motion.div
            whileInView={{
              y: 0,
            }}
            drag
            initial={{ y: -250 }}
            // animate={{ y: 0 }}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 100,
              damping: 35,
            }}
          >
            <FaGithub className="FaGithub icons-div-Github" />
          </motion.div>

          <motion.div
            whileInView={{ y: 0 }}
            drag
            initial={{ y: -250 }}
            // animate={{ y: 0 }}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 100,
              damping: 10,
            }}
          >
            <RiTailwindCssFill className="RiTailwindCssFill icons-div-TailwindCss" />
          </motion.div>

          <motion.div
            whileInView={{ y: 0 }}
            drag
            initial={{ y: -250 }}
            // animate={{ y: 0 }}
            transition={{
              duration: 1,
              type: spring,
              stiffness: 100,
              damping: 45,
            }}
          >
            <SiChakraui className="SiChakraui icons-div-Chakraui" />
          </motion.div>
        </div>
      </div>

      <div id="Project">
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          id="Work-section"
        >
          PORTFOLIO
        </motion.h1>
        <motion.h1
          whileInView={{ y: 0 }}
          initial={{ y: 100 }}
          // animate={{ y: 0 }}
          transition={{ duration: 2 }}
          id="Work-section-h1"
        >
          /selected work
        </motion.h1>
        <br />
        <br />

        <div id="projects">
          <motion.div
            whileInView={{ y: 0 }}
            initial={{ y: -200 }}
            // animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="Chefsy"
          >
            <img src={image} alt="" />
            <h1>
              Mediatech-AI - Hospital Booking web <br />
            </h1>
            <div className="in-chefsy">
              <div className="page">
                <a href="">Landing Page</a>
              </div>
              <br />
              <div className="page">
                <a href="">kumpin Studio</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ y: 0 }}
            initial={{ y: -200 }}
            // animate={{ y: 0 }}
            transition={{ duration: 1.5 }}
            className="Skill-Rank"
          >
            <img src={project} alt="" />
            <h1>
              Social-Media — Social Media PlatForm With Modern And responsive UI.
              <br />
              Landing Page
            </h1>
            <div className="in-Skill-Rank">
              <div className="page">
                <a href="">Landing Page</a>
              </div>
              <br />
              <div className="page">
                <a href="">kumpin Studio</a>
              </div>
            </div>
          </motion.div>
        </div>
        <br />
        <br />
      </div>

      <div id="contact">
        <motion.h1
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 1 }}
          id="Contact-section"
        >
          CONTACT
        </motion.h1>
        <motion.h1
          whileInView={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ duration: 2 }}
          id="Contact-section-h1"
        >
          /CONTACT
        </motion.h1>
        <div id="main-contact-section">
          <motion.div
            whileInView={{ x: 0, opacity: 100 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 1 }}
            className="contact-section-about"
          >
            <h1 style={{ marginTop: 50, fontSize: 40 }}>let's work together</h1>
            <p>
              I help businesses and individuals build clean, modern, and
              high-performing web experiences. If you're looking for a developer
              who values design, performance, and user experience — let's
              talk.{" "}
            </p>
            <div className="button-section">
              <Link to="/contact"><button>contact me</button></Link>
              <button>learn more</button>
            </div>
          </motion.div>

          <motion.img
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            src={Contact}
            alt=""
            id="profetional-logo"
          />
        </div>
      </div>
    </>
  );
}

// Main App with Routing
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
