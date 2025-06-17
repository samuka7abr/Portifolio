import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  techs: string[];
  repoLinks: string[];
}

export function Project({ title, description, techs, repoLinks }: ProjectProps) {
  return (
    <motion.div
      className="p-6 bg-gray-800/85 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: "-50px" }}
      whileHover={{ scale: 1.05 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        whileHover: { type: "spring", stiffness: 200, damping: 10 }
      }}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        {/* Botão para abrir o repositório */}
        {repoLinks.length === 1 ? (
          <a
            href={repoLinks[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition"
          >
            <FaExternalLinkAlt />
          </a>
        ) : (
          <div className="flex gap-2">
            <a
              href={repoLinks[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition"
            >
              Frontend
            </a>
            <a
              href={repoLinks[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition"
            >
              Backend
            </a>
          </div>
        )}
      </div>

      <p className="text-gray-300 mt-2">{description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {techs.map((tech, index) => (
          <span key={index} className="bg-green-900/40 text-green-400 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
