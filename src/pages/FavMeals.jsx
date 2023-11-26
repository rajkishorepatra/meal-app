import React, { useState, useEffect } from "react";
import MealCard from "../components/common/MealCard";
import axios from "axios";

function FavMeals(e) {
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    const favMeals = JSON.parse(localStorage.getItem("favItem"));
    favMeals.map((meal) => {
      console.log(meal.id);
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.id}`)
        .then((res) => {
          setMealData((prev) => [...prev, res.data.meals[0]]);
        })
        .catch((err) => console.log(err));
      return null;
    });
  }, []);

  return (
    <>
      <div className="bg-[#eef7f8] m-5 rounded-2xl h-auto p-4">
        <div className="w-full  p-4 text-gray-900 m-auto text-center">
          <div className="mb-4">
            <h1 className="text-6xl lg:m-4 text-[#17b97a] font-bold">
              My Favourites
            </h1>
            <p className="text-xl lg:m-4">
              Here you can find all your favourite meals
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {mealData.map((meal) => (
              <MealCard key={meal.idMeal} data={meal} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FavMeals;
