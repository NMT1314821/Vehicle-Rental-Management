import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import OwnerNav from "../../components/OwnerNav";

const Ohome = () => {
  const [vehicle, setVehicle] = useState([]);
  const [isData, setIsData] = useState(false);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/vehicles");
      if (response.status === 200) {
        setVehicle(response.data);
        setIsData(true);
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(vehicle);
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/vehicle/${id}`);
    var newVehicle = vehicle.filter((vehicle) => vehicle.id !== id);
    setVehicle(newVehicle);
  };

  const handleEdit = (id) => {
    navigate(`/editV/${id}`);
  };

  const handleAddVehicle = () => {
    navigate(`/addvphoto`);
  };

  const keys = ["vehicleType", "brand", "city", "street", "state"];

  const handleSearch = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search))
    );
  };

  return (
    <div>
      <Header />
      <OwnerNav />

      <div className="d-flex mt-5">
        <div className="col-md-2"></div>
        <iframe
          height="250"
          width="800"
          style={{ border: 0 }}
          loading="lazy"
          title="Maps"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCUA3uUquQ88On7YaIFbBpByARvNj64GAU
&q=${search ? search : "Pithapuram"}`}
        ></iframe>
      </div>

      <div className="d-flex">
      <div className="col-md-4"></div>
      <div className="container mb-3">
        <div className="row mt-3">
          <div className="col">
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
      <button
      className=" my-2 btn btn-primary p-3 btn-sm"
      onClick={handleAddVehicle}
    >
      Add
    </button>
      <div className="col-md-4"></div>
 
     
      </div>
  
      {isData ? (
        <table className="table table-bordered table-hover bg-light ">
          <thead className="table-success">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Vehicle Type</th>
              <th>Vehicle No.</th>
              <th>Cost/Hour</th>
              <th>Driver/hr</th>
              <th>Brand</th>

              <th>City</th>
              <th>Street</th>
              <th>State</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {handleSearch(vehicle).map((item, index) => {
              return (
                <tr key={index}>
                  <td className="table-warning">{item.id}</td>
                  <td>
                    <img
                      src={`http://${window.location.hostname}:8080/Images/${item.image}`}
                      alt="vehicle"
                      height={100}
                      width={200}
                    />
                  </td>
                  <td>{item.vehicleType}</td>
                  <td>{item.vehicleNumber}</td>
                  <td>{item.costPerHour}</td>
                  <td>{item.costWithDriver}</td>
                  <td>{item.brand}</td>
                  <td>{item.city}</td>
                  <td>{item.street}</td>
                  <td>{item.state}</td>

                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm mx-2"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <center>
          <h4>No Data Found</h4>
        </center>
      )}
    </div>
  );
};

export default Ohome;
