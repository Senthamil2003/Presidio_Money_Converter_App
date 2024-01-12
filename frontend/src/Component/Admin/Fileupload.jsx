import React, { useState } from 'react';
import axios from "axios";
export default function Fileupload() {
  const [inr, sinr] = useState("");
  const [wallet, setwallet] = useState("");
  
  const submit=()=>{
    axios.post("http://localhost:5000/add",{
      inr:inr,
      wallet:wallet
      
    }
  ).then((response) => {
     
      console.log(response.data)
  
      
  }).catch((msg)=>{
    
      console.log(msg);
  });

  }
  console.log(inr,wallet)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileContent = e.target.result;
      
        try {
          const jsonData = JSON.parse(fileContent);
          sinr(jsonData.ind)
          setwallet(jsonData.wallet);
         
        } catch (error) {
          console.error('Error parsing JSON:', error);
       
          
      
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <br></br>
      <input type='button' onClick={submit} value="submit"/>
    </div>
  );
}

