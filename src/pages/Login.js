import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const BASE_URL = "http://13.235.87.215:4000";
  const navigate = useNavigate();
  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const submitFn = () => {
    if (!username || !password) {
      return;
    }
    let data = {
      name: username,
      password: password,
    };
    // localStorage.setItem("user", JSON.stringify(obj));
    axios
      .post(BASE_URL + "/auth/signup", data)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data);
        }
      })
      .catch((error) => console.log(error));

    navigate("/home");
  };
  return (
    <div>
      <div className="bg-light px-5 py-2">
        <div className="row">
          <div className="col">
            <h3>Ecommerce</h3>
          </div>
        </div>
      </div>
      <div className="container text-center my-5 text-primary ">
        <h2>Welcome to Ecommerce</h2>
        {!showSignup ? (
          <div
            style={{ width: 25 + "rem" }}
            className="container bg-light text-center text-dark px-5 py-1"
          >
            <h4>Login</h4>
            {/* <form> */}
            <div className="input-group">
              <input
                type="text"
                className="form-control m-1"
                placeholder="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                className="form-control m-1"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary form-control m-1"
              value="Log in as user"
              // onClick={loginFn}
            />
            <div className="text-center">
              <p className="text-info" onClick={() => toggleSignup()}>
                Don't have an account? Signup?
              </p>
            </div>
            {/* </form> */}
          </div>
        ) : (
          <div
            style={{ width: 25 + "rem" }}
            className="container bg-light text-center text-dark px-5 py-1"
          >
            <h4>Signup</h4>
            {/* <form> */}
            <div className="input-group">
              <input
                type="text"
                className="form-control m-1"
                placeholder="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                className="form-control m-1"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="btn btn-primary form-control m-1"
              value="Signup as User"
              onClick={submitFn}
            />
            <div className="text-center">
              <p className="text-info" onClick={() => toggleSignup()}>
                Already have an account? Login?
              </p>
            </div>
            {/* </form> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
