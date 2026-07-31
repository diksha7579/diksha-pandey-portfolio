import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import profileImage from "../../assets/images/profile/profile.png";
import resumeFile from "../../assets/resume/Resume.pdf";

import "./Hero.css";

function Hero() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/diksha22scfksp",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dikshapandey75/",
      icon: FaLinkedin,
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/diksha_pandey91/",
      icon: SiLeetcode,
    },
  ];

  return (
    <section
      id="home"
      className="
        hero-section
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-6
        pb-16
        pt-32
        sm:px-10
        lg:px-16
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-14
          lg:grid-cols-[1.15fr_0.85fr]
          lg:gap-10
        "
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-400/5
              px-4
              py-2
              text-xs
              font-medium
              text-emerald-300
              backdrop-blur-md
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-emerald-400
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-emerald-400
                "
              />
            </span>

            Open to opportunities
          </motion.div>

          {/* Small Heading */}
          <p
            className="
              mb-4
              text-sm
              font-medium
              uppercase
              tracking-[0.35em]
              text-violet-300/80
            "
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="hero-title">
            Diksha
            <span> Pandey.</span>
          </h1>

          {/* Role */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span
              className="
                text-xl
                font-medium
                text-slate-200
                sm:text-2xl
              "
            >
              Full Stack Developer
            </span>

            <span
              className="
                hidden
                h-1
                w-1
                rounded-full
                bg-violet-400
                sm:block
              "
            />

            <span
              className="
                text-sm
                text-slate-500
                sm:text-base
              "
            >
              CSE • 2026
            </span>
          </div>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            Building scalable and user-friendly web applications with modern
            frontend and backend technologies. I enjoy turning ideas into
            clean, interactive, and meaningful digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {/* View Work */}
            <a
              href="#projects"
              className="
                group
                hero-primary-button
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-6
                py-3.5
                text-sm
                font-semibold
              "
            >
              View My Work

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Resume */}
            <a
              href={resumeFile}
              download="Diksha-Pandey-Resume.pdf"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-slate-200
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-violet-400/40
                hover:bg-violet-500/10
                hover:text-white
              "
            >
              <Download size={17} />

              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-3">
            <span
              className="
                mr-2
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-slate-600
              "
            >
              Find me
            </span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="
                    hero-social
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    text-slate-400
                    transition-all
                    duration-300
                    hover:border-violet-400/40
                    hover:bg-violet-500/10
                    hover:text-white
                  "
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT SIDE PROFILE VISUAL */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.82,
            x: 35,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            flex
            w-full
            max-w-[460px]
            items-center
            justify-center
            lg:ml-auto
          "
        >
          {/* Outer Glow */}
          <div
            className="
              hero-image-glow
              absolute
              h-[330px]
              w-[330px]
              rounded-full
              sm:h-[390px]
              sm:w-[390px]
            "
          />

          {/* Rotating Ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[310px]
              w-[310px]
              rounded-full
              border
              border-dashed
              border-violet-400/25
              sm:h-[390px]
              sm:w-[390px]
            "
          />

          {/* Secondary Ring */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[275px]
              w-[275px]
              rounded-full
              border
              border-cyan-400/10
              sm:h-[350px]
              sm:w-[350px]
            "
          />

          {/* Profile Image */}
          <div
            className="
              relative
              z-10
              h-[270px]
              w-[270px]
              overflow-hidden
              rounded-[2rem]
              border
              border-white/10
              bg-slate-900/70
              shadow-[0_0_80px_rgba(139,92,246,0.18)]
              backdrop-blur-xl
              sm:h-[340px]
              sm:w-[340px]
            "
          >
            <img
              src={profileImage}
              alt="Diksha Pandey"
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                hover:scale-105
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950/35
                via-transparent
                to-violet-400/5
              "
            />
          </div>

          {/* Floating Developer Badge */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-0
              top-8
              z-20
              hidden
              rounded-2xl
              border
              border-white/10
              bg-slate-950/75
              px-4
              py-3
              shadow-[0_0_30px_rgba(139,92,246,0.15)]
              backdrop-blur-xl
              sm:block
            "
          >
            <div className="flex items-center gap-2">
              <Sparkles
                size={15}
                className="text-violet-300"
              />

              <span
                className="
                  text-xs
                  font-semibold
                  text-slate-200
                "
              >
                Full Stack
              </span>
            </div>

            <p
              className="
                mt-1
                text-[10px]
                text-slate-500
              "
            >
              Developer
            </p>
          </motion.div>

          {/* Floating Location Badge */}
          <motion.div
            animate={{
              y: [0, 9, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              bottom-6
              left-0
              z-20
              hidden
              rounded-2xl
              border
              border-white/10
              bg-slate-950/75
              px-4
              py-3
              shadow-[0_0_30px_rgba(34,211,238,0.1)]
              backdrop-blur-xl
              sm:block
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-slate-600
              "
            >
              Based in
            </p>

            <p
              className="
                mt-1
                text-xs
                font-semibold
                text-slate-200
              "
            >
              Haldwani, India
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-slate-600
          transition-colors
          hover:text-violet-300
          md:flex
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.4em]
          "
        >
          Scroll to explore
        </span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;