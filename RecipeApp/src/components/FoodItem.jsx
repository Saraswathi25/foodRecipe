export default function FoodItem({ food, setFoodId }) {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl mb-4">
      <figure className="w-full mt-4">
        <img src={food.image} alt={food.title} />
      </figure>
      <div className="card-body ">
        <h2
          className="card-title justify-center"
          style={{ fontWeight: "normal" }}
        >
          {food.title}
        </h2>
        <div className="card-actions justify-center">
          <button
            onClick={() => {
              setFoodId(food.id);
            }}
            className="btn  bg-neutral text-neutral-content"
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
