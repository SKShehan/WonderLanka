// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import validator from 'validator';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// core components
import {
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

toast.configure();
function ContactUS () {
    document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("index");

    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);


  const [emailError, setEmailError] = useState('');

  const validateEmail = (e) => {
    var email = e.target.value;
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email');
    } else {
      setEmailError('Enter valid Email!');
    }
  }

  //adding state
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  function sendData(e){
    e.preventDefault();

    const newMessage = {
      fname,
      lname,
      email,
      contact,
      message
    }

    console.log(newMessage);

    axios.post("http://localhost:8070/contactus/addMessage", newMessage).then(()=>{
      alert("Message Sent")
      setfName("");
      setlName("");
      setEmail("");
      setContact("");
      setMessage("");

    }).catch((err)=>{
      alert(err);
    })
  }

  return (
    <>
    <IndexNavbar />
      <IndexHeader />
      <div className="container">
        <h3 style = {{marginLeft:"440px"}}>Contact Us</h3>
      <form onSubmit={sendData}>
      <FormGroup>
        <Label for="Name">First Name</Label>
        <Input type="text" name="fname" id="idfName" placeholder="Amaya" onChange={(e)=>{
          setfName(e.target.value);
        }}/>
        <Label for="Name">Last Name</Label>
        <Input type="text" name="lname" id="idlName" placeholder="Amarasekara" onChange={(e)=>{
          setlName(e.target.value);
        }}/>
      </FormGroup>
      <FormGroup>
        <Label for="Email">Email address</Label>
        <Input type="text" name="email" id="idEmail" placeholder="name@gmail.com" onChange={(e)=>{
          validateEmail(e);
          setEmail(e.target.value);
        }}></Input>
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
      </FormGroup>
      <FormGroup>
        <Label for="contact">Contact No</Label>
        <Input type="number" name="contact" id="idContact" placeholder="94 76 564 9534" onChange={(e)=>{
          setContact(e.target.value);
        }}/>
      </FormGroup>
      <FormGroup>
        <Label for="message">Message</Label>
        <Input type="text" name="complaint" id="idText" onChange={(e)=>{
          setMessage(e.target.value);
        }}/>
      </FormGroup>
      <Button color="primary" type="submit">
        Send
      </Button>
      </form>
      </div>
      <DemoFooter /> 
    </>
  )

}

export {
    ContactUS
}
