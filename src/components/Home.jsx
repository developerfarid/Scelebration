import React from "react";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <main className='bg-bg-color'>
        {/* TODO: import <Hero/> component here */}
        <Hero />
        {/* TODO: import <Services/> component here */}
        <Services />
        {/* TODO: import <AboutUs/> component here */}
        <AboutUs />
        {/* TODO: create a <Gallery/> component in src/components and import it here (OPTIONAL) */}
        <Gallery />
        {/* TODO: import <Testimonial/> component here */}
        <Testimonial />
      </main>
    </>
  );
};

export default Home;
