import React, { useContext, useState } from "react";
import CartProductCard from "./CartProductCard";
import { CartContext } from "../Contexts";

function CartPage() {
  const { cartItems } = useContext(CartContext);
  const [cartPrice, setCartPrice] = useState(0);

  return (
    <main className="cart-page">
      <section className="cart-products">
        <h2 className="cart-products__title">My Cart ({cartItems.length})</h2>
        {/* <CartProductCard /> */}
        {cartItems.map((item) => (
          <CartProductCard key={item.id} productDetails={item} setCartPrice={setCartPrice} />
        ))}
      </section>
      <aside className="price-details">
        <h2 className="price-details__title">Price Details</h2>
        <p>
          Price (1 items) <span>${cartPrice}</span>
        </p>
        <p>
          Discount <span>-$1.0</span>
        </p>
        <p>
          Total <span>$21.0</span>
        </p>
      </aside>
    </main>
  );
}

export default CartPage;
