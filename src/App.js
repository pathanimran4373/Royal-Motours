import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './module/dashbord/home';
import Vehicles from './module/dashbord/banner/vehicles';
import Services from './module/dashbord/service/services';
import Rating from './module/dashbord/userRating/rating';
import Contact from './module/auth/contact'
import Navbar from './module/common/header';
import IconsContainer from './module/dashbord/about/icons-container';
import Footer from './module/common/footer';
import ResisterPage from './module/auth/Resister-page';
import SignUp from './module/auth/SignUp';
import FeaturedCar from './module/dashbord/exploreMore/FeaturedCar'


function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resister" element={<ResisterPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/cars" element={<FeaturedCar />}></Route>


          <Route path="/rating" element={<Rating />}></Route>
          <Route path="/contact" element={<Contact />}></Route>


        </Routes>


        <IconsContainer />
        <Vehicles />
        <Services />
        <FeaturedCar />

        <Rating />
        <Contact />
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
