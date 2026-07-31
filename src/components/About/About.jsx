import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Code2,
  Sparkles,
  CalendarDays,
} from "lucide-react";
import "./About.css";

function About() {
  const highlights = [
    {
      value: "2026",
      label: "Graduation",
      icon: GraduationCap,
    },
    {
      value: "8.25",
      label: "CGPA",
      icon: Sparkles,
    },
    {
      value: "3+",
      label: "Projects",
      icon: Code2,
    },
    {
      value: "India",
      label: "Based In",
      icon: MapPin,
    },
  ];

  return (
    <section
      id="about"
      className="
        about-section
        relative
        overflow-hidden
        px-6
        py-28
        sm:px-10
        lg:px-16
      "
    >
      {/* Background glow */}
      <div className="about-glow about-glow-one" />
      <div className="about-glow about-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="about-eyebrow">
            01 / ABOUT ME
          </p>

          <h2 className="about-heading">
            Meet
            <span> Diksha.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A curious developer who enjoys transforming ideas into
            interactive, practical, and user-friendly digital experiences.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT — Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="about-card">
              <div className="about-card-line" />

              <div className="flex items-start gap-4">
                <div className="about-icon-box">
                  <Code2 size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-violet-300/70">
                    Who I am
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Full Stack Developer
                  </h3>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
                <p>
                  I'm <strong className="text-slate-200">Diksha Pandey</strong>,
                  a Computer Science Engineering graduate from{" "}
                  <strong className="text-slate-200">
                    Galgotias University
                  </strong>
                  .
                </p>

                <p>
                  I enjoy working across the frontend and backend to build
                  applications that are not only functional, but also clean,
                  responsive, and enjoyable to use.
                </p>

                <p>
                  My development journey has given me experience with modern
                  web technologies, full-stack application development,
                  databases, APIs, and collaborative project environments.
                </p>
              </div>

              {/* Education */}
              <div className="about-education">
                <div className="about-education-icon">
                  <GraduationCap size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-violet-300/60">
                    Education
                  </p>

                  <h4 className="mt-1 text-base font-semibold text-white sm:text-lg">
                    B.Tech — Computer Science Engineering
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    Galgotias University
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="about-mini-tag">
                      <CalendarDays size={13} />
                      2026
                    </span>

                    <span className="about-mini-tag">
                      CGPA 8.25
                    </span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                <MapPin size={14} className="text-violet-400" />
                Haldwani, India
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="about-orbit">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="about-orbit-ring about-orbit-ring-one"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="about-orbit-ring about-orbit-ring-two"
              />

              {/* Center */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="about-center"
              >
                <Sparkles
                  size={28}
                  className="text-violet-300"
                />

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                  Building
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  Digital Experiences
                </p>
              </motion.div>

              {/* Highlight cards */}
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25 + index * 0.1,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    className={`about-stat about-stat-${index + 1}`}
                  >
                    <div className="about-stat-icon">
                      <Icon size={16} />
                    </div>

                    <div>
                      <p className="text-lg font-bold text-white">
                        {item.value}
                      </p>

                      <p className="text-[9px] uppercase tracking-[0.18em] text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;