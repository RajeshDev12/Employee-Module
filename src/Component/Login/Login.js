import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler(e) {
    e.preventDefault();
    axios
      .get(
        `https://retoolapi.dev/B13laa/getusers?user_id=${userId}&password=${password}`
      )
      .then((res) => {
        if (res.status === 200) {
          toast.success("Login Successfully..!", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          setTimeout(function () {
            window.location.pathname = "/EmployeeList";
          }, 2000);
        } else {
          toast.error("Something Went Wrong..!", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
          window.location.pathname = "/";
        }
      })
      .catch((err) => {
        window.alert(err);
      });
  }

  return (
    <div className="Container">
      <div className="ContainerBox">
        <div className="form-box">
          <form className="header-form" onSubmit={loginHandler}>
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Enter Your User Id"
              onChange={(e) => setUserId(e.target.value)}
              className="form-control"
              required
            />
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              required
            />
            <br />
            <button className="btn-primary">Log In</button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
