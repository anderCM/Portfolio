import Home from "./Home";
import ParticlesBackground from "./components/ParticlesBackground";


function App() {
  return (
    <div className="w-full h-screen font-bodyFont text-textColor relative">
      <div className="max-w-screen-2x1 h-full mx-auto flex flex-col justify-center items-center">
        <Home />
      </div>
      <ParticlesBackground />
    </div>
  )
}

export default App
