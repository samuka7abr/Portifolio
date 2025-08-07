import { motion, AnimatePresence } from "framer-motion";
import { FaTerminal, FaBars, FaTimes, FaGithub, FaChevronDown } from "react-icons/fa";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const nome: string = "Samuel Abrão";
  const letters: string[] = nome.split("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
      
      // Não recolhe o header se estiver navegando
      if (!isNavigating) {
        if (scrollTop > 200) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavigating]);

  const scrollToSection = (id: string) => {
    setIsOpen(false); // Fecha o menu mobile ao clicar
    setIsNavigating(true); // Indica que está navegando
    setIsHeaderVisible(true); // Mantém o header visível
    
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 80; // Altura do header
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Reseta o estado de navegação após o scroll
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000); // Aguarda 1 segundo para o scroll terminar
    }
  };

  const toggleHeader = () => {
    setIsHeaderVisible(!isHeaderVisible);
  };

  return (
    <>
      {/* Header Desktop */}
      <motion.header 
        className={`w-full fixed top-0 left-0 z-50 py-4 px-6 flex justify-between items-center transition-all duration-300 ${
          isOpen 
            ? 'bg-[#13172A] backdrop-blur-sm text-white border-b-[1px] border-[#0A0C15]' 
            : 'bg-[#0A0C15] backdrop-filter: blur(50px) text-white border-b-[1px] border-[#13172A]'
        }`}
        animate={{ 
          y: isHeaderVisible ? 0 : -100,
          height: isScrolled ? (isHeaderVisible ? "auto" : "60px") : "auto"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Nome animado com ícone */}
        <div className="flex items-center gap-3 text-2xl sm:text-3xl font-bold">
          <FaTerminal className={`text-4xl transition-colors duration-300 ${'text-green-400'}`} />

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
          <button onClick={() => setIsOpen(!isOpen)} className={`text-3xl transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#13172A]'}`}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Responsivo Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-[#13172A] backdrop-blur-sm text-white flex flex-col items-center py-4 gap-4 sm:hidden"
            >
              <button onClick={() => scrollToSection("about")} className="hover:text-green-600 transition-all duration-300 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection("projects")} className="hover:text-green-600 transition-all duration-300 font-medium   ">
                Projects
              </button>
              <button onClick={() => scrollToSection("experience")} className="hover:text-green-600 transition-all duration-300 font-medium">
                Experience
              </button>
              <button onClick={() => scrollToSection("skills")} className="hover:text-green-600 transition-all duration-300 font-medium">
                Skills
              </button>
              <button onClick={() => scrollToSection("contact")} className="hover:text-green-600 transition-all duration-300 font-medium">
                Contact
              </button>

              {/* Ícone do GitHub no menu mobile */}
              <a
                href="https://github.com/samuka7abr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-green-600 transition mt-2"
              >
                <FaGithub />
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Seta para expandir header (desktop e mobile) */}
      {isScrolled && !isHeaderVisible && (
        <motion.button
          onClick={toggleHeader}
          className="fixed top-4 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-lg" />
        </motion.button>
      )}
    </>
  );
}
