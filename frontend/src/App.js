import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserNav from "./components/UserNav";
import OwnerNav from "./components/OwnerNav";
import Ohome from "./pages/owner/Ohome";
import OLogin from "./pages/login/OLogin";
import ULogin from "./pages/login/ULogin";
import MyBooking from "./pages/user/MyBooking";
import Urequested from "./pages/user/Urequested";
import Homepage from "./components/Homepage";
import Requests from "./pages/owner/Requests";
import Uaccepted from "./pages/user/Uaccepted";
import Oaccepted from "./pages/owner/Oaccepted";
import OwnerRegister from "./pages/register/OwnerRegister";
import UserRegister from "./pages/register/UserRegister";
import Obooking from "./pages/owner/Obooking";
import EditVehicle from "./pages/owner/EditVehicle";
import Driver from "./pages/owner/Driver";
import Location from "./components/UpdateLocation";
import Payment from "./pages/user/Payment";
import Ask from "./pages/user/Ask";
import NoDriver from "./pages/owner/NoDriver";
import OacceptedNoDriver from "./pages/owner/OacceptedNoDriver";
import AddVPhoto from "./pages/owner/AddVPhoto";
import UacceptedNoDriver from "./pages/user/UacceptedNoDriver";
import Mybooking2 from "./pages/user/MyBooking2";
import PaymentNoDriver from "./pages/user/PaymentNoDriver";
import Vehicles from "./pages/user/Vehicles";
import BeforeRequest from "./pages/user/BeforeRequest";
import Ask2 from "./pages/user/Ask2";
import UNoDriver from "./pages/user/UNoDriver";
import UDetails from "./pages/user/Udetails";







function App() {
  return (
    <div className="App">
      <ToastContainer />

      <Router>
        <Routes>
          <Route exct path="/" element={<Homepage />} />

          <Route exact path="/oreg" element={<OwnerRegister />} />
          <Route exact path="/ureg" element={<UserRegister />} />

          <Route exact path="/usernavbar" element={<UserNav />} />
          <Route exact path="/ownernavbar" element={<OwnerNav />} />

          <Route exact path="/ulogin" element={<ULogin />} />
          <Route exact path="/ologin" element={<OLogin />} />
       

         
            <Route exact path="/addvphoto" element={<AddVPhoto/>} />
     
     
            <Route exact path="/requests" element={<Requests />} />
    
      
        
            <Route exact path="/ohome" element={<Ohome />} />
      
      
            <Route exact path="/obookings" element={<Obooking />} />
       

            <Route exact path="/location" element={<Location />} />
   
       
            <Route exact path="/driver/:id" element={<Driver/>} />
      
            <Route exact path="/nodriver/:id" element={<NoDriver/>} />
      
            <Route exact path="/oacceptednodriver" element={<OacceptedNoDriver/>} />
     
            <Route exact path="/oaccepted" element={<Oaccepted />} />
   
            <Route exact path="/ask/:id" element={<Ask/>} />
      
         

            <Route exact path="/beforerequest" element={<BeforeRequest/>} />
      
     
            <Route exact path="/asknodriver/:id" element={<Ask2/>} />
       

 
            <Route exact path="/editV/:id" element={<EditVehicle/>} />
      
 
          
            <Route exact path="/uaccepted" element={<Uaccepted />} />
       
    
            <Route exact path="/uacceptednodriver" element={<UacceptedNoDriver />} />

          
       
            <Route exact path="/urequested" element={<Urequested />} />
    
            <Route exact path="/ubookings" element={<MyBooking />} />
     
        
            <Route exact path="/ubookingsnodriver" element={<Mybooking2 />} />
       
         

       
            <Route exact path="/paynodriver/:id" element={<PaymentNoDriver/>} />
      
     
            <Route exact path="/pay/:id" element={<Payment/>} />
        

  
            <Route exact path="/uhome" element={<Vehicles/>} />
       
          <Route exact path="/unodriver" element={<UNoDriver/>} />
          <Route exact path="/ubookingdetails/:id" element={<UDetails/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
