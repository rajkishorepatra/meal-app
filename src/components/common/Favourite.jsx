import React, { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Favourite(props) {
  const { mealId, size ,setMealStatus} = props;
  const [isfav, setIsfav] = useState(false);

  useEffect(() => {
    const favMeals = JSON.parse(localStorage.getItem("favItem") || "[]");
    const favItems = favMeals.map((item) => item.id);
    if (favItems.includes(mealId)) {
      setIsfav(true);
    } else {
      setIsfav(false);
    }
  }, []);

  function getId() {
    let items = JSON.parse(localStorage.getItem("favItem") || "[]");
    const favItems = items.map((item) => item.id);

    if (favItems.includes(mealId)) {
      setIsfav(false);
      items = items.filter((item) => item.id !== mealId);
      localStorage.setItem("favItem", JSON.stringify(items));
      setMealStatus(false);
    } else {
      setIsfav(true);
      let newId = { id: mealId };
      items.push(newId);
      localStorage.setItem("favItem", JSON.stringify(items));
    }
  }
  return (
    <button className="absolute right-1 top-3 text-red-500" onClick={getId}>
      {isfav ? <FaHeart size={size} /> : <FaRegHeart size={size} />}
    </button>
  );
}

export default Favourite;
