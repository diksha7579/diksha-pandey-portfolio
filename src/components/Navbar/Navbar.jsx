import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-[90] w-full px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className="
          mx-auto flex max-w-7xl items-center justify-between
          rounded-2xl border border-white/10
          bg-slate-950/55 px-4 py-3
          shadow-[0_0_40px_rgba(0,0,0,0.25)]
          backdrop-blur-xl sm:px-5
        "
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <span
            className="
              flex h-10 w-10 items-center justify-center rounded-xl
              border border-violet-400/30
              bg-violet-500/10 text-violet-300
              shadow-[0_0_25px_rgba(139,92,246,0.15)]
              transition-all duration-300
              group-hover:border-violet-400/60
              group-hover:bg-violet-500/20
              group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
            "
          >
            <Code2 size={19} />
          </span>

          <div className="hidden sm:block">
            <p className="text-sm font-bold tracking-wide text-white">
              Diksha Pandey
            </p>

            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
              Full Stack Developer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                rounded-xl px-3 py-2
                text-xs font-medium text-slate-400
                transition-all duration-300
                hover:bg-white/5 hover:text-white
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Socials + CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* GitHub */}
          <a
            href="https://github.com/diksha22scfksp"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              flex h-9 w-9 items-center justify-center rounded-xl
              border border-white/10 text-slate-400
              transition-all duration-300
              hover:border-violet-400/40
              hover:bg-violet-500/10
              hover:text-white
            "
          >
            <FaGithub size={16} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dikshapandey75/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
              flex h-9 w-9 items-center justify-center rounded-xl
              border border-white/10 text-slate-400
              transition-all duration-300
              hover:border-violet-400/40
              hover:bg-violet-500/10
              hover:text-white
            "
          >
            <FaLinkedin size={16} />
          </a>

          {/* Hire Me */}
          <a
            href="#contact"
            className="
              ml-1 rounded-xl
              border border-violet-400/30
              bg-violet-500/10
              px-4 py-2
              text-xs font-semibold text-violet-200
              transition-all duration-300
              hover:border-violet-400/60
              hover:bg-violet-500/20
              hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
            "
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="
            flex h-10 w-10 items-center justify-center rounded-xl
            border border-white/10 text-slate-300
            transition-all
            hover:border-violet-400/40
            hover:bg-white/5
            lg:hidden
          "
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className="
            mx-auto mt-2 max-w-7xl rounded-2xl
            border border-white/10
            bg-slate-950/90 p-3
            shadow-2xl backdrop-blur-xl
            lg:hidden
          "
        >
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="
                  rounded-xl px-4 py-3
                  text-sm text-slate-300
                  transition-all
                  hover:bg-violet-500/10
                  hover:text-white
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
            {/* Mobile GitHub */}
            <a
              href="https://github.com/diksha22scfksp"
              target="_blank"
              rel="noreferrer"
              className="
                flex flex-1 items-center justify-center gap-2
                rounded-xl border border-white/10 py-3
                text-sm text-slate-300
                transition-all
                hover:border-violet-400/40
                hover:bg-violet-500/10
                hover:text-white
              "
            >
              <FaGithub size={16} />
              GitHub
            </a>

            {/* Mobile LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dikshapandey75/"
              target="_blank"
              rel="noreferrer"
              className="
                flex flex-1 items-center justify-center gap-2
                rounded-xl border border-white/10 py-3
                text-sm text-slate-300
                transition-all
                hover:border-violet-400/40
                hover:bg-violet-500/10
                hover:text-white
              "
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;