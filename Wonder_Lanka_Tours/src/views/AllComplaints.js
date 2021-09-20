// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

// core components
import {
  Input,
  Button
} from "reactstrap";

function AllComplaints () {
    const [complaints, setComplaints] = useState([]);
    const [searchVal , setSearchVal] = useState("");
  
    useEffect(() => {
      function getComplaints() {
        axios.get("http://localhost:8070/complaint/").then((res) => {
          setComplaints(res.data);
          console.log(res);
        }).catch((err) => {
          alert("Something went wrong :(");
          alert(err.message);
        });
      };
      getComplaints();
    },[]);

    let history = useHistory();

    
    const complaintDelete = (complaint) => {
      
      if (
        window.confirm(
          "Complaint " +
            complaint.tourID +
            " (" +
            complaint.name +
            " " +
            complaint.email +
            ") " +
            "will be removed from the database"
        )
      )

      axios.delete(`http://localhost:8070/ComplaintRoute/deleteComplaint/${complaint.tourID}`)
      .then((res) =>{
          console.log(res);
          toast.success("Complaint Deleted!", {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
          
      }).catch((err) =>{
          console.log(err);
          alert(err);
          toast.error("Something went wrong :(", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 10000,
            hideProgressBar: false,
          });
      });
    }
  
    var number = 1;

      return (
        <div className = "container">
          <h3 style = {{marginLeft:"430px"}}>Complaint History</h3>
          <Input placeholder="Search " type="text" 
            onChange = {(e) =>{
              setSearchVal(e.target.value);
          }}/>
              {complaints.map((complaint)=>(
              <div style = {{marginLeft:"20px"}}  className = "tableContainer">
              <table className = "table table-striped">
                <thead>
                </thead>
                <tbody>
                  <div>
                    <th scope = "row">{number++}</th>
                    <th scope = "col"> Name </th>
                    <td>{complaint.name}</td>
                    <th scope = "col"> Email </th>
                    <td>{complaint.email}</td>
                    <th scope = "col"> Contact </th>
                    <td>{complaint.contact}</td>
                    <th scope = "col"> Reason </th>
                    <td>{complaint.select}</td>
                    <th scope = "col"> Complaint </th>
                    <td>{complaint.complaint}</td>
                    <td><Button color="warning"  style = {{padding: "5px 5px 5px 5px" , width : "60px" , marginBottom : "8px"}}
                          onClick = {()=>{
                            history.push(`/update-complaint/${complaint._id}`);
                          }}
                          >Edit</Button>
    
                          <Button color="danger" style = {{padding: "5px 5px 5px 5px", width : "70px", marginBottom : "8px"}}
                          onClick = {() =>
                                complaintDelete(complaint._id)
                          }
                        
                          >Remove</Button>
                        </td>
                  </div>
                </tbody>
              </table>
              </div>
              ))}    
        </div> 
      )
                      
  }
  
  export {
    AllComplaints
  }