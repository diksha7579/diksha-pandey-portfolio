import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Code2,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: "pandeydiksha7579@gmail.com",
      href: "mailto:pandeydiksha7579@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+91 82739 79289",
      href: "tel:+918273979289",
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/dikshapandey75/",
      href: "https://www.linkedin.com/in/dikshapandey75/",
      icon: Code2,
    },
    {
      label: "GitHub",
      value: "github.com/diksha7579",
      href: "https://github.com/diksha7579",
      icon: Code2,
    },
  ];

  return (
    <section
      id="contact"
      className="contact-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Background */}
      <div className="contact-glow contact-glow-one" />
      <div className="contact-glow contact-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-14"
        >
          <p className="contact-eyebrow">
            06 / CONTACT
          </p>

          <h2 className="contact-heading">
            Let's build
            <span> something.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have an opportunity, project, or idea in mind?
            I would love to connect and discuss how we can
            turn it into something meaningful.
          </p>
        </motion.div>


        {/* =====================================================
            CONTACT LAYOUT
        ===================================================== */}

        <div className="contact-layout">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="contact-info"
          >

            {/* Intro Card */}

            <div className="contact-intro-card">

              <div className="contact-intro-icon">
                <Code2 size={23} />
              </div>

              <p className="contact-intro-label">
                AVAILABLE FOR OPPORTUNITIES
              </p>

              <h3>
                Let's connect.
              </h3>

              <p>
                I'm open to full-time opportunities, internships,
                collaborations, and interesting software projects.
              </p>

            </div>


            {/* Contact Links */}

            <div className="contact-links">

              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="contact-link"
                    whileHover={{
                      x: 5,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >

                    <div className="contact-link-icon">
                      <Icon size={17} />
                    </div>

                    <div className="contact-link-content">

                      <span>
                        {item.label}
                      </span>

                      <strong>
                        {item.value}
                      </strong>

                    </div>

                    <ArrowUpRight
                      size={16}
                      className="contact-link-arrow"
                    />

                  </motion.a>
                );
              })}

            </div>


            {/* Location */}

            <div className="contact-location">
              <MapPin size={16} />

              <span>
                Haldwani, India
              </span>
            </div>

          </motion.div>


          {/* =================================================
              RIGHT SIDE — CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="contact-form-card"
          >

            <div className="contact-form-header">

              <p>
                SEND A MESSAGE
              </p>

              <h3>
                Tell me about your idea.
              </h3>

            </div>


            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();

                const formData = new FormData(
                  event.currentTarget
                );

                const name = formData.get("name");
                const email = formData.get("email");
                const message = formData.get("message");

                const subject = encodeURIComponent(
                  `Portfolio Contact from ${name}`
                );

                const body = encodeURIComponent(
                  `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
                );

                window.location.href =
                  `mailto:pandeydiksha7579@gmail.com?subject=${subject}&body=${body}`;
              }}
            >

              {/* Name */}

              <div className="contact-field">

                <label htmlFor="contact-name">
                  Your Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

              </div>


              {/* Email */}

              <div className="contact-field">

                <label htmlFor="contact-email">
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

              </div>


              {/* Message */}

              <div className="contact-field">

                <label htmlFor="contact-message">
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about your project or opportunity..."
                  required
                />

              </div>


              {/* Submit */}

              <button
                type="submit"
                className="contact-submit"
              >

                <span>
                  Send Message
                </span>

                <ArrowUpRight size={17} />

              </button>

            </form>

          </motion.div>

        </div>


        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="contact-bottom"
        >

          <div>

            <span>
              HAVE AN OPPORTUNITY?
            </span>

            <strong>
              Let's make it happen.
            </strong>

          </div>

          <a
            href="mailto:pandeydiksha7579@gmail.com"
            className="contact-bottom-button"
          >
            Get in touch

            <ArrowUpRight size={16} />

          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;