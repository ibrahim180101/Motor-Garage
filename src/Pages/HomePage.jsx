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
    <main className="overflow-hidden">
      <Hero
        title="Honesty. Quality. Care. That's What Drives Us."
        description="From routine maintenance to complex repairs, our technicians keep your vehicle safe, reliable, and ready for the road."
        home={true}
        image={homeimage}
      />
      <Facilities />
      <Choice />
      <Services />
      <Offer />
      <Testimonials />
    </main>
  );
};

export default HomePage;