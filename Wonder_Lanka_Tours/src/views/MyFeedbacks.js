import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// core components
import {
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

toast.configure(); 
function MyFeedbacks() {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("index");
    
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);

  //adding state
  const [stat, setStat] = useState("");
  const [feedback, setFeedback] = useState("");

  function sendData(e){
    e.preventDefault();

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
    <div className="container">
    
      <form onSubmit={sendData}>

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


export{
  MyFeedbacks
}