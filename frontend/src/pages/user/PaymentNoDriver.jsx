import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import UserNav from "../../components/UserNav";

const PaymentNoDriver = () => {
  const [data, setData] = useState({
    costPerHour: "",
    costWithDriver: "",
    amount: "",
    hr: "",
    cardNumber: "",
    cvv: "",
  });

  const navigate = useNavigate();
  const [errorMeg, setErrorMeg] = useState({});

  const { mail } = useParams();
  const usermail = localStorage.getItem("user");

  const { id } = useParams();

  const getVehicle = async () => {
    await axios.get(`http://localhost:8080/acceptNoDr/${id}`)
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

  const validate = (values) => {
    const errors = {};
    const numberRegex = /^[0-9]\d{0,9}(\.\d{1,3})?%?$/;
    //cvv length must be 3 digit
    const cvvRegex1 = /^[0-9]\d{2}(\.\d{1,3})?%?$/;

    if (!values.quantity) {
      errors.quantity = "Please enter item quantity!";
    }

    if (!values.cvv) {
      errors.cvv = "Please enter cvv !";
    } else if (!numberRegex.test(values.cvv)) {
      errors.cvv = "Please enter digits only for cvv !";
    } else if (!cvvRegex1.test(values.cvv)) {
      errors.cvv = "Please enter cvv exact 3 digits!";
    }
    if (!values.cardNumber) {
      errors.cardNumber = "Please Enter card number !";
    } else if (values.cardNumber.length !== 16) {
      errors.cardNumber = "Please enter card number exactly 16 digits  !";
    }

    if (!values.expiryDate) {
      errors.expiryDate = "Please select expiry date!";
    }

    return errors;
  };

  const handleClick = async (data) => {
    // let d = new Date().getDate();
    // let m = new Date().getMonth();
    // let y = new Date().getFullYear();
    // let t = new Date().getHours();
    // let t1 = new Date().getMinutes();

    // var bDate = d + "/" + m + "/" + y + " " + t + ":" + t1;
    // data.bookingDate = bDate;

    // var totalAmount1 = data.quantity * data.price;
    // data.totalAmount = totalAmount1;
    // if (totalAmount1 === 0) {
    //   alert("Please select quantity !");
    // } else {
    try {
      // const errors = setErrorMeg(validate(data));
      // setIsPaid(true);

      // if (Object.keys(errors).length === 0 && isPaid) {

      var totalAmount1 = data.hr * data.costPerHour;
      data.amount = totalAmount1;
      data.userMail = usermail;
      axios.post(`http://localhost:8080/booking`, data);
      alert(`Are you sure to pay ${data.hr * data.costPerHour} ₹  ?`);
      alert(`Paid ${data.hr * data.costPerHour} ₹ Successfully !`);
      navigate(`/ubookings`);
      window.location.assign(`/ubookings`);
      // }
    } catch (err) {
      console.log(err);
    }
    // }
  };

  console.log(data.costPerHour,"₹")
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
              <label className="mt-3">
                <b>Total Amount :</b>
              </label>
              <input
                className="mt-2 form-control"
                type="text"
                name="costWithDriver"
                value={data.hr * data.costPerHour + " ₹"}
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

export default PaymentNoDriver;
