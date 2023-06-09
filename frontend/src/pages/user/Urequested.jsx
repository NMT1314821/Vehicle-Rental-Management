import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import UserNav from '../../components/UserNav'

const Urequested = () => {

    const ownerEmail = localStorage.getItem("user");
    const[vehicle,setVehicle]=useState([])
    const[isData,setIsData]=useState(false)

    const navigate=useNavigate()



    const getRequest = async()=>{
        try{
             await axios.get(`http://localhost:8080/requests`)
             .then((res)=>{
                if(res.data.length>0){
                    setVehicle(res.data);
                    setIsData(true)
                }
             })
     
        }catch(err){
            console.log(err)
        }
    };

    useEffect(() => {
     getRequest()
    }, [])

const handleDelete=(id)=>{
  axios.delete(`http://localhost:8080/request/${id}`)
  var newVehicle=vehicle.filter((vehicle)=>vehicle.id!==id)
  setVehicle(newVehicle)
  navigate(`/urequested`)
}

const {id}=useParams()

const handleRequest=(id)=>{
   navigate(`/ask/${id}`)
}

const handleRequestNoDriver=(id)=>{
    navigate(`/asknodriver/${id}`)
}

    function RequestedTable(vehicle){
        return(
            <tr  >
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
             <td>{ownerEmail}</td>

            <td>
            <button className='btn btn-primary btn-sm mb-1'
            onClick={()=>handleRequest(vehicle.id)}
            >Send Request with Driver</button>

            <button className='btn btn-warning btn-sm mb-1'
            onClick={()=>handleRequestNoDriver(vehicle.id)}
            >Send Request without Driver </button>

            <button className='btn btn-danger btn-sm'
            onClick={()=>handleDelete(vehicle.id)}
            >Cancel</button>

       
            </td>

        
            </tr>
        )
    }

    return (
        <div>
        <div>
        <Header/>
        <UserNav/>
        </div>
        <div className='lead form-control'><h3 className='bg-secondary text-white' >Requested Vehicle's</h3>
            {isData ?(
                <table className='table table-striped table-hover'>
                <thead>
                <tr>
                <th>Id</th>
                <th>Images</th>
                <th>Vehicle Type</th>
                <th>₹(Vehicle)/hr</th>
                <th>₹(Driver)/hr</th>
                <th>Brand</th>
                <th>City</th>
                <th>Street</th>
                <th>State</th>
                <th>User Name</th>
                <th>User No.</th>
                <th>Hour</th>
                <th>Driver</th>
                <th>Wish Date</th>
                <th>Request</th>
                </tr>
                </thead>
                <tbody>{isData ? vehicle.map(RequestedTable):null}</tbody>
                </table>
            ):(
                <center>
                <h4>No data found</h4>
                </center>
            )

            }
        </div>
        </div>
    )
}

export default Urequested;
