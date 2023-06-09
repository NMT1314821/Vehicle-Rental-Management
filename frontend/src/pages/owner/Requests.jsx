import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import OwnerNav from "../../components/OwnerNav";


const Requests = () => {
  const [vehicle, setVehicle] = useState([]);
  const [isData, setIsData] = useState(false);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/requests");
      if (response.status === 200) {
        setVehicle(response.data);
        setIsData(true);console.log(response.data)
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);




  const handleDriver=(id)=>
  {
    navigate(`/driver/${id}`)
  }

  const handleWithoutDriver=(id)=>
  {
    navigate(`/nodriver/${id}`)
  }




  const handleReject = (id) => {
    axios.delete(`http://localhost:8080/request/${id}`);
    var newVehicle = vehicle.filter((vehicle) => vehicle.id !== id);
    setVehicle(newVehicle);
  };



  function VehiclesTable(vehicle) {
    return (
      <tr>
        <td>{vehicle.id}</td>
        <td>
        <img
        src={`http://${window.location.hostname}:8080/Images/${vehicle.image}`}
        alt="vehicle"
        height={100}
        width={150}
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
        <td>{vehicle.hr}</td>
        <td>{vehicle.driver}</td>
          <td>{vehicle.onDate}</td>

    
        <td><button className="btn btn-success btn-sm mb-1"
        onClick={()=>handleDriver(vehicle.id)}
        >Accept with Driver</button>
        <button className="btn btn-warning btn-sm mb-1"
      onClick={()=>handleWithoutDriver(vehicle.id)}
      >Accept without Driver</button>
      <button
      className="btn btn-danger btn-sm mb-1"
      onClick={() => handleReject(vehicle.id)}
    >
     Decline
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
  
    <div className="form-control">
    <h3 className="bg-primary text-white">Request's for Vehicle</h3>
    {isData ? (
      <table className="table table-triped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Vehicle Type</th>
            <th>Vehicle No.</th>
            <th>₹/Hr</th>
            <th>₹(Driver/Hr)</th>
            <th>Brand</th>
         
             <th>City</th>
             <th>Street</th>
             <th>State</th>
             <th>User Name</th>
             <th>User No.</th>
             <th>Hour</th>
             <th>Driver</th>
             <th>Wish Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{isData ? vehicle.map(VehiclesTable) : null}</tbody>
      </table>
    ) : (
      <center>
        <h4>No Data Found</h4>
      </center>
    )}
    </div>
     
    </div>

    
  );
};

export default Requests;
