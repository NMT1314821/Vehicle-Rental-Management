import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import OwnerNav from "../../components/OwnerNav";

const OacceptedNoDriver = () => {
  const [vehicle, setVehicle] = useState([]);
  const [isData, setIsData] = useState(false);

  const navigate = useNavigate();

  const getRequest = async () => {
    try {
      await axios.get(`http://localhost:8080/acceptsNoDr`).then((res) => {
        console.log(res.data);
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
    axios.delete(`http://localhost:8080/acceptsNoDr/${id}`);
    var newVehicle = vehicle.filter((vehicle) => vehicle.id !== id);
    setVehicle(newVehicle);
    window.location.assign(`/oaccepted`);
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
            className="btn btn-danger btn-sm"
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
        <OwnerNav />
      </div>
      <div className="lead form-control">
        <h3 className="bg-primary text-white">List of Accepted Vehicle's</h3>
        {isData ? (
          <table className="table table-striped table-hover">
            <thead>
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

export default OacceptedNoDriver;
