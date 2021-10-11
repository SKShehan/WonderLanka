// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import validator from 'validator';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { AllComplaints } from "./AllComplaints";



// core components
import {
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
toast.configure(); 
function MyComplaints() {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("index");

    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);

  const {handleSubmit, register} = useForm();
  const [emailError, setEmailError] = useState('');
  const [isError, setIsError] = useState(false);

  const validateEmail = (e) => {
    var email = e.target.value;
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email');
    } else {
      setEmailError('Enter valid Email!');
    }
  }

  //adding state

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [select, setSelect] = useState("");
  const [complaint, setComplaint] = useState("");
  const [date, setDate] = useState(new Date());

  function sendData(e){
    e.preventDefault();

    const newComplaint = {

      name,
      email,
      contact,
      select,
      complaint,
      date
    }

    console.log(newComplaint);

    axios.post("http://localhost:8070/complaint/addComplaint", newComplaint).then(()=>{
      alert("Complaint Added");
      setName("");
      setEmail("");
      setContact("");
      setSelect("");
      setComplaint("");
      setDate("");

    }).catch((err)=>{
      alert(err);
    })

  }
  

  return (
    <>
    <IndexNavbar />
      <IndexHeader />
      <div className="container">
        <h3 style = {{marginLeft:"440px"}}><b>My Complaint</b></h3>
      <form onSubmit={sendData}>
      <FormGroup>
        <Label for="Name">Name</Label>
        <Input type="text" name="name" id="idName" placeholder="John Cena" onChange={(e)=>{
          setName(e.target.value);
        }}required/>
      </FormGroup>
      <FormGroup>
        <Label for="Email">Email address</Label>
        <Input type="text" name="email" id="idEmail" pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="john@gmail.com" onChange={(e)=>{
          validateEmail(e);
          setEmail(e.target.value);
        }}required></Input>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
      </FormGroup>
      <FormGroup>
      <Label for="date">Contact Number</Label>
      <br></br>
        <PhoneInput type="tel" name="contact" id="idContact" placeholder="Enter phone number"
        rules={{ required: true }} error={isError}  value={contact} 
        onChange = {setContact}
        required/>
      </FormGroup>
      <FormGroup>
      <Label for="date">Date</Label>
        <DatePicker selected={date} onChange={(date) => {
          setDate(date);
        }}  required/>
      </FormGroup>
      <FormGroup>
        <Label for="typeSelect">Type of complaint</Label>
        <Input type="text" name="select" id="typeSelect" placeholder="About tour" onChange={(e)=>{
          setSelect(e.target.value);
        }}required>
          <option>There's no free WI-FI in my room?</option>
          <option>here's no free Hot water in my room?</option>
          <option>The attitudes and behaviours of your staff are unacceptable</option>
          <option>I cancelled my hotel room booking just before i was supposed to check in. Why can't i get my money back?</option>
          <option>That's not what it says (or looks like) on your website.</option>
          <option>There's problem with the vehicle we hired.</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Custom complaints</Label>
        <Input type="text" name="complaint" id="idText" placeholder="Vehicle Issues" onChange={(e)=>{
          setComplaint(e.target.value);
        }}required/>
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
      </form>
      <AllComplaints/>
      </div>
      <DemoFooter /> 
    </>
  )
}

export {
  MyComplaints
}

