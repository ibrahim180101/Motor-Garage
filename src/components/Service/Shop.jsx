import React from "react";
import { PiArrowBendUpRightBold } from "react-icons/pi";

const Shop = () => {
  const services = [
    { id: 1, text: "complete  battery and charging system test" },
    { id: 2, text: "Electrical draw testing" },
    { id: 3, text: "Clean battery terminals and cat)le connections" },
    { id: 4, text: "Install rew batter v with aoorooriate specifications" },
    { id: 5, text: "apply anti-corrosion treatment" },
    { id: 6, text: "Dispose of old battery properly" },
    { id: 7, text: "Warranty registration and documentation" },
  ];
  return (
    <>
      <div className="md:p-10 p-4 rounded-2xl bg-[#1A1A1A08] relative">
        <h1 className="md:text-5xl text-4xl text-center md:text-start font-bold text-black-accent">
          In Shop Repairs{" "}
        </h1>
        <p className="text-lg text-black-base mt-4.5">
          A reliable battery is crucial for starting your car and powering all
          its gadgets. We’ll check the battery’s health, the charging system,
          and any electrical draws to ensure a smooth start. If you need a
          replacement, we’ll provide a top-notch battery with a nationwide
          warranty!
        </p>
        <div className="mt-8">
          <h2 className="text-3xl text-black-accent font-bold">
            what Included
          </h2>
          <div className="mt-4.5 flex flex-col gap-3">
            {services.map((service) => (
              <div className="flex items-center gap-2" key={service.id}>
                <PiArrowBendUpRightBold className="text-xl text-black-base"></PiArrowBendUpRightBold>
                <p className="text-xl text-black-base">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-black-accent">
            Why This Service Matters
          </h2>
          <p className="text-black-base text-xl mt-4.5">
            Getting stuck with a dead battery is super annoying and can even be
            risky. Keeping an eye on your battery and swapping it out when
            needed can save you from surprises and keep your car's electronics
            safe from voltage issues.
          </p>
        </div>
      </div>

      <div className="absolute md:hidden bottom-20 right-20 text-2xl text-white">
        <h1>In shop repairs</h1>
      </div>
    </>
  );
};

export default Shop;
