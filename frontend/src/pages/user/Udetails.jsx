import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import UserNav from "../../components/UserNav";
import { Header } from "../../components/Header";


const UDetails = () => {
  const ownerEmail = localStorage.getItem("user");
  const [course, setCourse] = useState({
    costPerHour: "",
    brand:"",
    costWithDriver: "",
    amount: "",
    hr: "",
    cardNumber: "",
    cvv: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const getCourses = async () => {
    const res = await axios
      .get(`http://localhost:8080/booking/${id}`)
      .then((res) => {
        setCourse(res.data);
      });
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
    <Header/>
      <UserNav />
      <div className="d-flex">
        <div className="col-md-5"></div>
        <div className="col-md-3">
          <div className="form-control  ">
            <div className="bg-primary">
              <h3 className="text-primary text-white"> Booking Details</h3>
            </div>

            <div class="card">
              <div class="card-body text-dark lead">
                <p class="card-text">
              
                  <b>Booking Id : </b>
                  {course.id}
                </p>

                <p class="card-text">
        
                <b>Customer :</b>
                {ownerEmail}
              </p>
                <p class="card-title">
                  <b>Vehicle Name :</b>
                  {course.brand}
                </p>

                <p class="card-title">
                <b>Vehicle No. :</b>
                {course.vehicleNumber}
              </p>

                <p class="card-text">
        
                  <b>CostPerHour:</b>
                  {course.costPerHour+ " ₹"}
                </p>
                <p class="card-text">
          
                  <b>Total Amount(₹):</b>
                  {course.hr * course.costPerHour+course.costWithDriver*course.hr+ " ₹"}
                </p>
            
                <p class="card-text">
             
                  <b>Booking Date:</b>
                  {course.date}
                </p>
                <p class="card-text">
             
                <b>Wish Date:</b>
                {course.onDate}
              </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UDetails;
