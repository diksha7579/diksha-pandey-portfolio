import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Code2,
  Globe,
  Terminal,
} from "lucide-react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "Cognizant",
      role: "ASP.NET Full Stack Intern",
      period: "2026",
      location: "Chennai, India",
      description:
        "Worked on full-stack web application development using ASP.NET and React. Contributed to building responsive interfaces, backend functionality, database-driven features, and real-world application workflows.",
      technologies: [
        "ASP.NET",
        "React",
        "C#",
        "SQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      icon: Code2,
      featured: true,
    },
    {
      company: "IBM SkillsBuild",
      role: "Web Development Intern",
      period: "Jun 2025 – Aug 2025",
      location: "Virtual",
      description:
        "Developed responsive web interfaces using HTML, CSS, and JavaScript while strengthening practical frontend development and web design skills.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
      icon: Globe,
      featured: false,
    },
    {
      company: "Postman",
      role: "API Testing & Documentation Intern",
      period: "Feb 2025 – Mar 2025",
      location: "Virtual",
      description:
        "Explored RESTful API concepts, API testing workflows, request and response handling, and API documentation using Postman.",
      technologies: [
        "Postman",
        "REST API",
        "API Testing",
        "API Documentation",
      ],
      icon: Terminal,
      featured: false,
    },
  ];

  return (
    <section
      id="experience"
      className="
        experience-section
        relative
        overflow-hidden
        px-6
        py-28
        sm:px-10
        lg:px-16
      "
    >
      {/* Background glow */}
      <div className="experience-glow experience-glow-one" />
      <div className="experience-glow experience-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="experience-eyebrow">
            02 / EXPERIENCE
          </p>

          <h2 className="experience-heading">
            Where I've
            <span> worked.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A journey through internships and hands-on development
            experiences that shaped the way I build software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="experience-timeline">
          {/* Main timeline line */}
          <div className="experience-line">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="experience-line-progress"
            />
          </div>

          <div className="space-y-14">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={experience.company}
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
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="experience-item"
                >
                  {/* Timeline node */}
                  <div className="experience-node">
                    <motion.div
                      whileInView={{
                        scale: [0.7, 1.15, 1],
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2 + index * 0.12,
                      }}
                      className="experience-node-inner"
                    >
                      <Icon size={17} />
                    </motion.div>
                  </div>

                  {/* Experience card */}
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`experience-card ${
                      experience.featured
                        ? "experience-card-featured"
                        : ""
                    }`}
                  >
                    {/* Top */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="experience-company-icon">
                          <BriefcaseBusiness size={20} />
                        </div>

                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300/70">
                            {experience.company}
                          </p>

                          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                            {experience.role}
                          </h3>
                        </div>
                      </div>

                      {experience.featured && (
                        <span className="experience-current-badge">
                          Featured Experience
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="experience-meta">
                      <span>
                        <CalendarDays size={14} />
                        {experience.period}
                      </span>

                      <span>
                        <MapPin size={14} />
                        {experience.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-6 max-w-4xl text-sm leading-8 text-slate-400 sm:text-base">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="experience-tech"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Decorative number */}
                    <span className="experience-number">
                      0{index + 1}
                    </span>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;