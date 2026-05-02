import { useEffect, useState } from "react";
import Lenis from "lenis";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/NavBar/NavBar";
import TopBanner from "./components/TopBanner/TopBanner";
// import CustomCursor from "./components/CustomePointer/CustomePointer";
import Disclaimer from "./components/Disclaimer/Disclaimer";

//Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Blogs from "./pages/Blogs/Blogs";
import Careers from "./pages/Careers/Careers";
import PublishedArticles from "./pages/PublishedArticles/PublishedArticles";
import Footer from "./components/Footter/Footer";

import "./App.css";
import ScrollTop from "./ScrollTop/ScrollTop";
import Loader from "./components/Loader/Loader";

function AppContent() {
  const location = useLocation();
  const [loaderDone, setLoaderDone] = useState(false);


  

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    // Store on window so Disclaimer can access it
    window.lenis = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Loader onDone={() => setLoaderDone(true)} />
      {/* <CustomCursor /> */}
      {loaderDone && <Disclaimer />}

      {/* Overlay header */}
      <div className="header-overlay">
        <TopBanner />
        <Navbar />
      </div>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/published-articles" element={<PublishedArticles />} />
        {/* <Route path="/services/:id" element={<Practice_special_Page />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;