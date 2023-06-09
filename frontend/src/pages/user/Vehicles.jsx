import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import UserNav from "../../components/UserNav";

const Vehicles = () => {
  const [vehicle, setVehicle] = useState([]);
  const [users, setusers] = useState([]);
  const [isData, setIsData] = useState(false);
  const ownerEmail = localStorage.getItem("user");
  
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/vehicles");
      if (response.status === 200) {
        setVehicle(response.data);
        setIsData(true)
        console.log(response.data);
        const res = await axios.get('http://localhost:8080/users');
        for(var i = 0; i<res.data.length; i++){
          if(res.data[i].email === ownerEmail){
            localStorage.setItem("userName",res.data[i].userName);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleBook = async (vehicle) => {
    try {
      await axios.post(`http://localhost:8080/request`, vehicle);
      alert("Would you like to cotinue for booking?");
      navigate(`/beforerequest`);
    } catch (err) {
      console.log(err.response);
    }
  };

  function VehiclesTable(vehicle) {
    return (
      <tr className="table table-striped table-hover ">
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
        <td>{ownerEmail}</td>

        <td>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => handleBook(vehicle)}
          >
            Book
          </button>
        </td>
      </tr>
    );
  }

  const keys = [
    "vehicleType",
    "costPerHour",
    "brand",
    "city",
    "street",
    "state",
  ];
  const handleSearch = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    );
  };
  return (
    <div>
      <Header />
      <UserNav />

      <div className="d-flex">
        
          <iframe
            height="500"
            width="1550"
            style={{ border: 0 }}
            loading="lazy"
            title="Maps"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCUA3uUquQ88On7YaIFbBpByARvNj64GAU
&q=${search ? search : "Kakinada"}`}
          ></iframe>
        
      </div>

      <div className="d-flex">
        <div className="col-md-4"></div>
        <div className="container mb-1">
          <div className="row mt-3">
            <div className="col mb-3">
              <input
                type="text"
                className="form-control my-2 w-60"
                placeholder="Type here to search..."
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
            </div>
            <div className="col  form-floating">
              <select
              id="location"
                className="form-select w-60  "
                aria-label="Default select example"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              >
                <option ></option>
                <option  value="young minds technology">
                  Select Current Location
                </option>
              </select>
              <label className="text-primary" for="location"><b> Current Location</b></label>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="col-md-12">
        {isData ? (
          <table className="table table-bordered table-hover bg-light">
            <thead>
              <tr className="table-danger">
                <th>ID</th>
                <th>Image</th>
                <th>Vehicle Type</th>
                <th>Vehicle No.</th>
                <th>₹/Hr</th>
                <th>₹(Driver/Hr)</th>
                <th>Brand</th>

                <th>City</th>
                <th>Street</th>
                <th>State</th>
                <th>Gmail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isData ? handleSearch(vehicle).map(VehiclesTable) : null}
            </tbody>
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

export default Vehicles;
