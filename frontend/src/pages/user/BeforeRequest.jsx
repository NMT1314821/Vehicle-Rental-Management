import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import UserNav from '../../components/UserNav'

const BeforeRequest = () => {

    const[vehicle,setVehicle]=useState([])
    const[isData,setIsData]=useState(false)
    const ownerEmail = localStorage.getItem("user");

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
            <td>{ownerEmail}</td>
        

            <td>
            <button className='btn btn-success btn-sm'
            onClick={()=>handleRequest(vehicle.id)}
            >Add Request Detail's</button>
            </td>

            <td>
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
                <th>Request Id</th>
                <th>Images</th>
                <th>Vehicle Type</th>
                <th>Cost Per Hour</th>
                <th>Cost With Driver</th>
                <th>Brand</th>
                <th>City</th>
                <th>Street</th>
                <th>State</th>
              
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

export default BeforeRequest;
