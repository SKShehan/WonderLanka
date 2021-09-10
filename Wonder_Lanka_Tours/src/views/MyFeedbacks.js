import React, { useState, useEffect } from "react";
import axios from "axios";

// core components
import {
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/ComplaintHeader.js";
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

export default MyFeedbacks;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MyFeedbackTable () {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    function getFeedbacks() {
      axios.get("http://localhost:").then((res) => {
        console.log(res);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getFeedbacks();
  },[])

  return (
    <>
    <br></br>
      <Title>Feedback History</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Tour ID</TableCell>
            <TableCell>Customer ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Complaint</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.tid}>
              <TableCell>{row.tid}</TableCell>
              <TableCell>{row.cid}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.feedback}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DemoFooter />
      </>
  )
}

export default MyFeedbackTable;