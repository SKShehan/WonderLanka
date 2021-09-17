// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// core components
import {
  Input,
  Button
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader";
import DemoFooter from "components/Footers/DemoFooter.js";

function AllComplaints () {
    const [complaints, setComplaints] = useState([]);
    const [searchVal , setSearchVal] = useState("");

    const updateComplaints = (id) => {

    }
  
    useEffect(() => {
      function getComplaints() {
        axios.get("http://localhost:8070/complaint").then((res) => {
          setComplaints(res.data);
          console.log(res);
        }).catch((err) => {
          alert(err.message);
        })
      }
      getComplaints();
    },[])
  
    function complaintDelete(complaint)  {
      if (
          window.confirm(
            "Complaint " + complaint.tourId + " will be removed from the database"
          )
      )
      axios.delete(`http://localhost:8070/complaint/deleteComplaint/${complaint._id}`).then((res) =>{
          console.log(res);
          
          toast.error('Complaint Deleted!', {
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
      })
    }
  
    var number = 1;
  
    return (
    
      <div className="container">
        <IndexNavbar />
        <IndexHeader />
        <h3>Complaint History</h3>
        <Input placeholder="Search " type="text" 
          onChange = {(e) =>{
            setSearchVal(e.target.value);
        }}/>
        <div style = {{marginLeft:"20px"}}  className = "tableContainer">
          <table className = "table table-striped">
            <thead>
                <th scope = "col">#</th>
                <th scope = "col">Tour ID</th>
                <th scope = "col">Customer ID</th>
                <th scope = "col">Date</th>
                <th scope = "col">Complaint</th>
  
            </thead>
  
            <tbody>
                
                {complaints.filter((val) =>{
                  
                  if(searchVal === ''){
                    return val;
                  }
                  else if (val.tourId.toLowerCase().includes(searchVal.toLowerCase())){
                    return val;
                  }
                
                }).map((complaint) =>(
                    
                    <tr>
                      <th scope = "row">{number++}</th>
                      <td>{complaint.tourId}</td>
                      <td>{complaint.customerID}</td>
                      <td>{complaint.date}</td>
                      <td>{complaint.customercomplaint}</td>
  
  
                      <td><Button color="warning"  style = {{padding: "5px 5px 5px 5px" , width : "80px" , marginBottom : "8px"}}
                        onClick = {()=>{
                            //push(`/edit-complaint/${complaint._id}`);
                            
                        }}
                        >Edit</Button>
  
                        <Button color="danger" style = {{padding: "5px 5px 5px 5px", width : "80px"}}
                        onClick = {() =>{
                            
                            complaintDelete(complaint);
                        }}
                      
                        >Remove</Button>
                      </td>
  
                    </tr>
  
                ))}
            </tbody>    
          </table>
          <DemoFooter />
        </div>
      </div>
    );
  }
  
  export {
    AllComplaints
  }