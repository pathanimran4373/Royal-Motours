import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./module/common/header";
import Footer from "./module/common/footer";
import PageNotFound from "./module/dashbord/error";
// Lazy loading for components
const Home = lazy(() => import("./module/dashbord/home"));
const Vehicles = lazy(() => import("./module/dashbord/banner"));
const Services = lazy(() => import("./module/dashbord/service"));
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
