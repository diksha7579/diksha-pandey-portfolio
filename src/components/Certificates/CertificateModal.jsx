import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Building2,
  Tag,
} from "lucide-react";
import { useEffect } from "react";
import "./Certificates.css";

function CertificateModal({
  isOpen,
  certificate,
  certificates,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="certificate-modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="certificate-modal"
            onClick={(e) => e.stopPropagation()}
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <button
              className="certificate-close"
              onClick={onClose}
            >
              <X size={20} />
            </button>

            <div className="certificate-modal-grid">
              <div className="certificate-preview">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="eager"
                />
              </div>

              <div className="certificate-information">
                <span className="certificate-category">
                  {certificate.category}
                </span>

                <h2>{certificate.title}</h2>

                <p className="certificate-subtitle">
                  {certificate.subtitle}
                </p>

                <div className="certificate-details">
                  <div>
                    <Building2 size={17} />
                    <span>{certificate.issuer}</span>
                  </div>

                  <div>
                    <Calendar size={17} />
                    <span>{certificate.year}</span>
                  </div>

                  <div>
                    <Tag size={17} />
                    <span>Verified Certificate</span>
                  </div>
                </div>

                <p className="certificate-description">
                  {certificate.description}
                </p>

                <div className="certificate-counter">
                  {currentIndex + 1} / {certificates.length}
                </div>

                <div className="certificate-navigation">
                  <button
                    onClick={onPrevious}
                    className="certificate-nav-button"
                  >
                    <ChevronLeft size={18} />
                    Previous
                  </button>

                  <button
                    onClick={onNext}
                    className="certificate-nav-button primary"
                  >
                    Next
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CertificateModal;