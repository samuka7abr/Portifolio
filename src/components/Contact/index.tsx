import { FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="py-2 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Contact
      </h2>

      <motion.div
        className="flex flex-col items-center gap-6 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Redes Sociais */}
        <div className="flex gap-6 text-green-400 text-3xl">
          <a href="https://x.com/samuca_tech" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <FaXTwitter />
            <span className="text-sm text-gray-300">Twitter</span>
          </a>
          <a href="https://www.linkedin.com/in/samuel-abr%C3%A3o-0655a12ba/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <FaLinkedin />
            <span className="text-sm text-gray-300">LinkedIn</span>
          </a>
          <a href="mailto:abrao.sam.2006@gmail.com" className="flex flex-col items-center">
            <FaEnvelope />
            <span className="text-sm text-gray-300">E-mail</span>
          </a>
        </div>

        {/* Botão para Download do CV */}
        <a
          href="/Samuel_Abrão_CV.pdf"
          download="Samuel_Abrão_CV.pdf"
          className="flex items-center gap-2 text-green-400 text-lg hover:text-green-300 transition-colors"
        >
          <FaDownload />
          Download my CV
        </a>
      </motion.div>
    </section>
  );
}
