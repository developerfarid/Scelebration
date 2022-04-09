import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutPage from "./components/Pages/AboutPage";
import GalleryPage from "./components/Pages/GalleryPage/GalleryPage";
import ServagePage from "./components/Pages/ServagePage";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServagePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
