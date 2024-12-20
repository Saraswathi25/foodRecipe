import { useEffect, useState } from "react";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId }) {
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const api_key = "9e5c6c1daa8743efa241c6399733c3f9";
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${url}?apiKey=${api_key}`);
      const data = await response.json();

      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  console.log(food);
  return (
    <>
      <div className="card bg-base-100 w-full shadow-xl justify-center items-center">
        <h2 className="card-title mt-10 text-center">{food.title}</h2>
        <div className="flex justify-center items-center">
          <img src={food.image} alt={food.title} className="mt-4 w-full" />
        </div>
        <div className="card-body">
          <div className="flex justify-around">
            <div>⌚{food.readyInMinutes} Minutes</div>
            <div>👨‍👩‍👧‍👦 {food.servings} Persons</div>
            {food.vegan && <div>{food.vegan ? "🐮 Vegan" : ""} </div>}
            <div>{food.vegetarian ? "🥕 Vegetarian" : "🍗 Non-Vegetarian"}</div>
            <div>💲{(food.pricePerServing / 100).toFixed(2)} Per Serving </div>
          </div>
          <h2 className="card-title">Ingredients</h2>
          <ItemList food={food} isLoading={isLoading} />
          <h2 className="card-title">Instructions</h2>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </div>
      </div>
    </>
  );
}
