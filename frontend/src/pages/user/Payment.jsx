import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import UserNav from "../../components/UserNav";

const Payment = () => {
  const [data, setData] = useState({
    costPerHour: "",
    costWithDriver: "",
    amount: "",
    hr: "",
    cardNumber: "",
    cvv: "",
  });

  const navigate = useNavigate();

  const { id } = useParams();

  const usermail = localStorage.getItem("user");


  const getVehicle = async () => {
    const res = await axios
      .get(`http://localhost:8080/accept/${id}`)
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getVehicle();
  }, []);

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const { costPerHour, hr } = useParams();
  const handleClick = async (data) => {
    // let d = new Date().getDate();
    // let m = new Date().getMonth();
    // let y = new Date().getFullYear();
    // let t = new Date().getHours();
    // let t1 = new Date().getMinutes();

    // var bDate = d + "/" + m + "/" + y + " " + t + ":" + t1;
    // data.bookingDate = bDate;


    // if (totalAmount1 === 0) {
    //   alert("Please select quantity !");
    // } else {
    try {
      // const errors = setErrorMeg(validate(data));
      // setIsPaid(true);

      // if (Object.keys(errors).length === 0 && isPaid) {

      data.userMail = usermail;

      var totalAmount1 = data.hr * data.costPerHour+data.costWithDriver*data.hr;
      data.amount = totalAmount1;
  

      axios.post(`http://localhost:8080/booking`, data);
      alert(`Are you sure to pay ${data.hr * data.costPerHour+data.costWithDriver*data.hr} ₹  ?`);
      alert(`Paid ${data.hr * data.costPerHour+data.costWithDriver*data.hr} ₹ Successfully !`);
      navigate(`/ubookings`);
      window.location.assign(`/ubookings`);
      // }
    } catch (err) {
      console.log(err);
    }
    // }
  };

  return (
    <div>
      <Header />
      <UserNav />
      <div className=" d-flex form-control">
        <div className="col-md-4"></div>
        <div className="p-3 col-md-4">
          <h3 className="bg-primary text-white">Pay the Amount</h3>

          <div className="container form-control">
            <div>
              <label className="mt-3">Enter vehicle hour's:</label>
              <input
                className="mt-2 form-control"
                type="text"
                placeholder="Enter how many hours"
                name="hr"
                onChange={handleChange}
                value={data.hr}
              ></input>
            </div>

            <div>
              <label className="mt-3">Vehicle ₹/hour :</label>
              <input
                className="mt-2 form-control"
                type="text"
                name="costPerHour"
                value={data.costPerHour + " ₹"}
              ></input>
            </div>

            <div>
              <label className="mt-3">Driver ₹/hour :</label>
              <input
                className="mt-2 form-control"
                type="text"
                name="costWithDriver"
                value={data.costWithDriver + " ₹"}
              ></input>
            </div>

            <div>
              <label className="mt-3">
                <b>Total Amount :</b>
              </label>
              <input
                className="mt-2 form-control"
                type="text"
                name="costWithDriver"
                value={
                  data.costWithDriver * data.hr +
                  data.hr * data.costPerHour +
                  " ₹"
                }
              ></input>
            </div>

            <div>
              <label className="mt-3">Enter debit/credit card no:</label>
              <input
                className="mt-2 form-control"
                type="text"
                placeholder="Enter debit/credit card no"
                name="cardNo"
                onChange={handleChange}
                value={data.cardNo}
                required
              ></input>
            </div>

            <div>
              <label className="mt-3">card cvv:</label>
              <input
                className="mt-2 form-control"
                type="text"
                placeholder="Enter card cvv"
                name="cvv"
                onChange={handleChange}
                value={data.cvv}
                required
              ></input>
            </div>

            <div
              className=" mt-2 btn btn-primary btn-sm"
              onClick={() => handleClick(data)}
            >
              Pay Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
