import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';
import car5 from "../../../src/images/car6.jpg";

const OwnerRegister = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isRegister, setIsRegister] = useState(false);
  const [errors, setErrors] = useState([]);

  const [errormeg, setErrormeg] = useState({});

  function handleChange(event) {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  }

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      setErrormeg(validate(data));
      setIsRegister(true);
      console.log(errormeg);
      console.log(Object.keys(errormeg).length);

      if (Object.keys(errormeg).length === 0 && isRegister) {
        const res = axios.post(`http://localhost:8080/owner`, data);

        localStorage.setItem("meg", JSON.stringify(data.name));
        alert("Owner registered successfully!");
        navigate("/ologin");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z]+@[A-Za-z0-9]+\.[a-z]{2,3}$/;
 

    if (!values.firstName) {
      errors.firstName = "Firstname is required !";
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is required !";
    }
    if (!emailRegex.test(values.email)) {
      errors.email = " Inavalid email !";
    }
    if (!values.password) {
      errors.password = "Password is required !";
    }
    if (values.password.length < 8) {
      errors.password = "Password must be greater than 8 digit's !";
    }
    if (values.password.length >= 20) {
      errors.password = "Password must be less than 10 digit's !";
    }
   
    return errors;
  };

  return (
    <div >
      <Header />
      <body className="mw-100" style={{backgroundImage: `url(${car5})`}}>
        

      <div className="d-flex"
      >
        <div className="col-md-4"></div>
        <div className=" mt-2 col-md-4 ">
          <h1 className="bg-transparent text-dark"> Owner Registration </h1>
        </div>
      </div>

      

      <div className="d-flex p-5">
        <div className="col-md-3"></div>
        <div className="col-md-6 p-5">
          <div className=" container form-control">
            <p className="text-danger">{errormeg.firstName}</p>
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                ></input>
            </div>

            <p className="text-danger">{errormeg.lastName}</p>
            <div>
              <input
                className=" mt-3 form-control"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                ></input>
            </div>

            <p className="text-danger">{errormeg.email}</p>
            <div>
              <input
                className=" mt-3 form-control"
                type="email"
                placeholder="test@gmail.com"
                name="email"
                value={data.email}
                onChange={handleChange}
                ></input>
            </div>

            <p className="text-danger">{errormeg.password}</p>
            <div>
              <input
                className=" mt-3 form-control"
                type="password"
                placeholder="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                ></input>
            </div>

            <div className="row col-md-12">
              <div className="col-md-4">

              <button className=" mt-3 btn btn-info" onClick={handleClick}>
                Register
              </button>
              </div>
              <div className="col-md-4 mt-3 mb-3">
                  <button type="button" class="btn btn-info">
                  <Link to="/ureg" style={{textDecoration:'none'}} className="text-dark" >
                    user registration...{" "}
                  </Link>
                  </button>
              </div>

              <div className="col-md-4 mt-3 mb-3">
              <button type="button" class="btn btn-info">
                <Link className="text-dark" style={{textDecoration:'none'}} to="/ulogin">
                  Owner Login
                </Link>
              </button>
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

export default OwnerRegister;
