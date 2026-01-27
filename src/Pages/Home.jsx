import React from 'react'
import HeroSlider from './HeroSlider'
import MapSection from './MapSection';
import Services from './Services2';
import Rating from './Rating';


function Home() {
  return (
    <div>
      <>

        <HeroSlider />
        <Services/>
       
        <MapSection />
        <Rating/>
      </>

    </div>
  )
}

export default Home;
