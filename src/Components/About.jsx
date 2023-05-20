import React from "react";
import one from "../../public/1.avif";
import two from "../../public/2.avif";
import three from "../../public/3.avif";
import four from "../../public/4.avif";

function About() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div className="flex gap-4 items-center">
        <div>
          <img src={one} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-black">Dust Resistant</h2>
          <p>
            we offer a wide selection of dust-resistant toys that are perfect
            for little ones who love to have fun while keeping their living
            spaces tidy.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <img src={two} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-black">Eco Friendly</h2>
          <p>
            we offer a wide selection of dust-resistant toys that are perfect
            for little ones who love to have fun while keeping their living
            spaces tidy.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <img src={three} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-black">Eco Friendly</h2>
          <p>
            we offer a wide selection of dust-resistant toys that are perfect
            for little ones who love to have fun while keeping their living
            spaces tidy.
          </p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <img src={four} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-black">Eco Friendly</h2>
          <p>
            we offer a wide selection of dust-resistant toys that are perfect
            for little ones who love to have fun while keeping their living
            spaces tidy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
