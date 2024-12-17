export default function Item({ item }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl m-4 ">
      <figure>
        <img
          src={`https://img.spoonacular.com/ingredients_100x100/` + item.image}
          alt={item.name}
          className="ml-4"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>
          {" "}
          {item.amount} {item.unit}
        </p>
      </div>
    </div>
  );
}
