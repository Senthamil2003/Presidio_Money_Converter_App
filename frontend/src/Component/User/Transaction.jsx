import React, { useEffect, useState } from 'react'
import Navbar2 from './Navbar2'
import axios from "axios";
export default function Transaction() {
    let id=localStorage.getItem("id");
    const [data,sdata]=useState()
    useEffect(()=>{
        axios.post("http://localhost:5000/trans",{
          id:id
          }
        ).then((response) => { 
              console.log(response.data[0][0])
             sdata(response.data[0])
              
          }).catch((msg)=>{
            console.log(msg)
          })

    },[])
    console.log(data)
  return ( 
    <div>
        <Navbar2/>
        {
            data&& data.map((item,i)=>{
                return <div>
                    <p>{i+1+". "+ item.item}</p>
                    <p>{item.rate}</p>
                    <hr></hr>
                    </div>
            })
        }

    </div>
  )
}
