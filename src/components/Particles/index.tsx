import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 w-full h-full -z-10"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#0f172a", // Cor do fundo (escura)
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#22964e", 
          },
          links: {
            color: "#166534",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.4, 
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
