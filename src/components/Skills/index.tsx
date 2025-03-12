import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaServer, FaTools, FaCogs, FaVial } from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiPython, SiReact, SiExpress, SiFlask,
  SiSqlite, SiStyledcomponents, SiMysql, SiGit, SiKnexdotjs, SiLinux,
  SiPostman, SiInsomnia, SiNodedotjs
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { BiLogoTailwindCss } from "react-icons/bi";

const skills = [
  {
    category: "Languages",
    icon: FaCode,
    techs: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "C", icon: FaCode },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    category: "Frontend",
    icon: SiReact,
    techs: [
      { name: "React", icon: SiReact },
      { name: "CSS-in-JS", icon: SiStyledcomponents },
      { name: "Tailwind", icon: BiLogoTailwindCss },
    ],
  },
  {
    category: "Backend",
    icon: FaServer,
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    category: "Databases",
    icon: FaDatabase,
    techs: [
      { name: "SQLite", icon: SiSqlite },
      { name: "MySQL", icon: SiMysql },
      { name: "Knex.Js", icon: SiKnexdotjs },
    ],
  },
  {
    category: "Testing & Quality",
    icon: FaVial,
    techs: [
      { name: "Postman", icon: SiPostman },
      { name: "Insomnia", icon: SiInsomnia },
    ],
  },
  {
    category: "Tools & OS",
    icon: FaTools,
    techs: [
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: VscVscodeInsiders },
      { name: "Linux", icon: SiLinux },
      { name: "Windows", icon: FaCogs }, // Fallback caso não tenha um ícone específico
    ],
  },
];

export function Skills() {
  return (
    <section className="py-24 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700"
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
                  <p className="text-gray-300">{tech.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
