import React from "react";
import meal from "../../assets/meal.png";

function Hero() {
  return (
    <>
      <div className="flex flex-wrap bg-[#eef7f8] m-auto lg:h-screen p-4">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 text-gray-900 m-auto">
          <h1 className="text-6xl lg:m-4 text-[#17b97a] font-semibold">
            Discover, Delight, Devour
          </h1>
          <h3 className="text-3xl lg:m-4 mt-5 font-semibold mb-8 lg:mb-8">
            Your Culinary Compass for Every Meal!
          </h3>
          <a href="#findMeal" className="lg:m-4 bg-[#17b97a] p-4 rounded-tl-xl rounded-br-[30px] hover:bg-[#ffa300]">
            Get Started {`>`}
          </a>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 m-auto">
          <img src={meal} className="w-4/5 m-auto p-4" alt="Meal img"/>
        </div>
      </div>
    </>
  );
}

export default Hero;
