import React from 'react'
import { Link } from 'react-router-dom'

const UserNav = () => {
    return (
       <div>
       
       <div className='bg-success'>
                    
       <nav className="navbar navbar-expand-lg">
       <h2 className='text-dark m-3'><b>User</b></h2>
       <Link className="p-4 text-dark navbar-brand" to="/"><b>Home</b></Link>
       
     
    
             <Link className=" p-4 text-dark nav-link" to="/uhome"><b>Vehicle's</b> </Link>

             <Link className=" p-4 text-dark nav-link" to="/unodriver"><b>Requested</b></Link>
             <Link className="p-4  text-dark nav-link" to="/uacceptednodriver">
             <b>Accepted</b> [ No Driver ]
           </Link>
             <Link className="p-2  text-dark nav-link" to="/uaccepted">
             <b>Accepted</b> [ With Driver ]
             </Link>
           
           <Link className="p-2 text-dark nav-link" 
           to="/ubookings"><b>MyBookings</b></Link>
           <div className="col-md-4">
           <Link className=" text-dark nav-link " to="/"><b>Log Out</b></Link>
           </div>
     </nav>
     
            </div>
         
      
       </div>
    
    )
}

export default UserNav;
