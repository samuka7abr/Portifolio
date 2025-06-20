import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import ParticlesBackground from "./components/Particles";
import { Project } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Header />

        {/* Perfil Responsivo */}
        <div id="about" className="flex flex-grow justify-center items-center mt-32 px-4 sm:px-6 lg:mt-40 w-full max-w-4xl mx-auto">
          <Profile />
        </div>

        {/* Projetos Responsivos */}
        <section id="projects" className="py-24 px-4 sm:px-6 flex flex-col items-center w-full max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <Project 
              title="DishOrderAPI" 
              description="RESTful API for managing restaurant orders, dishes and users in a digital restaurant system." 
              techs={["Node.js", "JavaScript", "SQLite", "Knex.js"]} 
              repoLinks={["https://github.com/samuka7abr/Dish-Order-Service"]} 
            />
            <Project 
              title="Alma Djem Band Site" 
              description="Institutional website and musical portfolio for Alma Djem band with modern design and responsive interface." 
              techs={["React", "TypeScript", "Styled-Components", "Framer Motion"]} 
              repoLinks={["https://github.com/samuka7abr/Alma-Djem", "https://github.com/samuka7abr/Alma-Djem-Forms-API"]} 
            />
            <Project 
              title="Mini FFmpeg" 
              description="A lightweight FFmpeg implementation for video processing and manipulation." 
              techs={["C", "Assembly", "ShellScript"]} 
              repoLinks={["https://github.com/samuka7abr/mini-FFmpeg"]} 
            />
            <Project 
              title="E-commerce API" 
              description="A RESTful API for an e-commerce platform." 
              techs={["Python", "Flask", "SQLAlchemy", "SQLite"]} 
              repoLinks={["https://github.com/samuka7abr/API-e-commerce"]} 
            />
          </div>
        </section>

        {/* Seção de Experiência Responsiva */}
        <section id="experience" className="py-12 px-4 sm:px-6 flex flex-col items-center w-full max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
            Experience
          </h2>
          <Experience />
        </section>

        {/* Seção de Skills Responsiva */}
        <section id="skills" className="py-4 px-4 sm:px-6 flex flex-col items-center w-full max-w-4xl mx-auto">
          <Skills />
        </section>

        {/* Seção de Contato Responsiva */}
        <section id="contact" className="py-4 px-4 sm:px-6 flex flex-col items-center w-full max-w-4xl mx-auto">
          
          <Contact />
        </section>

        {/* Footer Responsivo */}
        <section className="w-full">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
