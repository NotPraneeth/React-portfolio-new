import './App.css';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
