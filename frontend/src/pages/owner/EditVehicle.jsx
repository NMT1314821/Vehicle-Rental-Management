import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Header } from "../../components/Header";
import OwnerNav from "../../components/OwnerNav";

const EditVehicle = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    id:"",
    vehicleType: "",

    costPerHour: "",
    costWithDriver: "",
    brand: "",
    vehicleNumber: "",
    city: "",
    state: "",
    street: "",
    image: "",
 
  });

  const [images, setImages] = useState();

  const [errorMsg, setErrorMsg] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { id } = useParams();

  const getProperty = async () => {
    const response = await axios.get(`http://localhost:8080/vehicle/${id}`);
    if (response.status === 200) {
      setData(response.data);
      console.log(response.data);
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  console.log(data, "hgfhj");
  console.log(images, "images");

  const validate = (data) => {
    const errors = {};
    const numbersRegex = /^[0-9]/;

    if (!data.vehicleType) {
      errors.vehicleType = "Enter vehicleType!";
    }

    if (!data.costPerHour) {
      errors.costPerHour = "Enter costPerHour!";
    } else if (!numbersRegex.test(data.costPerHour)) {
      errors.costPerHour = "Digits required only!";
    }

    if (!data.costWithDriver) {
      errors.costWithDriver = "Enter costWithDriver!";
    } else if (!numbersRegex.test(data.costWithDriver)) {
      errors.costWithDriver = "Digits required only!";
    }

    if (!data.brand) {
      errors.brand = "Enter brand!";
    }

    if (!data.vehicleNumber) {
      errors.vehicleNumber = "Enter vehicleNumber!";
    } else if (data.vehicleNumber.length !== 10) {
      errors.vehicleNumber = "Required length 10!";
    }

    if (!data.city) {
      errors.city = "Enter city!";
    }
    if (!data.state) {
      errors.state = "Enter state!";
    }
    if (!data.street) {
      errors.street = "Enter street!";
    }
    if (!data.id) {
      errors.id = "Enter id!";
    }
    if (!images) {
      errors.image = "Required image!";
    }

    return errors;
  };


  const handleClick = async (event) => {
    event.preventDefault();

    console.log(data);
    try {
      setErrorMsg(validate(data));
      setIsSubmit(true);
      console.log(errorMsg);
      console.log(data);
      console.log(Object.keys(errorMsg).length);
      if (Object.keys(errorMsg).length === 0 && isSubmit) {
        let formData = new FormData();
        formData.append("image", images);
        formData.append("id", data.id);
        formData.append("vehicleType", data.vehicleType);
        formData.append("costPerHour", data.costPerHour);
        formData.append("costWithDriver", data.costWithDriver);
        formData.append("brand", data.brand);
        formData.append("vehicleNumber", data.vehicleNumber);
        formData.append("city", data.city);
        formData.append("state", data.state);
        formData.append("street", data.street);


        console.log(formData);

        const response = await axios.put(
          "http://localhost:8080/vehicle",
          formData
        );
        console.log(response);
        if (response.status === 200) {
          console.log(response);

          localStorage.setItem("success", response.data.message);
          alert(`Vehicle updated successfully!`);
          navigate("/ohome");
        }
      }
    } catch (err) {
      toast.error("Invalid credentials!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpload = (e) => {
    setImages((e.target.name = e.target.files[0]));
  };

  return (
    <div>
      <Header />
      <OwnerNav />

      <form className="form-control container mt-4 w-50 ">
        <h3>Update Vehicle</h3>

        <div className="container form-control">
          <div>
            <input
              className="mt-2 form-control"
              type="text"
              placeholder="Enter id"
              name="id"
              value={data.id}
              onChange={handleChange}
            ></input>
            <span className="text-danger ">{errorMsg.id}</span>
          </div>
   


          <div>
          <input
            onChange={handleUpload}
            className="form-control"
            style={{ width: "400px" }}
            name="image"
            type="file"
          ></input>
          <span className="text-danger ">{errorMsg.image}</span>
        </div>


          <div>
            <select
              className="form-select mt-3"
              name="vehicleType"
              value={data.vehicleType}
              onChange={handleChange}
            >
              <option selected>Select Car/Bike</option>
              <option>Car</option>
              <option>Bike</option>
            </select>

          </div>

          <div>
            <input
              className="mt-2 form-control"
              type="text"
              placeholder="Enter brand"
              name="brand"
              value={data.brand}
              onChange={handleChange}
          ></input>
          <span className="text-danger ">{errorMsg.brand}</span>

          </div>

          <div>
            <input
              className="mt-2 form-control"
              type="text"
              placeholder="Enter vehicleNumber"
              name="vehicleNumber"
              value={data.vehicleNumber}
              onChange={handleChange}
            ></input>
          <span className="text-danger ">{errorMsg.vehicleNumber}</span>

          </div>

          <div>
            <input
              className="mt-2 form-control"
              type="text"
              name="costPerHour"
              value={data.costPerHour}
              onChange={handleChange}
              placeholder="Enter ₹ / hour"
            ></input>
          <span className="text-danger ">{errorMsg.costPerHour}</span>

          </div>

          <div>
            <input
              className="mt-2 form-control"
              type="text"
              name="costWithDriver"
              value={data.costWithDriver}
              onChange={handleChange}
              placeholder="Enter ₹  with driver /hour"
            ></input>
          <span className="text-danger ">{errorMsg.costWithDriver}</span>

          </div>
    

          <div>
            <select
              className="form-select mt-3"
              name="city"
              value={data.city}
              onChange={handleChange}
            >
              <option selected>Select a City</option>
              <option>Pune</option>
              <option>Banglore</option>
              <option>Tiruapti</option>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Hyderabad</option>
            </select>
            <span className="text-danger ">{errorMsg.city}</span>
          </div>
      

          <div>
            <select
              className="form-select mt-3"
              name="state"
              value={data.state}
              onChange={handleChange}
            >
              <option selected>Select a state</option>
              <option>Maharashtra</option>
              <option>Karnataka</option>
              <option>Delhi</option>
              <option>Tamilnadu</option>
              <option>AP</option>
              <option>Jammu Kashmir</option>
              <option>Telangana </option>
            </select>
            <span className="text-danger ">{errorMsg.state}</span>
          </div>
      

          <div>
            <input
              className="mt-2 form-control"
              type="text"
              placeholder="Enter Street"
              name="street"
              value={data.street}
              onChange={handleChange}
            ></input>
            <span className="text-danger ">{errorMsg.street}</span>
          </div>


          <div className=" mt-2 btn btn-primary btn-sm" onClick={handleClick}>
            Update
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditVehicle;
