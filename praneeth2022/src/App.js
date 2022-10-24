import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
