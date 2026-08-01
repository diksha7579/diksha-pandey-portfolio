import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import certificatesData from "../../data/certificatesData";
import CertificateModal from "./CertificateModal";

import "./Certificates.css";

function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  /* =========================================================
     AUTO PLAY
  ========================================================= */

  useEffect(() => {
    if (isHovered || selectedCertificate) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === certificatesData.length - 1
          ? 0
          : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, selectedCertificate]);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const nextCertificate = () => {
    const nextIndex =
      currentIndex === certificatesData.length - 1
        ? 0
        : currentIndex + 1;

    setCurrentIndex(nextIndex);

    if (selectedCertificate) {
      setSelectedCertificate(certificatesData[nextIndex]);
    }
  };

  const previousCertificate = () => {
    const previousIndex =
      currentIndex === 0
        ? certificatesData.length - 1
        : currentIndex - 1;

    setCurrentIndex(previousIndex);

    if (selectedCertificate) {
      setSelectedCertificate(certificatesData[previousIndex]);
    }
  };

  /* =========================================================
     MODAL
  ========================================================= */

  const openCertificate = (certificate) => {
    const index = certificatesData.findIndex(
      (item) => item.id === certificate.id
    );

    setCurrentIndex(index);
    setSelectedCertificate(certificatesData[index]);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  return (
    <section
      id="certificates"
      className="certificates-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="certificates-glow certificates-glow-one" />
      <div className="certificates-glow certificates-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================== Heading ===================== */}

        <motion.div
          className="certificates-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="certificates-eyebrow">
            05 / CERTIFICATIONS
          </p>

          <h2 className="certificates-heading">
            Professional
            <span> Credentials.</span>
          </h2>

          <p className="certificates-description">
            A curated collection of certifications that reflect my
            continuous learning journey in software development,
            programming, networking, databases and emerging
            technologies.
          </p>
        </motion.div>

        {/* ===================== Showcase ===================== */}

        <div className="certificate-showcase">

          {/* LEFT PANEL */}

          <motion.div
            className="certificate-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="certificate-count">

              <Award size={28} />

              <div>
                <strong>{certificatesData.length}</strong>

                <span>Professional Certificates</span>
              </div>

            </div>

            <div className="certificate-active-info">

              <span className="certificate-category-tag">
                {certificatesData[currentIndex].category}
              </span>

              <h3>
                {certificatesData[currentIndex].title}
              </h3>

              <h4>
                {certificatesData[currentIndex].subtitle}
              </h4>

              <p>
                {certificatesData[currentIndex].description}
              </p>

            </div>

            <div className="certificate-controls">

              <button onClick={previousCertificate}>
                <ChevronLeft size={20} />
              </button>

              <button onClick={nextCertificate}>
                <ChevronRight size={20} />
              </button>

            </div>

          </motion.div>

          {/* RIGHT PANEL */}

          <motion.div
            className="certificate-stack"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {certificatesData.map((certificate, index) => {

              const offset =
                (index - currentIndex + certificatesData.length) %
                certificatesData.length;

              return (

                <motion.div
                  key={certificate.id}
                  className="certificate-card"

                  animate={{
                    y: offset * 22,
                    scale: 1 - offset * 0.05,
                    rotateZ: offset * 1.2,
                    opacity: offset > 4 ? 0 : 1,
                  }}

                  style={{
                    zIndex:
                      certificatesData.length - offset,
                  }}

                  whileHover={{
                    y: offset * 22 - 12,
                    scale: 1.04,
                    rotateZ: 0,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                  }}

                  onClick={() =>
                    openCertificate(certificate)
                  }
                >

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading={
                      index === 0
                        ? "eager"
                        : "lazy"
                    }
                  />

                  <div className="certificate-card-overlay">

                    <span>
                      {certificate.issuer}
                    </span>

                    <h4>
                      {certificate.title}
                    </h4>

                  </div>

                </motion.div>

              );
            })}

          </motion.div>

        </div>

      </div>

      <CertificateModal
        isOpen={Boolean(selectedCertificate)}
        certificate={selectedCertificate}
        certificates={certificatesData}
        currentIndex={currentIndex}
        onClose={closeCertificate}
        onPrevious={previousCertificate}
        onNext={nextCertificate}
      />

    </section>
  );
}

export default Certificates;