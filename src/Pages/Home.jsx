import React from 'react'
import HeroSlider from './HeroSlider'
import MapSection from './MapSection';
import Services from './Services2';
import Rating from './Rating';
import WhyChooseUs2 from './WhyChooseUs2';


function Home() {
  return (
    <div>
      <>

        <HeroSlider />
        <Services/>
       <WhyChooseUs2/>
        <MapSection />
        <Rating/>
      </>

    </div>
  )
}

export default Home;
