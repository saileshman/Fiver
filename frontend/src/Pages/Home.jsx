import React from 'react'
import Navbar from '../Components/Navbar'
 import Footer from '../Components/Footer'
import Banner from "../Components/Banner";
import Popularservice from "../Components/Popularservice";
import Banner2 from '../Components/Banner2';
import PremiumSection from '../Components/PremiumSection';
import FiverrSuccess from '../Components/FiverSuccess';
import FreelanceHighlights from '../Components/FreelanceHighlights';
import LogoMaker from '../Components/LogoMaker';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
   <Navbar/>
   <main className="flex-grow">
   <Banner/>
   <Popularservice/>
   <Banner2 />
   <PremiumSection/>
   <FiverrSuccess/>
   <FreelanceHighlights />
   <LogoMaker/>
   </main>
   <Footer/>
   </div>
  )
}

export default Home
