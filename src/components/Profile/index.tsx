import foto from "../../assets/foto.jpeg";
import { Typewriter } from "react-simple-typewriter";

export function Profile() {
  return (
    <div className="flex flex-col items-center gap-6 w-full px-10">
      <div className="flex flex-row items-center justify-between gap-16 w-full max-w-5xl">
        <div className="relative w-56 h-56 rounded-full border-4 border-green-800 flex-shrink-0">
          <img 
            src={foto} 
            alt="Foto de perfil" 
            className="w-56 h-56 object-cover rounded-full" 
          />
        </div>

        <div className="flex flex-col text-left w-full">
          <h1 className="text-[52px] font-bold text-white">Samuel Abrão</h1>

          <h2 className="text-[28px] text-green-400 font-semibold">
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

          <p className="mt-2 text-[20px] text-gray-400 max-w-2xl">
            FullStack developer focused on writing clean, efficient, and scalable code. Passionate about problem-solving and building high-performance solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
