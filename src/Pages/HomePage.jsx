import React from "react";
import Testimonials from "../components/Home/Testimonials";
import Offer from "../components/Home/Offer";
import Services from "../components/Home/Services";
import Choice from "../components/Home/Choice";
import Facilities from "../components/Home/Facilities";
import Hero from "../Shared/Hero";
import homeimage from '../assets/images/home.png';

const HomePage = () => {
  return (
    <div>
        <Hero title={"Honesty. Quality. Care. That's What Drives Us."} description={"At our shop, every repair starts with transparency and ends with satisfaction. We believe in honest diagnostics,fair pricing, and top-notch craftsmanshipl"} home={true} image={homeimage}></Hero>
        <Facilities></Facilities>
        <Choice></Choice>
        <Services></Services>
        <Offer></Offer>
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePage;
