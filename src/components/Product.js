import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";
import { ProductsData } from "../Contexts";
import AddToCartButton from "./AddToCartButton";

function Product() {
  const productId = useParams().productID;

  const { allProducts } = useContext(ProductsData);

  const product = allProducts.filter((prod) => prod.id === parseInt(productId))[0];
  // console.log(product);

  // product.stock > limitedStock ? properStockMarkup : limitedStockMarkup;

  let stockMarkup = <p className="product-page-stock">Stock: {product.stock}</p>;

  return (
    <section className="container">
      <div className="product-grid">
        <img src={product.thumbnail} alt={product.title} />
        <div className="product-details">
          <div className="flex">
            <h1 className="product-page-title">{product.title}</h1>
            <p className="product-rating">
              <AiFillStar />
              {product.rating}
            </p>
          </div>
          <p className="product-page-desc">{product.description}</p>
          <div className="flex" data-justify="left">
            <p className="product-page-price">${product.price}</p>
            {stockMarkup}
          </div>
          <div className="flex" style={{ marginBlock: "2em" }}>
            {/* <Button text="Add to Cart" type="add-to-cart" /> */}
            <AddToCartButton
              productDetails={{
                id: product.id,
                title: product.title,
                description: product.description,
                imageURL: product.imageURL,
                price: product.price,
                rating: product.rating,
                stock: product.stock,
                discount: product.discount,
              }}
            />
            <Button text="Buy Now" type="buy-now" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
