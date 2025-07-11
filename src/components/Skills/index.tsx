import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer, FaTools, FaWindows } from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiExpress, SiFlask,
  SiSqlite, SiStyledcomponents, SiMysql, SiGit, SiKnexdotjs, SiLinux,
  SiPostman, SiInsomnia, SiNodedotjs, SiCplusplus, SiPostgresql,
  SiDocker, SiGithubactions, SiGithub, SiVim,
  SiDebian, SiUbuntu, SiFramer, SiTailwindcss, SiRedhat, SiPrisma,
  SiFastify, SiGnubash, SiRabbitmq
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { useEffect, useState } from "react";

const skills = [
  {
    category: "Programming Languages",
    icon: FaCode,
    techs: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C", icon: FaCode },
      { name: "SQL", icon: SiPostgresql },
    ],
  },
  {
    category: "Back-End & APIs",
    icon: FaServer,
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Fastify", icon: SiFastify },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    category: "DevSecOps & Infrastructure",
    icon: FaTools,
    techs: [
      { name: "Docker", icon: SiDocker },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Shell Scripting", icon: SiGnubash },
      {name: "RabbitMQ", icon: SiRabbitmq},
    ],
  },
  {
    category: "Databases",
    icon: FaDatabase,
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma},
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Knex.js", icon: SiKnexdotjs },
    ],
  },
  {
    category: "Tools & Version Control",
    icon: FaTools,
    techs: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Insomnia", icon: SiInsomnia },
      { name: "VS Code", icon: VscVscodeInsiders },
      { name: "Vim", icon: SiVim },
      { name: "Postman", icon: SiPostman },
    ],
  },
  {
    category: "Operating Systems",
    icon: SiLinux,
    techs: [
      { name: "Debian", icon: SiDebian },
      { name: "Ubuntu", icon: SiUbuntu },
      { name: "Rocky", icon: SiRedhat},
      { name: "Windows 10", icon: FaWindows },
    ],
  },
  {
    category: "Frontend Essentials",
    icon: SiReact,
    techs: [
      { name: "React", icon: SiReact },
      { name: "CSS-in-JS", icon: SiStyledcomponents },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Tailwind", icon: SiTailwindcss},
    ],
  },
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="py-24 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className={`p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 w-full max-w-sm ${
              index === skills.length - 1 && skills.length % 3 === 1 ? 'lg:col-start-2' : ''
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <group.icon className="text-green-400 text-2xl" />
              <h3 className="text-xl font-semibold text-white">{group.category}</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {group.techs.map((tech, i) => (
                <div key={i} className="flex items-center gap-2">
                  <tech.icon className="text-green-400 text-lg" />
                  <p className="text-gray-300 text-sm">{tech.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
