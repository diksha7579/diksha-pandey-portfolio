import { motion } from "framer-motion";
import { Sparkles, Rocket, Code2, Users } from "lucide-react";
import "./About.css";

function About() {
  const highlights = [
    {
      value: "4+",
      label: "Projects",
      icon: Rocket,
    },
    {
      value: "12+",
      label: "Certificates",
      icon: Sparkles,
    },
    {
      value: "20+",
      label: "Technologies",
      icon: Code2,
    },
    {
      value: "1",
      label: "Internship",
      icon: Users,
    },
  ];

  return (
    <section
      id="about"
      className="about-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="about-glow about-glow-one" />
      <div className="about-glow about-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="about-eyebrow">01 / ABOUT ME</p>

          <h2 className="about-heading">
            Meet
            <span> Diksha.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Passionate about building scalable software, solving real-world
            problems and continuously improving through modern technologies.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
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
                    WHO I AM
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    Building Modern Software Solutions
                  </h3>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-sm leading-8 text-slate-400 sm:text-base">
                {" "}
                <p>
                  {" "}
                  I'm <strong className="text-slate-200">Diksha Pandey</strong>,
                  a Full Stack Developer passionate about building modern,
                  responsive, and user-friendly web applications.{" "}
                </p>{" "}
                <p>
                  {" "}
                  I work with technologies like React, ASP.NET, JavaScript, C#,
                  and MySQL to develop scalable and efficient software
                  solutions.{" "}
                </p>{" "}
                <p>
                  {" "}
                  I enjoy solving real-world problems through clean code,
                  continuous learning, and creating meaningful digital
                  experiences.{" "}
                </p>{" "}
              </div>

              <div className="about-status">
                <p className="about-status-title">CURRENTLY LOOKING FOR</p>

                <div className="about-status-tags">
                  <span>Full Time</span>

                  <span>Software Developer</span>

                  <span>Full Stack Roles</span>
                </div>
              </div>

              <div className="about-quote">
                Great software is built through curiosity, consistency and
                continuous improvement.
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <div className="about-orbit">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="about-orbit-ring about-orbit-ring-one"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="about-orbit-ring about-orbit-ring-two"
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="about-center"
              >
                <Sparkles size={34} className="text-violet-300" />

                <p className="mt-3 text-xs uppercase tracking-[0.30em] text-slate-500">
                  FULL STACK
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">Software Developer</h3>

              </motion.div>

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
                      delay: 0.25 + index * 0.12,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                    }}
                    className={`about-stat about-stat-${index + 1}`}
                  >
                    <div className="about-stat-icon">
                      <Icon size={18} />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {item.value}
                      </h4>

                      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
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
