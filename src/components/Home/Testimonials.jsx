import React, { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import axios from "axios";
import User from "./User";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users.json").then((res) => setUsers(res.data));
  }, []);
  const newUser = users.slice(0, 10);
  const newUser2 = users.slice(10, 20);

  return (
    <div className="mb-[108px]">
      <Title
        title={" Testimonial"}
        subTitle={"What Our Customers Say"}
        description={"Real reviews from real customers"}
      ></Title>
      <Marquee pauseOnHover={true} speed={60}>
        <div className="flex items-center mt-16">
          {newUser.map((user, idx) => (
            <User key={idx} user={user}></User>
          ))}
        </div>
      </Marquee>
      <Marquee pauseOnHover={true} direction="right" speed={60}>
        <div className="flex items-center mt-6">
          {newUser2.map((user, idx) => (
            <User key={idx} user={user}></User>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;
