import React, { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import "./Product.css";
import { useNavigate } from "react-router-dom";
function Product() {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const init = async () => {
    // const { data } = await getAllProducts();
    const URL = "/products";
    const { data } = await getAllProducts(URL);
    console.log(data);
    setProducts(data);
  };
  const singleFn = (id) => {
    // console.log(id);
    navigate(`/product/${id}`);
  }; //This is for single product
  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      <Header />
      <div className="product-container">
        {!products ? (
          <div>{"Loading..."}</div>
        ) : (
          <div className="cards-container">
            {products.map((item, index) => (
              <div
                className="card"
                onClick={() => singleFn(item.id)}
                key={index}
              >
                {console.log(index)}
                <h4>{item.name}</h4>
                <div>{item.description}</div>
                <div>₹ {item.cost}</div>
                <Button variant="warning" style={{ marginTop: "20px" }}>
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
