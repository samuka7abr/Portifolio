import foto from "../../assets/foto.jpeg";
import { Typewriter } from "react-simple-typewriter";

export function Profile() {
  return (
    <div className="flex flex-col items-center w-full px-6 sm:px-10">
      {/* Layout Responsivo */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 sm:gap-16 w-full max-w-5xl">
        
        {/* Foto de Perfil */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full border-4 border-green-800 flex-shrink-0">
          <img 
            src={foto} 
            alt="Foto de perfil" 
            className="w-full h-full object-cover rounded-full object-top" 
          />
        </div>

        {/* Informações */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full">
          <h1 className="text-[32px] sm:text-[52px] font-bold text-white">Samuel Abrão</h1>

          <h2 className="text-[20px] sm:text-[28px] text-green-400 font-semibold mt-2 sm:mt-0">
            <Typewriter
              words={["Software Engineer", "FullStack Web"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="mt-4 text-[16px] sm:text-[20px] text-gray-400 max-w-xs sm:max-w-2xl">
            FullStack Developer with a strong emphasis on architecting and building robust, scalable backend systems. Passionate about leveraging DevOps practices to ensure efficient deployments and operational excellence, while also proficient in crafting engaging frontend experiences for comprehensive solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
