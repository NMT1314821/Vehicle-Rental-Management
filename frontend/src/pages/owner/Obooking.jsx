import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import OwnerNav from '../../components/OwnerNav'


const Obooking = () => {

    const[vehicle,setVehicle]=useState([])
    const[isData,setIsData]=useState(false)

    const navigate=useNavigate()

    const getBookings = async()=>{
        try{
             await axios.get(`http://localhost:8080/bookings`)
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
      getBookings()
    }, [])
    
    const handleDelete = (id) => {
      axios.delete(`http://localhost:8080/booking/${id}`);
      var newVehicle = vehicle.filter((vehicle) => vehicle.id !== id);
      setVehicle(newVehicle);
      navigate(`/obookings`);
    };
  


    function BookingTable(vehicle){
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
            <td>{vehicle.vehicleNumber}</td>
            <td>{vehicle.costPerHour}</td>
            <td>{vehicle.costWithDriver}</td>
            <td>{vehicle.email}</td>
            <td>{vehicle.brand}</td>
            <td>{vehicle.city}</td>
            <td>{vehicle.street}</td>
           <td>{vehicle.state}</td>
           <td>{vehicle.username}</td>
           <td>{vehicle.userPhone}</td>
           <td>{vehicle.driverName}</td>
           <td>{vehicle.driverPhone}</td>
           <td>{vehicle.hr*vehicle.costPerHour}</td>
          
           
           <td>
           <button
           className="btn btn-danger btn-sm"
           onClick={() => handleDelete(vehicle.id)}
         >   Cancel
      
         </button>
           </td>
            </tr>
        )
    }

    return (
        <div>
        <div>
        <Header/>
        <OwnerNav/>
        </div>
        <div className='lead form-control'>
        <h3 className='bg-primary text-white' > Booking's</h3>
            {isData ?(
                <table className='table table-striped table-hover'>
                <thead>
                <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Vehicle Type</th>
                <th>Vehicle No.</th>
                <th>Cost/hr</th>
                <th>Driver/hr</th>
                <th>Email</th>
                <th>Brand</th>
                <th>City</th>
                <th>Street</th>
                <th>State</th>
                <th>User Name</th>
                <th>User No.</th>
                <th>Driver Name</th>
                <th>Driver No.</th>
                <th>Amount</th>
                <th>Action</th>
                </tr>
                </thead>
                <tbody>{isData ? vehicle.map(BookingTable):null}</tbody>
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

export default Obooking;
