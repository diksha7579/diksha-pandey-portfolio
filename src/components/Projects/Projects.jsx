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
      <div className="projects-glow projects-glow-one" />
      <div className="projects-glow projects-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-16"
        >
          <p className="projects-eyebrow">
            04 / PROJECTS
          </p>

          <h2 className="projects-heading">
            Things I've
            <span> built.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A collection of projects where I've transformed ideas into practical,
            responsive and interactive applications while continuously improving
            my full stack development skills.
          </p>
        </motion.div>

        <div className="projects-list">

          {projectsData.map((project, index) => (

            <motion.article
              key={project.id}
              className={`project-card ${
                index % 2 ? "project-card-reverse" : ""
              }`}
              initial={{
                opacity:0,
                y:50
              }}
              whileInView={{
                opacity:1,
                y:0
              }}
              viewport={{
                once:true,
                amount:.2
              }}
              transition={{
                duration:.7,
                delay:index*.08
              }}
            >

              {/* IMAGE */}

              <div className="project-image-wrapper">

                {project.images?.length ? (

                  <div className="project-image-container">

                    {/* FIRST IMAGE */}

                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="project-image project-image-front"
                    />

                    {/* SECOND IMAGE */}

                    {project.images[1] && (

                      <img
                        src={project.images[1]}
                        alt={project.title}
                        className="project-image project-image-back"
                      />

                    )}

                    <div className="project-image-overlay"/>

                    <div className="project-image-number">
                      {String(index+1).padStart(2,"0")}
                    </div>

                    <div className="project-image-view">
                      <ArrowUpRight size={20}/>
                    </div>

                  </div>

                ) : (

                  <div className="project-image-placeholder">

                    <Layers3 size={40}/>

                    <span>Preview</span>

                  </div>

                )}

              </div>


              {/* CONTENT */}

              <div className="project-content">

                <div className="project-meta">

                  <span>{project.category}</span>

                  {project.featured && (

                    <span className="project-featured">
                      Featured
                    </span>

                  )}

                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">

                  {project.technologies.map((tech)=>(
                    <span
                      key={tech}
                      className="project-tech"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-actions">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-button project-button-primary"
                  >
                    <Code2 size={16}/>
                    GitHub
                  </a>

                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button project-button-secondary"
                    >
                      <ExternalLink size={16}/>
                      Live Demo
                    </a>

                  )}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;