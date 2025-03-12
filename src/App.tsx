import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import ParticlesBackground from "./components/Particles";

function App() {
  return (
    <>
      {/* Fundo animado de partículas */}
      <ParticlesBackground />

      {/* Conteúdo da aplicação */}
      <div className="relative z-10">
        <Header />
        <div className="h-screen flex justify-center items-center">
          <div>
          <Profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
