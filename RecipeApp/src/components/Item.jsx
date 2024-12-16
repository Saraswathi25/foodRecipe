export default function Item({ item }) {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={
              `https://img.spoonacular.com/ingredients_100x100/` + item.image
            }
            alt={item.name}
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
    </div>
  );
}
