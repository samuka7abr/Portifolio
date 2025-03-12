import { Header } from "./components/Header";
import { Profile } from "./components/Profile";
import ParticlesBackground from "./components/Particles";

function App() {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-grow justify-center items-start mt-20 px-6">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
