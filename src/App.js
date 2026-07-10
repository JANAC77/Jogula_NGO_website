import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YourHelp from "./components/Your Help/YourHelp";
import SponserEducation from "./components/Sponser Education/SponserEducation";
import SponserFood from "./components/Sponser Food/SponserFood";
import Volunteer from "./components/Volunteer/Volunteer";
import Contact from "./components/Contact/Contact";
import Activities from "./components/Activities/Activities";
import WhatsAppButton from "./components/WhatsupButton/WhatsupButton";
import Gallery from "./components/Gallery/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActions from "./components/common/FloatingActions";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/your-help" element={<YourHelp />} />
            <Route path="/sponser-education" element={<SponserEducation />} />
            <Route path="/sponser-food" element={<SponserFood />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </div>
        <FloatingActions />
      </Router>
      <WhatsAppButton />
    </>
  );
}

export default App;
