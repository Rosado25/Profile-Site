import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Cv from "./pages/cv";
import Navbar from "./sections/Navbar.jsx";
import TargetCursor from "./components/TargetCursor.jsx";

function App() {
  return (
    <BrowserRouter>
      
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={false}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cv" element={<Cv/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;