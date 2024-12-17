import Item from "./Item";

export default function ItemList({ food, isLoading }) {
  return (
    <div className="p-8">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
