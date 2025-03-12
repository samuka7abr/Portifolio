import { motion } from "framer-motion";
import { FaTerminal, FaBars, FaTimes, FaGithub } from "react-icons/fa";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const nome: string = "Samuel Abrão";
  const letters: string[] = nome.split("");

  const scrollToSection = (id: string) => {
    setIsOpen(false); // Fecha o menu mobile ao clicar
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Ajusta a posição para evitar sobreposição do header
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/15 text-white border-b border-gray-700 border-b-gray-100/30 py-4 px-6 flex justify-between items-center">
      {/* Nome animado com ícone */}
      <div className="flex items-center gap-3 text-2xl sm:text-3xl font-bold">
        <FaTerminal className="text-green-400 text-4xl" />

        <motion.div className="flex text-[22px] md:text-xl overflow-hidden">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.06,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Menu Desktop */}
      <nav className="hidden sm:flex items-center gap-8 text-[16px] text-white/75">
        <button onClick={() => scrollToSection("about")} className="hover:text-green-400 transition-all duration-300">
          About
        </button>
        <button onClick={() => scrollToSection("projects")} className="hover:text-green-400 transition-all duration-300">
          Projects
        </button>
        <button onClick={() => scrollToSection("experience")} className="hover:text-green-400 transition-all duration-300">
          Experience
        </button>
        <button onClick={() => scrollToSection("skills")} className="hover:text-green-400 transition-all duration-300">
          Skills
        </button>
        <button onClick={() => scrollToSection("contact")} className="hover:text-green-400 transition-all duration-300">
          Contact
        </button>

        {/* Ícone do GitHub */}
        <a
          href="https://github.com/samuka7abr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-white hover:text-green-400 transition"
        >
          <FaGithub />
        </a>
      </nav>

      {/* Menu Mobile */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Responsivo Mobile */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-black/90 text-white flex flex-col items-center py-4 gap-4 sm:hidden">
          <button onClick={() => scrollToSection("about")} className="hover:text-green-400 transition-all duration-300">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-green-400 transition-all duration-300">
            Projects
          </button>
          <button onClick={() => scrollToSection("experience")} className="hover:text-green-400 transition-all duration-300">
            Experience
          </button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-green-400 transition-all duration-300">
            Skills
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-green-400 transition-all duration-300">
            Contact
          </button>

          {/* Ícone do GitHub no menu mobile */}
          <a
            href="https://github.com/samuka7abr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-green-400 transition mt-2"
          >
            <FaGithub />
          </a>
        </nav>
      )}
    </header>
  );
}
