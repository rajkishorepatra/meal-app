import React from "react";
import { Link } from "react-router-dom";
import Favourite from "./Favourite";

const MealCard = ({ data }) => {
  return (
    <>
      <div className="max-w-xs rounded overflow-hidden shadow-lg m-auto">
        <div className="relative flex">
          <img
            className="w-full relative"
            src={data.strMealThumb}
            alt="Meal Thumbnail"
          />
          <Favourite size={30} mealId={data.idMeal} />
        </div>
        <Link to={{ pathname: `/meal-app/det/id=${data.idMeal}` }}>
          <div className="px-6 py-4 cursor-pointer">
            <div className="font-bold text-xl mb-2">{data.strMeal}</div>
            <p className="text-gray-700 text-base">
              Category: {data.strCategory}
              <br />
              Area: {data.strArea}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MealCard;
