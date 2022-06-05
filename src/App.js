import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Suspense } from "react";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div className="loader">loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<div className="loader">loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          exact
          path="/product"
          element={
            <Suspense fallback={<div className="loader">loading...</div>}>
              <Product />
            </Suspense>
          }
        />
        <Route
          exact
          path="/product/:id"
          element={
            <Suspense fallback={<div className="loader">loading...</div>}>
              <SingleProduct />
            </Suspense>
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Suspense fallback={<div className="loader">loading...</div>}>
              <Cart />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
