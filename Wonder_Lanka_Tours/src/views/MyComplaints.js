// reactstrap components
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

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader";
import DemoFooter from "components/Footers/DemoFooter.js";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
toast.configure(); 
function MyComplaints() {
  /*const [complaint, setComplaint] = useState([])
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    axios
      .get("http://localhost:8070/ComplaintRoute")
      .then((res) => {
        setComplaint(res.data);
        console.log(res.data);
      }).catch((err)=>{
        console.log(err);
    })
    document.body.classList.add("index");

    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);*/

  const {handleSubmit, register} = useForm();

  //adding state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [select, setSelect] = useState("");
  const [complaint, setComplaint] = useState("");

  function sendData(e){
    e.preventDefault();
    alert("Insert");

    const newComplaint = {
      name,
      email,
      contact,
      select,
      complaint
    }

    console.log(newComplaint);

    axios.post("http://localhost:8070/complaint/addComplaint", newComplaint).then(()=>{
      alert("Complaint Added")
      setName("");
      setEmail("");
      setContact("");
      setSelect("");
      setComplaint("");

    }).catch((err)=>{
      alert(err);
    })

  }

  
  return (
    <>
      <h3>My Complaints</h3>
      <IndexNavbar />
      <IndexHeader />

      <div className="container">
      <form onSubmit={sendData}>
      <FormGroup>
        <Label for="Name">Name</Label>
        <Input type="text" name="name" id="idName" placeholder="A.D. Amarasekara" onChange={(e)=>{
          setName(e.target.value);
        }}/>
      </FormGroup>
      <FormGroup>
        <Label for="Email">Email address</Label>
        <Input type="text" name="email" id="idEmail" placeholder="name@gmail.com" ref={register({
          required: "Email is Required.", 
          pattern: { 
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: "Please enter a valid email",
          },
        })} onChange={(e)=>{
          setEmail(e.target.value);
        }}/>
        
      </FormGroup>
      <FormGroup>
        <Label for="contact">Contact No</Label>
        <Input type="number" name="contact" id="idContact" placeholder="(+94) 555-555-555" ref={register({
          pattern: {
            value:"[0-9]{10}"
          }
        })} onChange={(e)=>{
          setContact(e.target.value);
        }}/>
      </FormGroup>
      <FormGroup>
        <Label for="typeSelect">Type of complaint</Label>
        <Input type="text" name="select" id="typeSelect" onChange={(e)=>{
          setSelect(e.target.value);
        }}>
          <option>There's no free WI-FI in my room?</option>
          <option>here's no free Hot water in my room?</option>
          <option>The attitudes and behaviours of your staff are unacceptable</option>
          <option>I cancelled my hotel room booking just before i was supposed to check in. Why can't i get my money back?</option>
          <option>That's not what it says (or looks like) on your website.</option>
          <option>There's problem with the vehicle we hired.</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Any other custom complaint</Label>
        <Input type="text" name="complaint" id="idText" onChange={(e)=>{
          setComplaint(e.target.value);
        }}/>
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
      </form>
      </div>
      <DemoFooter />
    </>
  )
}

export {
  MyComplaints
}

