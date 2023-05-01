import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componant/home';
import Vehicles from './componant/vehicles';
import Services from './componant/services';
import Rating from './componant/rating';
import Contact from './componant/contact'
import Navbar from './componant/navbar';
import IconsContainer from './componant/icons-container';
import Footer from './componant/Footer';
import ResisterPage from './componant/Resister-page';
import SignUp from './componant/SignUp';
import FeaturedCar from './componant/FeaturedCar'


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
