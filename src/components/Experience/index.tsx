import { motion } from "framer-motion";
import { useState } from "react";

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface FreelanceProject {
  title: string;
  description: string;
  link?: string;
  technologies: string;
}

const experiences: ExperienceProps[] = [
  {
    role: "Fullstack Developer",
    company: "BlueOcean",
    period: "2025.2 - Present",
    description: "",
  },
  {
    role: "Front-end Intern",
    company: "TSE",
    period: "2025.1 - 2025.2",
    description: "Working in the SGWEB area developing Front-End solutions, API integration, relational databases, REST APIs, Docker and other technologies using TypeScript, React, Tailwind CSS and Node.js.",
  },
  {
    role: "Full-Stack Developer",
    company: "FreeLance",
    period: "2024.1 - Present",
    description: "Developing scalable applications with NodeJs(Express, Fastify, KnexJs), Docker, PostgreSQL, React(Styled-Components & Tailwind CSS) and Python(Flask, SQLAlchemy).",
  },
  {
    role: "Inovation HUB",
    company: "IDP",
    period: "2024.2",
    description: "I participated in a project aimed at combating websites that used deceptive bonus-based advertisements, violating Law No. 14.790/2023. The solution involved developing an advanced web scraper to detect and flag fraudulent websites. Additionally, we created an integrated browser extension that automatically blocked access to these sites, enhancing user security. (Typescript, Javascript)",
  },
  {
    role: "IDP Social",
    company: "IDP",
    period: "2024.1",
    description: "I participated in the IDP Social initiative, where we built a document management system using Python and MySQL to organize records for underprivileged children. The system streamlined document storage and retrieval, reducing disorganization and ensuring easy access to vital records.",
  },
];

const freelanceProjects: FreelanceProject[] = [
  {
    title: "Alma Djem Band Site",
    description: "Development of the institutional website for the Alma Djem band with email capture API for show pre-sales",
    link: "https://www.almadjem.com.br/",
    technologies: "Typescript, React, Styled-Components, NodeJS, Docker, GoogleAPI's"
  },
  {
    title: "Appointment Scheduler Bot",
    description: "Customer service bot and appointment scheduling for a barbershop",
    technologies: "Typescript, Fastify, Baileys, Docker, PostgreSQL"
  }
];

// Configuração da animação de scroll
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Experience() {
  const [expandedFreelance, setExpandedFreelance] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-full max-w-4xl">
      {/* Linha de conexão vertical */}
      <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-600"></div>

      <div className="flex flex-col gap-16 w-full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-6 bg-[#0A0C15] p-6 rounded-lg shadow-lg border-[2px] border-[#13172A]"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Bolinha da timeline */}
            <div className="absolute left-[-10px] w-4 h-4 bg-green-500 rounded-full"></div>

            <div className="w-full">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="text-sm text-gray-300">{exp.period}</p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
                
                {/* Botão de expansão apenas para freelance */}
                {exp.company === "FreeLance" && (
                  <button
                    onClick={() => setExpandedFreelance(!expandedFreelance)}
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <span className="text-sm">
                      {expandedFreelance ? "See Less" : "See Projects"}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${expandedFreelance ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Projetos expandidos */}
              {exp.company === "FreeLance" && expandedFreelance && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 space-y-4"
                >
                  {freelanceProjects.map((project, projectIndex) => (
                    <motion.div 
                      key={projectIndex} 
                      className="bg-[#13172A] p-4 rounded-lg border border-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-300 mb-2">{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 transition-colors text-sm"
                        >
                          See Project →
                        </a>
                      )}
                      <p className="text-sm text-gray-400 mt-2">
                        <span className="font-medium">Tecnologias:</span> {project.technologies}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
