import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../Login.css"
import {  useNavigate } from 'react-router-dom';
import Navbar1 from './Navbar1';
export default function Addwallet() {
  const [id,smid]=useState("");
  const [point,spoint]=useState("");
  const navigate=useNavigate();

           
   
  const login = () => {
    
    axios.post("http://localhost:5000/alter",{
      id: id,
      point:point
    }
  ).then((response) => {
        console.log(response)
        if(response.data=="nope"){
            alert("no user")
        }
        else{
           alert("sucess")
        }
    }).catch((msg)=>{
      console.log(msg)
     
    })
  }

  function handlesubmit(e){
    e.preventDefault();
  }
  
  return (
   <div>
    <Navbar1/>
    <div className="Auth-form-container">
         
    <form className="Auth-form" onSubmit={handlesubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Login</h3>
        <div className="form-group mt-3">
         
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter user id"
            onChange={(e)=>smid(e.target.value)}
            value={id}
          />
        </div>
        <div className="form-group mt-3">
         
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter wallet"
            onChange={(e)=>spoint(e.target.value)}
            value={point}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={login}>
            Update
          </button>
        </div>
       
 
        
      </div>
    </form>
  </div>
  </div>
  );
}


