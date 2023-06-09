import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Header } from "../../components/Header";
import OwnerNav from "../../components/OwnerNav";

const AddVPhoto = () => {
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const email = localStorage.getItem("message");

  const [addV, setAddV] = useState({
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

  const validate = (addV) => {
    const errors = {};
    const numbersRegex = /^[0-9]/;

    if (!addV.vehicleType) {
      errors.vehicleType = "Enter vehicleType!";
    }

    if (!addV.costPerHour) {
      errors.costPerHour = "Enter costPerHour!";
    } else if (!numbersRegex.test(addV.costPerHour)) {
      errors.costPerHour = "Digits required only!";
    }

    if (!addV.costWithDriver) {
      errors.costWithDriver = "Enter costWithDriver!";
    } else if (!numbersRegex.test(addV.costWithDriver)) {
      errors.costWithDriver = "Digits required only!";
    }

    if (!addV.brand) {
      errors.brand = "Enter brand!";
    }

    if (!addV.vehicleNumber) {
      errors.vehicleNumber = "Enter vehicleNumber!";
    } else if (addV.vehicleNumber.length !== 10) {
      errors.vehicleNumber = "Required length 10!";
    }

    if (!addV.city) {
      errors.city = "Enter city!";
    }
    if (!addV.state) {
      errors.state = "Enter state!";
    }
    if (!addV.street) {
      errors.street = "Enter street!";
    }
    if (!images) {
      errors.image = "Required image!";
    }

    return errors;
  };

  const handleClick = async (event) => {
    event.preventDefault();

    console.log(addV);
    try {
      setErrorMsg(validate(addV));
      setIsSubmit(true);
      console.log(errorMsg);
      console.log(addV);
      console.log(Object.keys(errorMsg).length);
      if (Object.keys(errorMsg).length === 0 && isSubmit) {
        let formData = new FormData();
        formData.append("image", images);
        formData.append("vehicleType", addV.vehicleType);
        formData.append("costPerHour", addV.costPerHour);
        formData.append("costWithDriver", addV.costWithDriver);
        formData.append("brand", addV.brand);
        formData.append("vehicleNumber", addV.vehicleNumber);
        formData.append("city", addV.city);
        formData.append("state", addV.state);
        formData.append("street", addV.street);
        formData.append("email", email);

        console.log(formData);

        const response = await axios.post(
          "http://localhost:8080/vehiclePhoto",
          formData
        );
        console.log(response);
        if (response.status === 200) {
          console.log(response);

          localStorage.setItem("success", response.data.message);
          alert(`Vehicle added successfully!`);
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
    setAddV({
      ...addV,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpload = (e) => {
    setImages((e.target.name = e.target.files[0]));
  };
  console.log(addV, "kh");
  return (
    <div>
      <Header />
      <OwnerNav />
      {console.log(errorMsg)}
      <form className="form-control container mt-4 w-50 ">
        <h3>Add Vehicle</h3>

        <div className="container form-control">
          <span className="text-danger mb-2 ">{errorMsg.image}</span>
          <div>
            <input
              onChange={handleUpload}
              className="form-control"
              style={{ width: "400px" }}
              name="image"
              type="file"
            ></input>
          </div>

          <div>
            <span className="text-danger mb-2">{errorMsg.vehicleType}</span>
            <select
              className="form-select mt-3"
              name="vehicleType"
              value={addV.vehicleType}
              onChange={handleChange}
            >
              <option selected>Select Car/Bike</option>
              <option>Car</option>
              <option>Bike</option>
            </select>
          </div>

          <div>
            <span className="text-danger mb-2">{errorMsg.brand}</span>
            <input
              className="mt-2 form-control"
              type="text"
              placeholder="Enter brand"
              name="brand"
              value={addV.brand}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <span className="text-danger mb-2">{errorMsg.vehicleNumber}</span>
            <input
              className="mt-2 form-control"
              type="text"
              placeholder="Enter vehicleNumber"
              name="vehicleNumber"
              value={addV.vehicleNumber}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <span className="text-danger mb-2">{errorMsg.costPerHour}</span>
            <input
              className="mt-2 form-control"
              type="text"
              name="costPerHour"
              value={addV.costPerHour}
              onChange={handleChange}
              placeholder="Enter ₹ / hour"
            ></input>
          </div>

          <div>
            <span className="text-danger mb-2">{errorMsg.costWithDriver}</span>
            <input
              className="mt-2 form-control"
              type="text"
              name="costWithDriver"
              value={addV.costWithDriver}
              onChange={handleChange}
              placeholder="Enter ₹  with driver /hour"
            ></input>
          </div>

          <div>
            <span className="text-danger mb-2">{errorMsg.city}</span>
            <select
              className="form-select mt-3"
              name="city"
              value={addV.city}
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
          </div>

          <div>
            <span className="text-danger mb-2">{errorMsg.state}</span>
            <select
              className="form-select mt-3"
              name="state"
              value={addV.state}
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
          </div>

          <div>
            <span className="text-danger mb-2">{errorMsg.street}</span>
            <input
              className="mt-2 form-control"
              type="text"
              placeholder="Enter Street"
              name="street"
              value={addV.street}
              onChange={handleChange}
            ></input>
          </div>

          <div className=" mt-2 btn btn-primary btn-sm" onClick={handleClick}>
            Add
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVPhoto;
