import { useState } from "react";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Products from "./components/Products";
import items from "./items.json";
import categories from "./categories.json";

const Container = () => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); // agrega un item a la lista (array) de carrito usando el spread operator
  };

  const addToWishList = (product) => {
    setWishList([...wishList, product]); // agrega un item al array usando el spread operator
  };

  return (
    <>
      <Navbar cart={cart} wishList={wishList} />
      <section className="padding-y container">
        <div className="row">
          <Filters categories={categories} />
          <Products
            items={items}
            addItemToCart={addToCart}
            addItemToWishList={addToWishList}
          />
        </div>
      </section>
    </>
  );
};

export default Container;
