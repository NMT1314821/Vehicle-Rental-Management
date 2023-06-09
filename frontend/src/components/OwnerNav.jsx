import React from "react";
import { Link } from "react-router-dom";

const OwnerNav = () => {
  return (
    <div className="bg-success">
      <nav className=" navbar navbar-expand-lg">
        <h2 className="text-dark m-3"><b>Owner</b></h2>
        <Link className="p-4 text-dark navbar-brand" to="/">
          <b>Home</b>
        </Link>

       
        <Link className="p-4 text-dark nav-link" to="/ohome">
          <b>Vehicle's</b>
        </Link>
        <Link className="p-4 text-dark nav-link" to="/requests">
        <b>Request's</b>
        </Link>

        <Link className="p-4  text-dark nav-link" to="/oacceptednodriver">
        <b>Accepted</b> [ No Driver ]
      </Link>
        <Link className="p-2  text-dark nav-link" to="/oaccepted">
          <b>Accepted</b> [ Driver ]
        </Link>

        <Link className="mx-3 text-dark nav-link" to="/obookings">
        <b>Booking's</b>
      </Link>
      
        <div className="col-md-4">
          <Link className=" text-dark nav-link " to="/">
           <b>Log Out</b> 
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default OwnerNav;
