import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center bg-gray-900 relative">
        <h1 className="text-4xl font-bold text-white z-10">Tailwind no Vite! 🚀</h1>
      </div>
    </>
  );
}

export default App;
