import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../api/category";
import Header from "../components/Header";
function Home() {
  const [categories, setCategories] = useState();
  const init = async () => {
    // const URL = "/products";
    const response = await getAllCategories();
    // or
    // const { data } = await getAllCategories();
    console.log(response.data);
    setCategories(response.data);
  };
  useEffect(() => {
    init();
  }, []);
  console.log(categories);
  return (
    <div>
      <Header />
      <div className="display-5 text-center">All Products</div>
      <Link to="/product">
        <button className="btn btn-info">Show all Products</button>
      </Link>
      <div>
        {!categories ? (
          <div>{"Loading..."}</div>
        ) : (
          <div className="row">
            {categories.map((category) => (
              <div className="col" key={category.id}>
                {console.log(category.id)}
                <div className="card bg-dark text-white">
                  <Link to="/product">
                    <div className="p-5 text-decoration-none">
                      {category.name}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
