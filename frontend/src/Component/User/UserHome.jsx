import React, { useEffect, useState } from 'react'
import Navbar2 from './Navbar2'
import axios from "axios";
export default function UserHome() {
    let id=localStorage.getItem("id");
    console.log(id)
    const [am,sam]=useState(0);
    const [inr,sinr]=useState(0);
    const [wallet,swallet]=useState(0);
    useEffect(()=>{
        axios.post("http://localhost:5000/retrive",{
          id:id
          }
        ).then((response) => {
              console.log(response.data[0][0].wallet)
              sam(response.data[0][0].wallet)
              
          }).catch((msg)=>{
            console.log(msg)
          })

    },[])
    useEffect(()=>{
        axios.post("http://localhost:5000/current",{
          id:id
          }
        ).then((response) => {
              console.log(response.data[0][0].innr)
              sinr(response.data[0][0].innr)
              swallet(response.data[0][0].wallet)
              
          }).catch((msg)=>{
            console.log(msg)
          })

    },[])
    let data=[
        {
            item:"ring",
            rate:"1"
        },
        {
            item:"bat",
            rate:"2"
        },
        {
            item:"ball",
            rate:"3"
        },
        {
            item:"bird",
            rate:"1"
        },
        {
            item:"pigion",
            rate:"3"
        }

    ]
    const Buy = (e) => {
        let id1=e.target.id;
        axios.post("http://localhost:5000/buy",{
            update:(am-Number(data[id1].rate)),
            id:id,
            item:data[id1].item,
            rate:data[id1].rate
         
        }
      ).then((response) => {
          
        }).catch((msg)=>{
          console.log(msg)
         
        })
      }
    
  return (
    <div>
        <Navbar2/>
        <p>Current amount {am}</p>
    
        {
            data.map((item,i)=>{
                return <div>
                    <p>{item.item}</p>
                    <p>{item.rate}</p>
                    <button id={i} onClick={Buy}  >Buy</button>
                    <hr></hr>
                    </div>
            })
        }
    </div>
  )
}
