import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";

import UserNav from "../../components/UserNav";

const UacceptedNoDriver = () => {
  const [vehicle, setVehicle] = useState({});
  const [isData, setIsData] = useState(false);
  
  const userName = localStorage.getItem("userName");

  const navigate = useNavigate();

  const getRequest = async () => {
    try {
      await axios.get(`http://localhost:8080/acceptsNoDr`).then((res) => {
        if (res.data.length > 0) {
          setIsData(true);
          const vehicles = [];
          for(var i=0;i<res.data.length; i++){
            if(res.data[i].username === userName ){
            vehicles.push(res.data[i]); 
            }
          }
          setVehicle(vehicles);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/acceptNoDr/${id}`);
    var newVehicle = vehicle.filter((vehicle) => vehicle.id !== id);
    setVehicle(newVehicle);
    window.location.assign(`/uacceptednodriver`);
  };

  const { id } = useParams();
  const handlePay = (id) => {
    navigate(`/paynodriver/${id}`);
  };

  function RequestedTable(vehicle) {
    return (
      <tr>
        <td>{vehicle.id}</td>
        <td>
          <img
            src={`http://${window.location.hostname}:8080/Images/${vehicle.image}`}
            alt="vehicle"
            height={100}
            width={200}
          />
        </td>
        <td>{vehicle.vehicleType}</td>
        <td>{vehicle.costPerHour}</td>
        <td>{vehicle.brand}</td>
        <td>{vehicle.city}</td>
        <td>{vehicle.street}</td>
        <td>{vehicle.state}</td>
        <td>{vehicle.username}</td>
        <td>{vehicle.userPhone}</td>
        <td>{vehicle.hr}</td>

        <td>{vehicle.ownerPhone}</td>

        <td>
          <button
            className="btn btn-primary btn-sm mb-2"
            onClick={() => handlePay(vehicle.id)}
          >
            Pay
          </button>
          <button
            className="btn btn-danger btn-sm mx-2"
            onClick={() => handleDelete(vehicle.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div>
      <div>
        <Header />
        <UserNav />
      </div>
      <div className="lead form-control">
        <h3 className="bg-secondary text-white">List of Accepted Vehicle's</h3>
        {isData ? (
          <table className="table table-bordered table-hover">
            <thead className="table-warning">
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Vehicle Type</th>
                <th>Cost Per Hour</th>
                <th>Brand</th>
                <th>City</th>
                <th>Street</th>
                <th>State</th>
                <th>User Name</th>
                <th>User No.</th>
                <th>Hours</th>
                <th>Owner No.</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{isData ? vehicle.map(RequestedTable) : null}</tbody>
          </table>
        ) : (
          <center>
            <h4>No data found</h4>
          </center>
        )}
      </div>
    </div>
  );
};

export default UacceptedNoDriver;
