import Moment from "react-moment";
import { useEffect, useState } from "react";
import axios from "axios"

export default function Admin() {
  const[details,setDetails]=useState([]);

  useEffect(() => {
    axios.get('https://cangeo.herokuapp.com/api/v1/lead/get')
        .then(response =>{
          setDetails(response.data)
          
      
        });
  }, []);

  return (
    <>
        {
          details.map((detail) =>{
            return(<div key={detail._id}>
              <Moment format="MMMM Do YYYY">{detail.createdAt}</Moment>
                <h1>{detail.name}</h1>
                <h1>{detail.email}</h1>
                <h1>{detail.message}</h1>
                <h1>{detail.phone}</h1>
              <br/>
            </div>)
          })
        }
  
     
      </>
  );
}
