// TODO: create a component that displays a single bakery item

import "./BakeryItem.css";

function BakeryItem(props) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={props.image} />
      </div>
      <div className="desc-container">
        <div className="name">{props.name}</div>
        <div className="desc">{props.description}</div>
        <div className="price">{props.price}</div>
        <button onClick={props.addToCart} className="add">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BakeryItem;
