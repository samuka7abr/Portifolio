import { Header } from "./components/Header"
import { Profile } from "./components/Profile";

function App() {
  return (
    <>
        <div >
        <Header />
        <div className="h-screen flex justify-center items-center bg-gray-900 relative">
        
        <Profile />

        </div>
      </div>
    </>
  );
}

export default App;
