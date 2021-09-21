import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { AllFeedbacks } from "./AllFeedbacks";

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

  const {handleSubmit, register} = useForm();

  //adding state
  const [name, setName] = useState("");
  const [stat, setStat] = useState("");
  const [feedback, setFeedback] = useState("");

  function sendData(e){
    e.preventDefault();

    const newFeedback = {
      name,
      stat,
      feedback
    }

    console.log(newFeedback);
    axios.post("http://localhost:8070/feedback/addFeedback", newFeedback).then(()=>{
      alert("Feedback Added");
      setName("");
      setStat("");
      setFeedback("");
    }).catch((err)=>{
      alert(err);
    })
  }

  return (
    <>
    <IndexNavbar />
      <IndexHeader />
    <div className="container">
    
      <form onSubmit={sendData}>

        <FormGroup>
          <h2 style={{textAlign:"center"}}>We value your feedback</h2><br></br>
          <p style={{textAlign:"center"}}>Please complete the following form and help us improve our customer experience</p>
        </FormGroup>
        <FormGroup>
        <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="A.D Kure" onChange={(e)=>{
            setName(e.target.value);
          }}/>  
        </FormGroup>
        <FormGroup>
        <div id="satisfactor" >
          
          Very Satisfied <input type="text" value="" placeholder="Yes" name="VerySatisfied" onChange={(e)=>{
            setStat(e.target.value);
          }}/> 
          Satisfied <input type="text" value="" name="Satisfied" onChange={(e)=>{
            setStat(e.target.value);
          }}/> 
          Neutral <input type="text" value="" name="Neutral" onChange={(e)=>{
            setStat(e.target.value);
          }}/> 
          Unsatisfied <input type="text" value="" name="Unsatisfied" onChange={(e)=>{
            setStat(e.target.value);
          }}/> 
        </div>
        </FormGroup>
        <FormGroup>
        <Label for="feedback">Give us your feedback here</Label>
          <Input type="text" name="feedback" id="feedbackContent" placeholder="type here" onChange={(e)=>{
            setFeedback(e.target.value);
          }}/>  
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </form>
      <AllFeedbacks/>
    </div>
    <DemoFooter /> 
    </>
  )
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export{
  MyFeedbacks
}