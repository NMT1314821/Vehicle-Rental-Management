import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import OwnerNav from "../../components/OwnerNav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoDriver = () => {
  const [data, setData] = useState({
    ownerPhone: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const getVehicle = async () => {
    const res = await axios
      .get(`http://localhost:8080/request/${id}`)
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getVehicle();
  }, []);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async (data) => {
    axios.put(`http://localhost:8080/acceptNoDr/${id}`, data);
    alert("Owner no. added successfully!");
    navigate(`/oacceptednodriver`);
    window.location.assign(`/oacceptednodriver`);
  };

  return (
    <div>
      <Header />
      <OwnerNav />
      <div className=" d-flex form-control">
        <div className="col-md-4"></div>
        <div className="p-3 col-md-4">
          <h3 className="bg-primary text-white">Add Owner No</h3>

          <div className="container form-control">
            <div>
              <label>Owner No:</label>
              <input
                className="mt-2 form-control"
                type="text"
                placeholder="Enter Owner number"
                name="ownerPhone"
                onChange={handleChange}
                value={data.ownerPhone}
              ></input>
            </div>

            <div
              className=" mt-2 btn btn-primary btn-sm"
              onClick={() => handleClick(data)}
            >
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoDriver;
