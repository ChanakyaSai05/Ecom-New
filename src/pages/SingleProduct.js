import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../api/products";
import Header from "../components/Header";
import "./Product.css";
function SingleProduct() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  console.log(id);
  const init = async () => {
    const URL = `/products/${id}`;
    const { data } = await getAllProducts(URL);
    console.log(data);
    setProduct(data);
  };
  console.log(product);
  useEffect(() => {
    init();
  }, []);
  return (
    <div>
      <Header />
      <div className="single-container">
        {!product ? (
          <div>{"Loading..."}</div>
        ) : (
          <div className="card">
            <h4>{product.name}</h4>
            <div>{product.description}</div>
            <div>₹ {product.cost}</div>
            <Button variant="warning" style={{ marginTop: "20px" }}>
              Buy now
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
