import foto from "../../assets/foto.jpeg";
import { Typewriter } from "react-simple-typewriter";

export function Profile() {
  return (
    <div className="flex flex-row items-center gap-10">
      {/* Contêiner da imagem */}
      <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-green-800 ">
        <img src={foto} alt="Foto de perfil" className="w-full h-full object-cover " />
      </div>

      <div className="flex flex-col">
        <h1 className="text-[48px] font-bold text-white">Samuel Abrão</h1>

        {/* Efeito de digitação */}
        <h2 className="text-[24px] text-green-400 font-semibold">
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
      </div>
    </div>
  );
}
