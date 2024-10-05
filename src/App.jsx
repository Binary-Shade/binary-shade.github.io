import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import Home from "./pages/Home";
import About from "./pages/About";
import Technologies from "./pages/Technologies";
import Projects from "./pages/Projects";
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
