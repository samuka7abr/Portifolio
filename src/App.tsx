import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import ParticlesBackground from "./components/Particles";
import { Project } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { motion } from "framer-motion";

export function App() {
  return (
    <>
      {/* Fundo animado */}
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header fixo */}
        <Header />

        {/* Perfil */}
        <div className="flex flex-grow justify-center items-start mt-32 px-6">
          <Profile />
        </div>

        {/* Seção de Projetos */}
        <section className="py-24 px-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Projects
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Project
              title="MoovieNotes"
              description="Back-end app for Moovie-rating-notes management."
              techs={["Node.Js", "Javascript", "Knex.Js"]}
              repoLinks={["https://github.com/samuka7abr/MoviesNotes"]}
            />
            <Project
              title="Block-Bet Extension"
              description="A Chrome extension to block illegal betting sites."
              techs={["JavaScript", "Manifest V3", "Chrome API"]}
              repoLinks={["https://github.com/samuka7abr/Block-Bet_Extension"]}
            />
            <Project
              title="Notes Manager"
              description="A full-stack note management application."
              techs={["React", "Node.Js", "Javascript", "Knex.Js"]}
              repoLinks={[
                "https://github.com/samuka7abr/NotesManagerWeb",
                "https://github.com/samuka7abr/NotesManagerAPI",
              ]}
            />
            <Project
              title="E-commerce API"
              description="A RESTful API for an e-commerce platform."
              techs={["Python", "Flask", "SQLAlchemy"]}
              repoLinks={["https://github.com/samuka7abr/API-e-commerce"]}
            />
          </motion.div>
        </section>

        {/* Seção de Experiência */}
        <section className="py-6 px-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Experience
          </h2>

          <Experience />
        </section>

        {/* Seção de Skills */}
        <section className="py-6 px-6 flex flex-col items-center">
          

          <Skills />
        </section>

        {/* Seção de Contato */}
        <section className="py-6 px-6 flex flex-col items-center">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
