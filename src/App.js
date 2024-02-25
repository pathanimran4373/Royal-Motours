import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./module/common/header";
import LoadingPage from "./module/dashbord/loadingPage";
// Lazy loading for components
const Home = lazy(() => import("./module/dashbord/home"));
const Vehicles = lazy(() => import("./module/dashbord/banner"));
const Services = lazy(() => import("./module/dashbord/service"));
const FeaturedCar = lazy(() => import("./module/dashbord/exploreMore"));
const ResisterPage = lazy(() => import("./module/auth/register"));
const LogIn = lazy(() => import("./module/auth/login"));
const Footer = lazy(() => import("./module/common/footer"));
const PageNotFound = lazy(() => import("./module/dashbord/error"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<LoadingPage/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<ResisterPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cars" element={<FeaturedCar />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
