import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import Topbar from "./components/Topbar";
import NetworkSupport from "./pages/NetworkSupport";
import ProjectManagement from "./pages/ProjectManagement";
import CyberSecurity from "./pages/CyberSecurity";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services/network-support" element={<NetworkSupport/>} />
        <Route path="/services/project-management" element={<ProjectManagement/>} />
        <Route path="/services/cyber-security" element={<CyberSecurity />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/terms-of-service" element={<TermsOfService/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
