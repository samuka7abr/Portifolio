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
                            title="GymPass API"
                            description="GymPass API is a comprehensive fitness membership system built as a case study for SOLID architecture principles and best practices. The project implements secure authentication, role-based authorization, and complex business logic for gym management. Developed with Fastify for high performance, PostgreSQL for data persistence, and fully containerized with Docker for seamless deployment and CI/CD integration."
                            techs={["Node.js", "Typescript", "PostgreSQL", "PrismaORM", "Docker"]}
                            repoLinks={["https://github.com/samuka7abr/Gympass-like-API"]}
                        />
                        <Project
                            title="Argos Panoptes"
                            description="Argos Panoptes is a lightweight observability platform that monitors and visualizes network performance in real time. It collects metrics such as latency and availability to quickly and efficiently identify issues. The project was developed as the final assignment for the Computer Networks course."
                            techs={["Go", "Docker", "PostgreSQL", "Nginx", "React", "Typescript"]}
                            repoLinks={["https://github.com/samuka7abr/Argos-Panoptes"]}
                        />
                        <Project
                            title="Mini FFmpeg"
                            description="Mini FFmpeg is a lightweight implementation of core video processing and manipulation features built from scratch in C and Assembly. The project focuses on optimizing performance through low-level operations while maintaining clean architecture and efficient memory management. It demonstrates expertise in systems programming, algorithm optimization, and building multimedia processing pipelines with custom shell scripts for orchestration."
                            techs={["C", "Assembly", "ShellScript"]}
                            repoLinks={["https://github.com/samuka7abr/mini-FFmpeg"]}
                        />
                        <Project
                            title="Foodiary"
                            description="Foodiary is a mobile application built with a serverless architecture using AWS Lambda functions. Additionally, the macronutrient calculation for logged meals is performed through audio or photo uploads processed by an AI agent."
                            techs={["NodeJS", "AWS", "Serverless", "React-Native", "Docker", "PostgreSQL", "Typescript"]}
                            repoLinks={["https://github.com/samuka7abr/Foodiary"]}
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
