import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import OwnerNav from '../../components/OwnerNav'

const Driver = () => {
 
        const [data,setData]=useState(
            {
              
                driverName:'',
                driverPhone:'',
                ownerPhone:''

            }
        )
    
        const navigate=useNavigate()
    
        const {id}=useParams()
    
        const getVehicle=async() =>{
           const res= await axios.get(`http://localhost:8080/request/${id}`)
           .then((res)=>{
            setData(res.data)
           })
        }
       
        useEffect(()=>
        {  
            getVehicle();
        },[])
    
      const handleChange=(event)=>
      {
        setData(
            {
                ...data,
                [event.target.name]:event.target.value,
            })
      }
    
      const handleClick=async(data)=>
      {
        
        axios.put(`http://localhost:8080/accept/${id}`,data)
        alert("Driver added successfully!")
        navigate(`/oaccepted`)
        window.location.assign(`/oaccepted`)
      }
    
    

    return (
        <div>
            <Header/>
            <OwnerNav/>
            <div className=" d-flex form-control">
            <div className="col-md-4"></div>
            <div className="p-3 col-md-4">
            <h3 className='bg-primary text-white'>Add Driver</h3>
      
            <div className="container form-control">
         
    
        <div>
        <label>Driver Name:</label>
        <input className='mt-2 form-control'
         type="text"
         placeholder='Enter driver name'
         name="driverName"
         onChange={handleChange}
         value={data.driverName}
       ></input>
       </div>

       <div>
       <label>Driver No:</label>
       <input className='mt-2 form-control'
        type="text"
        placeholder='Enter phone number'
        name="driverPhone"
        onChange={handleChange}
        value={data.driverPhone}
      ></input>
      </div>

      <div>
      <label>Owner No:</label>
      <input className='mt-2 form-control'
       type="text"
       placeholder='Enter Owner number'
       name="ownerPhone"
       onChange={handleChange}
       value={data.ownerPhone}
     ></input>
     </div>
     
        
         <div className=' mt-2 btn btn-primary btn-sm'
         onClick={()=>handleClick(data)}
         >Add</div>
        
          </div>
          </div>
          </div>
          </div>
    )
}

export default Driver;
