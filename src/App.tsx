import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import ParticlesBackground from "./components/Particles";
import { Project } from "./components/Projects";
import { motion } from "framer-motion";

export function App() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex flex-grow justify-center items-start mt-20 px-6">
          <Profile />
        </div>

        <section className="py-20 px-6 flex flex-col items-center">
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
      </div>
    </>
  );
}

export default App;
