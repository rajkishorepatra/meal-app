import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";

function MealDetails() {
  const mealId = window.location.pathname.split("id=")[1];
  const [meal, setMeal] = useState();
  const getMeal = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => {
        setMeal(response.data.meals[0]);
      });
  };
  useEffect(() => {
    getMeal();
  }, []);

  return (
    <>
      {meal !== undefined ? (
        <div className="flex flex-wrap bg-[#eef7f8] lg:h-auto m-8 rounded-xl">
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 items-center"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <img
              src={meal.strMealThumb}
              className="w-4/5 rounded sm:m-auto m-auto lg:sticky md:sticky items-center lg:top-40 md:top-40"
              alt="meal thumbnail"
            />
          </div>
          <div
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 text-gray-900 m-auto"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <h1 className="text-4xl lg:m-4 text-[#17b97a] lg:font-semibold font-bold">
              {meal.strMeal}
            </h1>
            <h3 className="text-2xl lg:m-4 mt-5 font-bold mb-8 lg:mb-8">
              <span className="text-[#17b97a]">Area : </span>
              {meal.strArea}
              <br />
              <span className="text-[#17b97a]">Category : </span>
              {meal.strCategory}
              <br />
              <span className="text-[#17b97a]">Instructions : </span>
              {meal.strInstructions}
              <br />
              <br />
              <a href={meal.strYoutube}>
                <FaYoutube color="red" size={40} />
              </a>
            </h3>
          </div>
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}

export default MealDetails;
