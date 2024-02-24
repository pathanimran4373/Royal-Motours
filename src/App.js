import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./module/common/header";
import Footer from "./module/common/footer";

// Lazy loading for components
const Home = lazy(() => import("./module/dashbord/home"));
const Vehicles = lazy(() => import("./module/dashbord/banner"));
const Services = lazy(() => import("./module/dashbord/service"));
const Rating = lazy(() => import("./module/dashbord/userRating"));
const Contact = lazy(() => import("./module/dashbord/contact"));
const About = lazy(() => import("./module/dashbord/about"));
const FeaturedCar = lazy(() => import("./module/dashbord/exploreMore"));
const ResisterPage = lazy(() => import("./module/auth/register"));
const LogIn = lazy(() => import("./module/auth/login"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<ResisterPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cars" element={<FeaturedCar />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
