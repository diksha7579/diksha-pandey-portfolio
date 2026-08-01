import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Atom,
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers3,
  Palette,
  Send,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";
import { useRef } from "react";
import "./Skills.css";

function MagneticSkill({ skill, index }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
    mass: 0.4,
  });

  const rotateX = useTransform(springY, [-30, 30], [8, -8]);
  const rotateY = useTransform(springX, [-30, 30], [-8, 8]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set((mouseX - centerX) * 0.2);
    y.set((mouseY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const SkillIcon = skill.icon;

  return (
    <motion.div
      ref={cardRef}
      className="floating-skill"
      style={{
        left: `${skill.position.x}%`,
        top: `${skill.position.y}%`,
        x: springX,
        y: springY,
        rotateX,
        rotateY,
      }}
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.025, 0.6),
      }}
      whileHover={{
        scale: 1.08,
        zIndex: 50,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="floating-skill-inner">
        <div className="floating-skill-icon">
          <SkillIcon size={17} />
        </div>

        <span>{skill.name}</span>

        <div className="floating-skill-shine" />
      </div>
    </motion.div>
  );
}

function Skills() {
  const playgroundRef = useRef(null);

  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const spotlightSpringX = useSpring(spotlightX, {
    stiffness: 100,
    damping: 20,
  });

  const spotlightSpringY = useSpring(spotlightY, {
    stiffness: 100,
    damping: 20,
  });

  const handlePlaygroundMove = (event) => {
    if (!playgroundRef.current) return;

    const rect = playgroundRef.current.getBoundingClientRect();

    const x = ((event.clientX - rect.left) / rect.width) * 100;

    const y = ((event.clientY - rect.top) / rect.height) * 100;

    spotlightX.set(x);
    spotlightY.set(y);
  };

  const handlePlaygroundLeave = () => {
    spotlightX.set(50);
    spotlightY.set(50);
  };

  /*
   * ==========================================================
   * SKILL POSITIONS
   * ==========================================================
   *
   * x = horizontal position
   * y = vertical position
   *
   * 0   = far left / top
   * 50  = center
   * 100 = far right / bottom
   *
   * The center area around 50 / 50 is intentionally kept clear.
   */

  const skillGroups = [
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        {
          name: "React",
          icon: Atom,
          position: { x: 8, y: 13 },
        },
        {
          name: "JavaScript",
          icon: Braces,
          position: { x: 31, y: 7 },
        },
        {
          name: "HTML",
          icon: FileCode2,
          position: { x: 58, y: 8 },
        },
        {
          name: "CSS",
          icon: Palette,
          position: { x: 87, y: 14 },
        },
        {
          name: "Bootstrap",
          icon: Layers3,
          position: { x: 16, y: 31 },
        },
        {
          name: "Tailwind CSS",
          icon: Palette,
          position: { x: 75, y: 27 },
        },
      ],
    },

    {
      title: "Backend",
      icon: Server,
      skills: [
        {
          name: "ASP.NET",
          icon: Server,
          position: { x: 7, y: 48 },
        },
        {
          name: "Node.js",
          icon: Terminal,
          position: { x: 91, y: 48 },
        },
      ],
    },

    {
      title: "Database",
      icon: Database,
      skills: [
        {
          name: "MySQL",
          icon: Database,
          position: { x: 19, y: 76 },
        },
      ],
    },

    {
      title: "Programming",
      icon: Code2,
      skills: [
        {
          name: "C++",
          icon: Code2,
          position: { x: 7, y: 67 },
        },
        {
          name: "Java",
          icon: Braces,
          position: { x: 31, y: 88 },
        },
        {
          name: "C#",
          icon: Code2,
          position: { x: 69, y: 89 },
        },
      ],
    },

    {
      title: "Tools",
      icon: Wrench,
      skills: [
        {
          name: "Git",
          icon: GitBranch,
          position: { x: 84, y: 68 },
        },
        {
          name: "GitHub",
          icon: Code2,
          position: { x: 91, y: 33 },
        },
        {
          name: "Postman",
          icon: Send,
          position: { x: 42, y: 91 },
        },
        {
          name: "VS Code",
          icon: Code2,
          position: { x: 10, y: 86 },
        },
        {
          name: "Figma",
          icon: Palette,
          position: { x: 93, y: 81 },
        },
        {
          name: "Visual Studio",
          icon: Code2,
          position: { x: 78, y: 57 },
        },
        {
          name: "IntelliJ IDEA",
          icon: Terminal,
          position: { x: 5, y: 80 },
        },
        {
          name: "Swagger",
          icon: Code2,
          position: { x: 42, y: 19 },
        },
      ],
    },

    {
      title: "Portfolio Tech",
      icon: Layers3,
      skills: [
        {
          name: "Three.js",
          icon: Layers3,
          position: { x: 45, y: 4 },
        },
        {
          name: "GSAP",
          icon: Wrench,
          position: { x: 68, y: 17 },
        },
        {
          name: "Framer Motion",
          icon: Atom,
          position: { x: 83, y: 91 },
        },
        {
          name: "React Tilt",
          icon: Layers3,
          position: { x: 25, y: 58 },
        },
        {
          name: "React CountUp",
          icon: Code2,
          position: { x: 72, y: 76 },
        },
        {
          name: "EmailJS",
          icon: Send,
          position: { x: 58, y: 96 },
        },
        {
          name: "Vite",
          icon: Terminal,
          position: { x: 94, y: 62 },
        },
      ],
    },
  ];

  const allSkills = skillGroups.flatMap((group) => group.skills);

  return (
    <section
      id="skills"
      className="skills-section relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="skills-glow skills-glow-one" />
      <div className="skills-glow skills-glow-two" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION HEADING */}
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
          className="mb-14"
        >
          <p className="skills-eyebrow">03 / SKILLS</p>

          <h2 className="skills-heading">
            Tech
            <span> Arsenal.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore the technologies I use to build modern, interactive and
            user-focused digital experiences.
          </p>
        </motion.div>

        {/* SKILLS PLAYGROUND */}
        <motion.div
          ref={playgroundRef}
          className="skills-playground"
          onMouseMove={handlePlaygroundMove}
          onMouseLeave={handlePlaygroundLeave}
          style={{
            "--spotlight-x": spotlightSpringX,
            "--spotlight-y": spotlightSpringY,
          }}
        >
          {/* BACKGROUND SPOTLIGHT */}
          <div className="skills-cursor-spotlight" />

          {/* ORBIT LINES */}
          <div className="skills-orbit skills-orbit-one" />
          <div className="skills-orbit skills-orbit-two" />
          <div className="skills-orbit skills-orbit-three" />

          {/* CENTER CORE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
            className="skills-core"
          >
            <div className="skills-core-ring skills-core-ring-one" />

            <div className="skills-core-ring skills-core-ring-two" />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="skills-core-symbol"
            >
              <Code2 size={30} />
            </motion.div>

            <span>TECH</span>

            <strong>ARSENAL</strong>

          </motion.div>

          {/* ALL SKILLS */}
          <div className="floating-skills-container">
            {allSkills.map((skill, index) => (
              <MagneticSkill
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* CATEGORY LABELS */}
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
          className="skills-category-list"
        >
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div key={group.title} className="skills-category-item">
                <GroupIcon size={15} />

                <span>{group.title}</span>
              </div>
            );
          })}
        </motion.div>

        {/* LEARNING CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
          className="skills-learning-card"
        >
          <div className="skills-learning-icon">
            <Wrench size={18} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300/70">
              Built while learning
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-400">
              This portfolio itself is a hands-on project where I am learning
              and applying modern React animation, 3D, interaction, and UI
              technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
