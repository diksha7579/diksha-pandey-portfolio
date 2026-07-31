import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
} from "lucide-react";
import projectsData from "../../data/projectsData";
import "./Projects.css";

function Projects() {
  return (
    <section
      id="projects"
      className="projects-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      {/* Background glows */}
      <div className="projects-glow projects-glow-one" />
      <div className="projects-glow projects-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="projects-eyebrow">
            04 / PROJECTS
          </p>

          <h2 className="projects-heading">
            Things I&apos;ve
            <span> built.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A collection of projects where I&apos;ve applied my
            development skills to build practical, interactive,
            and user-focused solutions.
          </p>
        </motion.div>


        {/* =====================================================
            PROJECT LIST
        ===================================================== */}

        <div className="projects-list">

          {projectsData.map((project, index) => {
            const firstImage = project.images?.[0];

            return (
              <motion.article
                key={project.id}
                className={`project-card ${
                  index % 2 !== 0
                    ? "project-card-reverse"
                    : ""
                }`}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
              >

                {/* =================================================
                    PROJECT IMAGE
                ================================================= */}

                <div className="project-image-wrapper">

                  {firstImage ? (
                    <div className="project-image-container">

                      <img
                        src={firstImage}
                        alt={`${project.title} project preview`}
                        className="project-image"
                        loading={
                          index === 0
                            ? "eager"
                            : "lazy"
                        }
                      />

                      <div className="project-image-overlay" />

                      <div className="project-image-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="project-image-view">
                        <ArrowUpRight size={20} />
                      </div>

                    </div>
                  ) : (
                    <div className="project-image-placeholder">

                      <Layers3 size={42} />

                      <span>
                        Project Preview
                      </span>

                    </div>
                  )}

                </div>


                {/* =================================================
                    PROJECT CONTENT
                ================================================= */}

                <div className="project-content">

                  {/* Category */}

                  <div className="project-meta">

                    <span>
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="project-featured">
                        Featured
                      </span>
                    )}

                  </div>


                  {/* Title */}

                  <h3 className="project-title">
                    {project.title}
                  </h3>


                  {/* Description */}

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* Technologies */}

                  <div className="project-technologies">

                    {project.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="project-tech"
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>


                  {/* =================================================
                      PROJECT BUTTONS
                  ================================================= */}

                  <div className="project-actions">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-button project-button-primary"
                      >
                        <Code2 size={16} />

                        GitHub

                        <ArrowUpRight size={15} />
                      </a>
                    )}


                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-button project-button-secondary"
                      >
                        <ExternalLink size={16} />

                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

              </motion.article>
            );
          })}

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
          className="projects-bottom-card"
        >

          <div className="projects-bottom-icon">
            <Layers3 size={19} />
          </div>

          <div>

            <p className="projects-bottom-title">
              Always building something new.
            </p>

            <p className="projects-bottom-text">
              I enjoy turning ideas into practical applications
              while continuously learning new technologies and
              improving my development skills.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Projects;