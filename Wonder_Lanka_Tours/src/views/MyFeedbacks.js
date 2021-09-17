import React, { useState, useEffect } from "react";
import axios from "axios";

// core components
import {
  FormGroup,
  Label,
  Input,
  Button,
  Title,
  Table,
  TableRow,
  rows,
  TableCell,
  TableHead,
  TableBody
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader";
import DemoFooter from "components/Footers/DemoFooter.js";
import MyFeedbacks from "./MyFeedbacks";

function MyFeedbacks() {
  let [feedback, setFeedback] = useState(0)
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("index");
    
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  //adding state
  const [stat, setStat] = useState("");
  const [feedback, setFeedback] = useState("");

  function sendFeedbackdata(e){
    e.preventDefault();
    alert("");

    const newFeedback = {
      stat,
      feedback
    }

    console.log(newFeedback);
    axios.post("http://localhost:8070/", newFeedback).then(()=>{
      alert("Feedback Added");
      setStat("");
      setFeedback("");
    }).catch((err)=>{
      alert(err);
    })
  }

  return (
    <>
      <h3>My Feedbacks</h3>
      <IndexNavbar />
      <IndexHeader />
      <div className="mainFeedback">
      <form onSubmit={sendFeedbackdata}>

      <FormGroup>
        <h2 style={{textAlign:"center"}}>We value your feedback</h2><br></br>
        <p style={{textAlign:"center"}}>Please complete the following form and help us improve our customer experience</p>
      </FormGroup>
      <FormGroup>
      <div id="satisfactor" >
        <input type="radio" value="vsatis" name="VerySatisfied" onChange={(e)=>{
          setStat(e.target.value);
        }}/> Very Satisfied
        <input type="radio" value="satis" name="Satisfied" onChange={(e)=>{
          setStat(e.target.value);
        }}/> Satisfied
        <input type="radio" value="neu" name="Neutral" onChange={(e)=>{
          setStat(e.target.value);
        }}/> Neutral
        <input type="radio" value="unsatis" name="Unsatisfied" onChange={(e)=>{
          setStat(e.target.value);
        }}/> Unsatisfied
      </div>
      </FormGroup>
      <FormGroup>
      <Label for="feedback">Give us your feedback here</Label>
        <Input type="feedback" name="feedback" id="feedbackContent" placeholder="type here" onChange={(e)=>{
          setFeedback(e.target.value);
        }}/>  
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>

      </form>
      
      </div>
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MyFeedbackTable () {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    function getFeedbacks() {
      axios.get("http://localhost:8070/MyFeedbacks").then((res) => {
        console.log(res);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getFeedbacks();
  },[])

  return (

    <div>
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
  )
}

export{
  MyFeedbacks,
  MyFeedbackTable
} ;