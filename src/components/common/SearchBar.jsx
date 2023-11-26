import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Favourite from "./Favourite";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);


  // fetch data from the api

  useEffect(() => {
    if (searchTerm.length > 2) {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
        .then((response) => {
          if (response.data.meals !== null) {
            const mealSuggestions = response.data.meals.map((meal) => {
              return [meal.idMeal, meal.strMeal];
            });
            setSuggestions(mealSuggestions);
          } else {
            const mealSuggestions = [];
            setSuggestions(mealSuggestions);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSuggestionClick = (suggestion) => {
    window.location.href = `/det/id=${suggestion[0]}`;
    setSearchTerm(suggestion[1]);
  };
  return (
    <>
      <div className="relative flex items-center mt-10 pr-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="peer relative h-10 w-full rounded-md pl-2 bg-[#eef7f8] outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400 focus:drop-shadow-lg"
        />
        <span className="material-symbols-outlined absolute right-5 transition-all duration-200 ease-in-out group-focus-within:text-blue-400">
          <button type="submit">
            <FaSearch />
          </button>
        </span>
      </div>
      <ul className="autocomplete-suggestions bg-white rounded-md shadow-2xl absolute z-50">
        {suggestions.map((suggestion) => (
          <>
            <button
              key={suggestion[0]}
              type="submit"
              className="absolute bg-white"
            >
              <Favourite size={20} mealId={suggestion[0]} />
            </button>
            <li
              key={suggestion[0]}
              className="peer relative autocomplete-suggestion cursor-pointer p-2 bg-white"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion[1]}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}

export default SearchBar;
