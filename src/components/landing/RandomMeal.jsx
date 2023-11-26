import React, { useEffect, useState } from "react";
import MealCard from "../common/MealCard";
import axios from "axios";

function RandomMeal() {
  const [meal, setMeal] = useState();
  const url = "https://www.themealdb.com/api/json/v1/1/random.php";

  function getMeal() {
    axios
      .get(url)
      .then((response) => {
        setMeal(response.data.meals[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  useEffect(() => {
    getMeal();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap bg-[#eef7f8] m-auto lg:h-screen p-4">
        <div
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 text-gray-900 m-auto"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="text-6xl lg:m-4 text-[#17b97a] font-semibold">
            Still Deciding What to Cook?
          </h1>
          <h3 className="text-2xl lg:m-4 mt-5 font-semibold">
            Click Below to get more Random meals!
          </h3>
          <button
            className="mt-5 lg:m-4 bg-[#17b97a] p-4 rounded-tl-xl rounded-br-[30px] sm:m-auto hover:bg-[#ffa300]"
            onClick={getMeal}
          >
            Get Random Meal
          </button>
        </div>
        <div
          className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 m-auto"
          data-aos="flip-right"
          data-aos-duration="3000"
        >
          {meal !== undefined ? <MealCard data={meal} /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default RandomMeal;
