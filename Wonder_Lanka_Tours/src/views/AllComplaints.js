// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import { useHistory, useParams } from "react-router-dom";
import { ReactSession } from "react-client-session";

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
    
    const complaintDelete = (del) => {

      if (
        window.confirm(
          "Complaint " + del.id + " will be removed from the database"
        )
      )

      axios.delete(`http://localhost:8070/complaint/deleteComplaint/${
       del._id}`
      )
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
              {complaints
                .filter((complaint) => {
                  let Name = complaint.name;
                  if (searchVal === "") {
                    return complaint;
                  } else {
                    if (Name) {
                      if (
                        Name.toLowerCase().includes(searchVal.toLowerCase())
                      ) {
                        return complaint;
                      }
                    }
                  }
                })
              .map((complaint)=>(
              <div style = {{marginLeft:"20px"}}  className = "tableContainer">
              <table className = "table table-striped">
                <thead>
                <th scope = "col"> No </th>
                    <th scope = "col"> Name </th>
                    <th scope = "col"> Email </th>
                    <th scope = "col"> Contact </th>
                    <th scope = "col"> Reason </th>
                    <th scope = "col"> Complaint </th>
                    <th scope = "col"> Date </th>
                    <th scope = "col"> Action </th>
                </thead>
                <tbody>
                  
                    <tr>
                    <th scope = "row">{number++}</th>
                    
                    <td>{complaint.name}</td>
                    
                    <td>{complaint.email}</td>
                    
                    <td>{complaint.contact}</td>
                    
                    <td>{complaint.select}</td>
                    
                    <td>{complaint.complaint}</td>

                    <td>{complaint.date}</td>

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
                        </tr>
                  
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