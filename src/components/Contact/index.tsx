import { FaLinkedin, FaEnvelope, FaDownload, FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa"; 
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="py-2 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Contact
      </h2>

      {/* Layout Mobile - Mantém o original */}
      <motion.div
        className="flex flex-col items-center gap-6 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 w-full max-w-md lg:hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Redes Sociais */}
        <div className="flex gap-6 text-green-400 text-3xl">
          <a href="https://x.com/samuca_tech" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
            <FaGlobe />
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
          href="/CURRICULO_SAMUEL.pdf"
          download="CURRICULO_SAMUEL.pdf"
          className="flex items-center gap-2 text-green-400 text-lg hover:text-green-300 transition-colors"
        >
          <FaDownload />
          Download my CV
        </a>
      </motion.div>

      {/* Layout Desktop - Versão mais elaborada */}
      <motion.div
        className="hidden lg:flex w-full max-w-4xl gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Informações de Contato */}
        <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <FaEnvelope className="text-green-400 text-xl" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:abrao.sam.2006@gmail.com" className="text-green-400 hover:text-green-300 transition-colors">
                  abrao.sam.2006@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-green-400 text-xl" />
              <div>
                <p className="font-medium">Location</p>
                <p>Brasília, DF - Brazil</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-300">
              <FaPhone className="text-green-400 text-xl" />
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+5561998555949" className="text-green-400 hover:text-green-300 transition-colors">
                  +55 61 99855-5949
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Redes Sociais e Download */}
        <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">Connect & Download</h3>
          
          {/* Redes Sociais */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <a 
              href="https://x.com/samuca_tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <FaGlobe className="text-green-400 text-2xl" />
              <div>
                <p className="font-medium text-white">Twitter</p>
                <p className="text-sm text-gray-400">@samuca_tech</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/samuel-abr%C3%A3o-0655a12ba/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <FaLinkedin className="text-green-400 text-2xl" />
              <div>
                <p className="font-medium text-white">LinkedIn</p>
                <p className="text-sm text-gray-400">Samuel Abrão</p>
              </div>
            </a>
          </div>

          {/* Botão para Download do CV */}
          <a
            href="/CURRICULO_SAMUEL.pdf"
            download="CURRICULO_SAMUEL.pdf"
            className="flex items-center justify-center gap-3 w-full p-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
          >
            <FaDownload />
            Download my CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
