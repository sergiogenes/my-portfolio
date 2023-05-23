import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proyect from "./components/Proyect";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Proyect />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
