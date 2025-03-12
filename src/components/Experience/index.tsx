import { motion } from "framer-motion";

interface ExperienceProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceProps[] = [
  {
    role: "Full-Stack Developer",
    company: "FreeLance",
    period: "2024.1 - Present",
    description: "Developing scalable applications with React(Styled-Components & Taiwind CSS) NodeJs(Express, KnexJs) and Python(Flask, SQLAlchemy).",
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

// Configuração da animação de scroll
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2 },
  }),
};

export function Experience() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-4xl">
      {/* Linha de conexão vertical */}
      <div className="absolute left-6 top-0 h-full w-[2px] bg-gray-600"></div>

      <motion.div 
        className="flex flex-col gap-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative flex items-start gap-6 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
            variants={itemVariants}
            custom={index}
          >
            {/* Bolinha da timeline */}
            <div className="absolute left-[-10px] w-4 h-4 bg-green-500 rounded-full"></div>

            <div>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-300">{exp.period}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
