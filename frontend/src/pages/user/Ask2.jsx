import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../../components/Header'
import UserNav from '../../components/UserNav'

const Ask2 = () => {

    const ownerEmail = localStorage.getItem("user");
    const navigate=useNavigate()

    const[data,setData]=useState({
        username:'',
        userPhone:'',
        hr:'',
        driver:'',
        email: ownerEmail,
        onDate:''


    
    })
  
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
          
          axios.put(`http://localhost:8080/request/${id}`,data)
          alert("Request detail's added successfully!")
          navigate(`/urequested`)
          window.location.assign(`/urequested`)
        }
      
        const handleUpdate=async(data)=>
        {
          
          axios.put(`http://localhost:8080/request/${id}`,data)
          alert("Request detail's updated successfully!")
          navigate(`/urequested`)
          window.location.assign(`/urequested`)
        }


      

    return (
        <div>
        <Header/>
        <UserNav/>
        <div className=" d-flex form-control">
        <div className="col-md-4"></div>
        <div className="p-3 col-md-4">
        <h3 className='bg-success text-white form-control'> Fill up Request Detail's</h3>
  
        <div className="container form-control">
     
          
        <div>
      <label>UserName:</label>
        <input className='mt-2 form-control'
         type="text"
         placeholder='Enter user name '
         name="username"
         onChange={handleChange}
         value={data.username}
       ></input>
       </div>

       <div>
       <label>User Phone:</label>
         <input className='mt-2 form-control'
          type="text"
          placeholder='Enter user phone '
          name="userPhone"
          onChange={handleChange}
          value={data.userPhone}
        ></input>
        </div>

      <div>
      <label >Enter how many hours:</label>
      <input className='mt-2 form-control'
       type="text"
       placeholder='Enter how many hours'
       name="hr"
       onChange={handleChange}
       value={data.hr}
     ></input>
     </div>


   

    <div>
     <label className='mt-3'>Vehicle ₹/hour :</label>
     <input className='mt-2 form-control'
      type="text"
   
      name="costPerHour"
      value={data.costPerHour + " ₹"}
    ></input>
    </div>

 
    <div>
    <label className='mt-3'><b>Total Amount :</b></label>
    <input className='mt-2 form-control'
     type="text"
     name="costWithDriver"
     value={ data.hr*data.costPerHour + " ₹"} 
   ></input>
   </div>
     
     <div>
     <label >Enter wish date :</label>
     <input className='mt-2 form-control'
      type="date"
      min={moment(new Date()).format('YYYY-MM-DD')}
    
      placeholder='Enter wish date'
      name="onDate"
      onChange={handleChange}
      value={data.onDate}
    ></input>
    </div>



        </div>
        <div className=' mt-2 btn btn-primary btn-sm'
        onClick={()=>handleClick(data)}
        >Send Request</div>
      
        </div>
        
        </div>
        </div>

   
      
      
    )
}

export default Ask2;
