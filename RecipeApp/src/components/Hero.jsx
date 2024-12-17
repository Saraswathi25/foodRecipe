import Search from "./Search";

export default function Hero({ foodData, setFoodData }) {
  return (
    <div
      className="hero min-h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/assets/banner1.jpg')",
      }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-center text-neutral-content px-6">
        <div className="max-w-3xl">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Discover Delicious Recipes
          </h1>
          <p className="mb-6 text-lg text-gray-300">
            Explore thousands of recipes tailored to your taste. Whether you're
            cooking for one or entertaining guests, find your next favorite dish
            here!
          </p>

          <Search foodData={foodData} setFoodData={setFoodData} />
        </div>
      </div>
    </div>
  );
}
