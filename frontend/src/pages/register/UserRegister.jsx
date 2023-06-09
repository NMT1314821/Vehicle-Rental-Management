import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';
import car5 from "../../../src/images/car6.jpg";
const UserRegister = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName:"",
    email: "",
    password: "",
    adharNo:"",
    licenceCopy:""
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
        console.log(data);
        const res = axios.post(`http://localhost:8080/user`, data);

        localStorage.setItem("meg", JSON.stringify(data.name));
        alert("User registered successfully!");
        navigate("/uhome");
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

    if(!values.userName){
      errors.userName = "userName is required !";
    }
    if (!emailRegex.test(values.email)) {
      errors.email = " Inavalid email !";
    }
    if (!values.password) {
      errors.password = "Password is required !";
    }
    if(values.password.length<=8 ){
      errors.password="Password must be greater than 8 digit's !"
    }
    if(values.password.length >20 ){
      errors.password="Password must be less than 10 digit's !"
    }

 
    return errors;
  };
console.log(data)
  return (
    <div>
      <Header />
      <body className="mw-100" style={{backgroundImage: `url(${car5})`}}>
      <div className="d-flex">
        <div className="col-md-4"></div>
        <div className=" mt-2 col-md-4 ">
          <h1 className="text-dark"> User Registration </h1>
        </div>
      </div>

      

      <div className="d-flex mb-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className=" container form-control">


          <div>
            <label>Licence Copy:</label>
              <input
                className="form-control"
                type="file"
              
                name="licenceCopy"
                value={data.licenceCopy}
              
              ></input>
            </div>
            <div>
            <label>Adhar No:</label>
              <input
                className="form-control"
                type="file"
              
                name="adharNo"
                value={data.adharNo}
              
              ></input>
            </div>
            <span className="text-danger mt-2">{errormeg.firstName}</span>
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

            <span className="text-danger mt-2">{errormeg.lastName}</span>
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

            <span className="text-danger mt-2">{errormeg.userName}</span>
            <div>
              <input
                className=" mt-3 form-control"
                type="text"
                placeholder="User Name"
                name="userName"
                value={data.userName}
                onChange={handleChange}
              ></input>
            </div>

            <span className="text-danger mt-2">{errormeg.email}</span>
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

            <span className="text-danger mt-2">{errormeg.password}</span>
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
            <div className="row col-md-12 mt-3 mb-3">
              <div className="col-md-4">
                <Link className=" mt-3 btn btn-info text-dark " to="/ulogin">
                  USER Login
                </Link>
              </div>

              <div className="col-md-4">
                <buttun className=" mt-3 btn btn-info text-dark" onClick={handleClick}>
                  Register
                </buttun>
              </div>
              <div className="col-md-4">
                <Link to="/oreg" className="mt-3 btn btn-info text-dark ">
                  OWNER registration{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4"></div>
      </div>
      <Footer />
      </body>
    </div>
  );
};

export default UserRegister;
