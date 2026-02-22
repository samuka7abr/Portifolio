import { motion } from "framer-motion";
import {
    FaGithub,
} from "react-icons/fa";
import { IconType } from "react-icons";
import ParticlesBackground from "../../components/Particles";
import foto from "../../assets/fotoDePerfil.jpeg";

interface LinkItem {
    titulo: string;
    link: string;
    icone: IconType;
}

const links: LinkItem[] = [
    {
        titulo: "Saia do CRUD básico - Projetos",
        link: "https://github.com/samuka7abr/no-crud-projects",
        icone: FaGithub,
    },
];

export function LinktreePage() {
    return (
        <>
            <ParticlesBackground />

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
                {/* Perfil */}
                <motion.div
                    className="flex flex-col items-center mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="w-24 h-24 rounded-full border-4 border-green-800 overflow-hidden mb-4">
                        <img
                            src={foto}
                            alt="Samuel Abrão"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-white">Samuel Abrão</h1>
                    <p className="text-green-400 font-medium mt-1 text-sm">
                        Full Stack Developer
                    </p>
                </motion.div>

                {/* Links */}
                <div className="flex flex-col gap-4 w-full max-w-sm">
                    {links.map((item, index) => {
                        const Icon = item.icone;
                        const isExternal = item.link.startsWith("http");
                        const isDownload = item.link.endsWith(".pdf");

                        return (
                            <motion.a
                                key={index}
                                href={item.link}
                                target={isExternal ? "_blank" : "_self"}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                download={isDownload ? true : undefined}
                                className="flex items-center gap-4 px-6 py-4 bg-[#0A0C15] rounded-lg shadow-lg border-[2px] border-[#13172A] hover:bg-[#121625] hover:border-green-900 transition-all group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.08 * index }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Icon className="text-green-400 text-xl flex-shrink-0 group-hover:text-green-300 transition-colors" />
                                <span className="text-white font-medium group-hover:text-green-300 transition-colors">
                                    {item.titulo}
                                </span>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
