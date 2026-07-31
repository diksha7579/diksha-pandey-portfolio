import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Mail,
} from "lucide-react";
import "./Footer.css";

function Footer() {
  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  const profiles = [
    {
      label: "GitHub",
      href: "https://github.com/diksha7579",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dikshapandey75/",
    },
    {
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/diksha22scfksp/",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/diksha_pandey91/",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="footer-main">

          {/* BRAND */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="footer-brand"
          >
            <div className="footer-logo">
              <Code2 size={21} />
            </div>

            <h2>
              Diksha
              <span> Pandey</span>
            </h2>

            <p className="footer-role">
              Full Stack Developer
            </p>

            <p className="footer-description">
              Building scalable and user-friendly web
              applications with modern technologies,
              thoughtful design, and continuous learning.
            </p>

            <a
              href="mailto:pandeydiksha7579@gmail.com"
              className="footer-email"
            >
              <Mail size={15} />
              pandeydiksha7579@gmail.com
            </a>
          </motion.div>


          {/* NAVIGATION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="footer-column"
          >
            <p className="footer-column-title">
              NAVIGATION
            </p>

            <div className="footer-navigation">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                >
                  {item.label}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </motion.div>


          {/* PROFILES */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="footer-column"
          >
            <p className="footer-column-title">
              PROFILES
            </p>

            <div className="footer-profiles">
              {profiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{profile.label}</span>
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          </motion.div>

        </div>


        {/* =====================================================
            FOOTER BOTTOM
        ===================================================== */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Diksha Pandey.
            All rights reserved.
          </p>

          <p className="footer-built">
            Designed & built with
            <span> React</span>
          </p>

          <motion.button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;