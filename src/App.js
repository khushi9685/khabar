import React from 'react';
import BuletinNews from './Components/BuletinNews';

import FirstHeadline from './Components/FirstHeadline';
import FirstNews from './Components/FirstNews';
import HealthNews from './Components/HealthNews';
import Navbar from './Components/Navbar';
import SecondNews from './Components/SecondNews';
import ThirdNews from './Components/ThirdNews';
import Footer from './Components/Footer';
import TopNav from './Components/TopNav';

function App() {
  return (
    <>
    <TopNav/>
    <Navbar/>
     <FirstHeadline/>
     <FirstNews/>
     <SecondNews/>
     <BuletinNews/>
     <ThirdNews/>
     <HealthNews/>
      <Footer/>
    
    
    </>
    
  );
}

export default App;
