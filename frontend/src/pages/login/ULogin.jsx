import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import car5 from "../../../src/images/car6.jpg";

const ULogin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  function handleClick(event) {
    event.preventDefault();
    if (data.email === "" || data.password === "") {
      alert("Please enter all fields");
    } else
     {
      try {
        const res = axios
          .post(`http://localhost:8080/userLogin`, data)
          .then((res) => {
            console.log(data)
            const usermail = res.data.email; // Replace `email` with the actual property name in the response
            console.log(usermail);
            localStorage.setItem("user", usermail);      
         
              window.location.assign(`/uhome`);
            
          });
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div>
      <Header />
      <body className="mw-100" style={{backgroundImage: `url(${car5})`}}>
      <div className="d-flex">
        <div className="col-md-4"></div>
        <div className="p-4 mt-5 col-md-5 ">
          <h1 className=" pb-1" style={{color: 'orange'}}> <b>User login...</b> </h1>
          
          <div className="container form-control mt-2 mb-5">
            <div>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                value={data.email}
                className="form-control mt-5"
                placeholder="test@gmail.com"
              ></input>
            </div>

            <div>
              <input
                className="mt-2 form-control"
                onChange={handleChange}
                name="password"
                value={data.password}
                type="password"
                placeholder="password"
              ></input>
            </div>

            <div className="row col-md-12 mt-3 mb-3">
            <div className="col-md-4">
              <Link to="/ologin" className="mt-3 btn btn-info text-dark  ">
                Owner Login
              </Link>
            </div>
            <div className="col-md-4">
              <button className="mt-3 btn btn-info text-dark  " onClick={handleClick}>
                Login
              </button>
            </div>
          <div className="col-md-4">
            <Link to="/ureg" className="mt-3 btn btn-info text-dark ">
              Register here {" "}
            </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      </body>
      <Footer />
    </div>
  );
};

export default ULogin;
