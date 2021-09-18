// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

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
          alert(err.message);
        })
      }
      getComplaints();
    },[])

    const updateComplaint = (id) => {
      axios.put("http://localhost:8070/complaint/updateComplaint", {

        });
    };

    
    function complaintDelete(id)  {
      axios.delete(`http://localhost:8070/deleteComplaint/${id}`).then((res) =>{
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
                            <a href="/updateComplaints.js">Link</a>
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
      
        /*<div className="container">
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
                  <th scope = "col">Name</th>
                  <th scope = "col">Email</th>
                  <th scope = "col">Contact</th>
                  <th scope = "col">Reason</th>
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
                  
                  })complaint.map((complaint) =>(
                      
                      <tr>
                        <th scope = "row">{number++}</th>
                        <td>{complaints.tourId}</td>
                        <td>{complaints.customerID}</td>
                        <td>{complaints.date}</td>
                        <td>{complaints.customercomplaint}</td>
    
    
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
        </div>*/
      )
                      
  }
  
  export {
    AllComplaints
  }