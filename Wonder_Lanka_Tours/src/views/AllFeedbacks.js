// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

// core components
import {
  Input
} from "reactstrap";

function AllFeedbacks () {
    const [feedbacks, setFeedbacks] = useState([]);
    const [searchVal , setSearchVal] = useState("");
  
    useEffect(() => {
      function getFeedbacks() {
        axios.get("http://localhost:8070/feedback/").then((res) => {
          setFeedbacks(res.data);  
          console.log(res);
        }).catch((err) => {
          alert(err.message);
        })
      }
      getFeedbacks();
    },[]);

    var number = 1;
  
    return (
        <div className = "container">
          <h3 style = {{textAlign:"center"}}>Feedback History</h3>
          <Input placeholder="Search " type="text" 
            onChange = {(e) =>{
              setSearchVal(e.target.value);
          }}/>
              {feedbacks
              .filter((feedback) => {
                let Name = feedback.name;
                if (searchVal === "") {
                  return feedback;
                } else {
                  if (Name) {
                    if (
                      Name.toLowerCase().includes(searchVal.toLowerCase())
                    ) {
                      return feedback;
                    }
                  }
                }
              })
              .map((feedback)=>(
              <div style = {{marginLeft:"20px"}}  className = "tableContainer">
              <table className = "table table-striped">
                <thead>
                </thead>
                <tbody>
                  <div>
                    <th scope = "row">{number++}</th>
                    <th scope = "col"> Name </th>
                    <td>{feedback.name}</td>
                    <th scope = "col"> Satisfactory </th>
                    <td>{feedback.stat}</td>
                    <th scope = "col"> Feedback </th>
                    <td>{feedback.feedback}</td>
                  </div>
                </tbody>
              </table>
              </div>
              ))}    
        </div> 
      )
  }

  export {
    AllFeedbacks
  }
  