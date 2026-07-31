import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  ExternalLink,
} from "lucide-react";
import certificatesData from "../../data/certificatesData";
import "./Certificates.css";

function Certificates() {
  return (
    <section
      id="certificates"
      className="certificates-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Background effects */}
      <div className="certificates-glow certificates-glow-one" />
      <div className="certificates-glow certificates-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADING
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
          className="mb-16"
        >
          <p className="certificates-eyebrow">
            05 / CERTIFICATES
          </p>

          <h2 className="certificates-heading">
            Proof of my
            <span> learning.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Certifications and learning milestones that reflect my
            continuous growth across full-stack development,
            databases, networking, AI, and computer science.
          </p>
        </motion.div>


        {/* =====================================================
            FEATURED CERTIFICATES
        ===================================================== */}

        <div className="certificates-grid">

          {certificatesData.map((certificate, index) => (
            <motion.article
              key={certificate.id}
              className={`certificate-card ${
                certificate.featured
                  ? "certificate-card-featured"
                  : ""
              }`}
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.6,
                delay: Math.min(index * 0.05, 0.35),
              }}
              whileHover={{
                y: -7,
              }}
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="certificate-image-wrapper">

                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="certificate-image"
                  loading={index < 4 ? "eager" : "lazy"}
                />

                <div className="certificate-image-overlay" />

                <div className="certificate-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="certificate-award-icon">
                  <Award size={17} />
                </div>

              </div>


              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="certificate-content">

                <div className="certificate-category">
                  {certificate.category}
                </div>

                <h3 className="certificate-title">
                  {certificate.title}
                </h3>

                <p className="certificate-organization">
                  {certificate.organization}
                </p>


                {/* Bottom action */}

                <div className="certificate-footer">

                  <span className="certificate-verified">
                    <span className="certificate-dot" />
                    Certified
                  </span>

                  <button
                    type="button"
                    className="certificate-view-button"
                    onClick={() =>
                      window.open(
                        certificate.image,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    aria-label={`View ${certificate.title} certificate`}
                  >
                    View
                    <ArrowUpRight size={14} />
                  </button>

                </div>

              </div>

            </motion.article>
          ))}

        </div>


        {/* =====================================================
            BOTTOM MESSAGE
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
          className="certificates-learning-card"
        >

          <div className="certificates-learning-icon">
            <Award size={19} />
          </div>

          <div>

            <p className="certificates-learning-title">
              Always learning. Always improving.
            </p>

            <p className="certificates-learning-text">
              These certifications represent my commitment to
              continuously developing my technical knowledge and
              applying what I learn through practical projects.
            </p>

          </div>

          <ExternalLink
            size={17}
            className="certificates-learning-arrow"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Certificates;