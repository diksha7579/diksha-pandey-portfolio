import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Globe,
  Server,
  Database,
  Wrench,
  Cpu,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import "./Skills.css";

const categories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Globe,
    color: "violet",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
    ],
  },

  {
    id: "backend",
    title: "Backend",
    icon: Server,
    color: "cyan",
    description: "Developing scalable server-side applications.",
    skills: ["ASP.NET", "Node.js", "REST API", "Authentication", "JWT"],
  },

  {
    id: "database",
    title: "Database",
    icon: Database,
    color: "emerald",
    description: "Managing structured and relational data efficiently.",
    skills: ["MySQL", "SQL", "Database Design"],
  },

  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    color: "orange",
    description: "Problem solving and software development.",
    skills: ["C++", "Java", "C#", "OOP", "DSA"],
  },

  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    color: "pink",
    description: "Modern development workflow and collaboration.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "VS Code",
      "Visual Studio",
      "Figma",
    ],
  },

  {
    id: "learning",
    title: "Currently Exploring",
    icon: Cpu,
    color: "blue",
    description: "Technologies I continue to learn and experiment with.",
    skills: ["Three.js", "GSAP", "Vite", "React Performance", "Cloud"],
  },
];

function Skills() {
  const [active, setActive] = useState(categories[0]);
  return (
    <section
      id="skills"
      className="skills-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/*
            SECTION HEADING
         */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="skills-eyebrow">03 / SKILLS</p>

          <h2 className="skills-heading">
            Tech
            <span> Arsenal.</span>
          </h2>

          <p className="skills-description">
            A curated collection of technologies, frameworks and tools I use to
            design, build and deploy modern full-stack applications. Always
            learning, always evolving.
          </p>
        </motion.div>

        {/* 
            MAIN LAYOUT
     */}

        <div className="arsenal-layout">
          {/* LEFT SIDE */}

          <div className="arsenal-orbit">
            <div className="orbit-ring orbit-ring-1"></div>
            <div className="orbit-ring orbit-ring-2"></div>
            <div className="orbit-ring orbit-ring-3"></div>

            {/* CENTER */}

            <motion.div
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="arsenal-core"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="core-icon"
              >
                <Sparkles size={32} />
              </motion.div>

              <small>FULL STACK</small>

              <h3>TECH</h3>

              <h2>ARSENAL</h2>

              <span>2026</span>
            </motion.div>

            {/* CATEGORY NODES */}

            <div className="orbit-nodes">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <motion.button
                    key={category.id}
                    whileHover={{
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    onClick={() => setActive(category)}
                    className={`orbit-node ${
                      active.id === category.id ? "active" : ""
                    }`}
                  >
                    <Icon size={18} />

                    <span>{category.title}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
          {/* 
              RIGHT SIDE PANEL
           */}

          <motion.div
            key={active.id}
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="arsenal-panel"
          >
            <div className={`panel-header ${active.color}`}>
              <div className="panel-icon">
                <active.icon size={26} />
              </div>

              <div>
                <p className="panel-label">CATEGORY</p>

                <h3>{active.title}</h3>
              </div>
            </div>

            <p className="panel-description">{active.description}</p>

            {/* SKILLS */}

            <div className="panel-skills">
              <AnimatePresence>
                {active.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="skill-chip"
                  >
                    <ChevronRight size={15} />

                    {skill}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* QUOTE */}

            <div className="arsenal-quote">
              <h4>Development Philosophy</h4>

              <p>
                I believe every technology is a tool for solving real-world
                problems. Rather than memorizing frameworks, I focus on
                understanding concepts, writing clean code, and continuously
                improving through practical projects.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
