import { useState, useEffect } from "react";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  const url = "https://api.spoonacular.com/recipes/complexSearch";
  const api_key = "9e5c6c1daa8743efa241c6399733c3f9";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${api_key}`);
      const data = await res.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className="flex justify-center mt-4">
      <label className="input input-bordered flex items-center gap-2 w-80">
        <input
          type="text"
          className="grow"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
}
