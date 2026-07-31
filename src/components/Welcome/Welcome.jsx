import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Welcome.css";

const greetings = [
  {
    text: "Hello",
    language: "English",
  },
  {
    text: "Namaste",
    language: "Hindi",
  },
  {
    text: "Salaam",
    language: "Arabic / Urdu",
  },
  {
    text: "Hola",
    language: "Spanish",
  },
  {
    text: "Bonjour",
    language: "French",
  },
  {
    text: "Ciao",
    language: "Italian",
  },
];

function Welcome({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const greetingTimer = setInterval(() => {
      setCurrentIndex((previous) => {
        if (previous < greetings.length - 1) {
          return previous + 1;
        }

        clearInterval(greetingTimer);

        setTimeout(() => {
          setShowIntro(false);
        }, 900);

        return previous;
      });
    }, 1000);

    return () => clearInterval(greetingTimer);
  }, []);

  useEffect(() => {
    if (!showIntro) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000);

      return () => clearTimeout(completeTimer);
    }
  }, [showIntro, onComplete]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.section
          className="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(18px)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <div className="welcome-orb welcome-orb-one" />
          <div className="welcome-orb welcome-orb-two" />

          <div className="welcome-grid" />

          <div className="welcome-content">
            <motion.div
              className="welcome-small-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Welcome to my digital space
            </motion.div>

            <div className="greeting-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={greetings[currentIndex].text}
                  className="greeting"
                  initial={{
                    opacity: 0,
                    y: 45,
                    scale: 0.92,
                    filter: "blur(12px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -45,
                    scale: 1.05,
                    filter: "blur(12px)",
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {greetings[currentIndex].text}
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={greetings[currentIndex].language}
                className="language-label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {greetings[currentIndex].language}
              </motion.div>
            </AnimatePresence>

            <div className="welcome-progress">
              {greetings.map((_, index) => (
                <motion.span
                  key={index}
                  className={`welcome-dot ${
                    index === currentIndex ? "active" : ""
                  }`}
                  animate={{
                    scale: index === currentIndex ? 1.35 : 1,
                    opacity: index <= currentIndex ? 1 : 0.25,
                  }}
                  transition={{ duration: 0.25 }}
                />
              ))}
            </div>
          </div>

          <motion.div
            className="welcome-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span>DIKSHA PANDEY</span>

            <span className="welcome-line" />

            <span>FULL STACK DEVELOPER</span>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Welcome;