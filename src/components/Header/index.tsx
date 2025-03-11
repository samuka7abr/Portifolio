import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

export function Header() {
  const nome: string = "Samuel Abrão";
  const letters: string[] = nome.split("");

  return (
    <header className="flex justify-between items-center px-12 py-4 bg-gray-900/85 text-white border-b border-gray-700 border-b-gray-100/30">
      {/* Nome animado com ícone */}
      <div className="flex items-center gap-3 text-3xl font-bold">
        <FaTerminal className="text-green-400 text-[22px] text-4xl" />

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
                delay: index * 0.08,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Navegação */}
      <nav>
        <ul className="flex gap-8 text-[16px] text-white/75">
          <li>
            <a href="#" className="hover:text-green-400 transition-all">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition-all">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition-all">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition-all">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition-all">
              Tools
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-green-400 transition-all">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
