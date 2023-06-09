import axios from "axios";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import UserNav from "../../components/UserNav";

const Uaccepted = () => {
  const [payment, setPayment] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [isData, setIsData] = useState(false);

  const navigate = useNavigate();

  const getRequest = async () => {
    try {
      await axios.get(`http://localhost:8080/accepts`).then((res) => {
        if (res.data.length > 0) {
          setVehicle(res.data);
          setIsData(true);
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
    axios.delete(`http://localhost:8080/accept/${id}`);
    var newVehicle = vehicle.filter((vehicle) => vehicle.id !== id);
    setVehicle(newVehicle);
    navigate(`/uaccepted`);
  };

  const handlePay = (id) => {
    navigate(`/pay/${id}`);
  };

  function RequestedTable(vehicle) {
    return (
      <tr className="table table-striped table-hover">
        <td className="table-primary">{vehicle.id}</td>
        <td>
          <img
            src={`http://${window.location.hostname}:8080/Images/${vehicle.image}`}
            alt="vehicle"
            height={100}
            width={200}
          />
        </td>
        <td>{vehicle.vehicleType}</td>
        <td>{vehicle.vehicleNumber}</td>
        <td>{vehicle.costPerHour}</td>
        <td>{vehicle.costWithDriver}</td>
        <td>{vehicle.brand}</td>
        <td>{vehicle.city}</td>
        <td>{vehicle.street}</td>
        <td>{vehicle.state}</td>
        <td>{vehicle.username}</td>
        <td>{vehicle.userPhone}</td>
        <td>{vehicle.driverName}</td>
        <td>{vehicle.driverPhone}</td>
        <td>{vehicle.ownerPhone}</td>
        <td>{vehicle.onDate}</td>
        <td className="bg-light">
      
        <button
        className="btn btn-primary btn-sm mb-2"
        onClick={() => handlePay(vehicle.id)}
      >
        Pay
      </button>

      <button
      className="btn btn-danger btn-sm "
      onClick={() => handleDelete(vehicle.id)}
    >
    
      Cancel
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
          <table className="table table-striped table-hover">
            <thead className="table-danger">
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Vehicle Type</th>
                <th>Vehicle No.</th>
                <th>₹/Hr</th>
                <th>₹(Driver)/Hr</th>
                <th>Brand</th>
                <th>City</th>
                <th>Street</th>
                <th>State</th>
                <th>User Name</th>
                <th>User No.</th>
                <th>Driver Name</th>
                <th>Driver No.</th>
                <th>Owner No.</th>
                <th>On Date</th>
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

export default Uaccepted;
