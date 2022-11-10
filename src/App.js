import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState(Array(bakeryData.length).fill(0));

  function handleClick(index) {
    const newCart = [...cart].map((count, i) => {
      if (i === index) {
        return count + 1;
      } else {
        return count;
      }
    });
    setCart(newCart);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map(
        (
          item,
          index // TODO: map bakeryData to BakeryItem components
        ) => (
          <BakeryItem
            name={item.name}
            description={item.description}
            image={item.image}
            price={item.price}
            addToCart={() => {
              handleClick(index);
            }}
          />
        )
      )}
      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {bakeryData.map((item, index) => (
          <p>
            {item.name}: {cart[index]}
          </p>
        ))}
      </div>
      <h2>
        Total Price :{" "}
        {bakeryData
          .reduce(
            (total, cur, index) => (total = total + cur.price * cart[index]),
            0
          )
          .toFixed(2)}
      </h2>
    </div>
  );
}

export default App;
