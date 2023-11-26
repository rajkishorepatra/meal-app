import React from "react";
import femaleImg from "../../assets/female.png";
import SearchBar from "../common/SearchBar";

function FindMeal() {
  return (
    <>
      <div className="flex flex-wrap m-auto lg:h-screen p-4" id="findMeal">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 m-auto">
          <img
            src={femaleImg}
            className="w-4/5 m-auto p-4"
            alt="Landing pg img"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 text-gray-900 m-auto">
          <h1 className="lg:text-6xl text-4xl text-[#17b97a] font-bold lg:font-semibold">
            Explore your preferred recipe.
          </h1>

          <SearchBar />
          <h3 className="mt-4">Discover Delectable Meals with Ease!</h3>
        </div>
      </div>
    </>
  );
}

export default FindMeal;
