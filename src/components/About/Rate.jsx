import React from "react";

const Rate = () => {
  const rates = [
    {
      name: "25+",
      image: "https://i.ibb.co.com/602c6vrT/rate.png",
      description: "Certified Technicians",
    },
    {
      name: "98%",
      image: "https://i.ibb.co.com/XZMc2L5d/rate1.png",
      description: "Satisfaction Rate",
    },
    {
      name: "4.7",
      image: "https://i.ibb.co.com/fYFM8Zn1/rate2.png",
      description: "Overall Customer Rating by google ",
    },
    {
      name: "10+",
      image: "https://i.ibb.co.com/0RTS5Cqm/rate4.png",
      description: "Years of Experiences",
    },
  ];
  return (
    <div className="py-6 bg-[#F9F9F9]">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center px-[10%]">
        {rates.map((rate, idx) => (
          <div key={idx}>
            <div
              className={`flex mt-10 md:mt-0 flex-col items-center justify-center md:border-dashed ${
                idx === rates.length - 1
                  ? "" 
                  : "md:border-r-2 border-[#B7BCC6]" 
              }`}
            >
              <img
                className="h-12 w-12 p-3 bg-[#E639461A] rounded-lg"
                src={rate.image}
                alt=""
              />
              <h2 className="text-5xl font-bold text-[#0D0D0D] mt-8">
                {rate.name}
              </h2>
              <p className="text-base text-[#292929]">{rate.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rate;
 