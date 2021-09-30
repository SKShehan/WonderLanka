// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router";

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

function UpdateComplaint({Complaint}) {
    document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("index");

    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);

  //adding state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [select, setSelect] = useState("");
  const [complaint, setComplaint] = useState("");

  const {id} = useParams();

  useEffect(()=>{
    axios.get(`http://localhost:8070/ComplaintRoute/getComplaint/${id}`)
    .then((res)=>{
      console.log(res.data);
      setName(res.data.name);
      setEmail(res.data.email);
      setContact(res.data.contact);
      setSelect(res.data.select);
      setComplaint(res.data.complaint);

    }).catch((err)=>{
      console.log(err);
    })
  }, []);

  function sendNewData(e){
    e.preventDefault();
    alert("Inserting New Data");

    const updateComplaint = {
      name,
      email,
      contact,
      select,
      complaint
    }

    //console.log(newComplaint);

    axios.put(`http://localhost:8070/ComplaintRoute/updateComplaint/${Complaint.id}`, updateComplaint)
    .then(()=>{
  //    console.log(res);
      Complaint.name = updateComplaint.name;
      Complaint.email = updateComplaint.email;
      Complaint.contact = updateComplaint.contact;
      Complaint.select = updateComplaint.select;
      Complaint.complaint = updateComplaint.complaint;

      toast.success('Complaint Edited!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        e.target.reset();

    }).catch((err)=>{
      alert(err);
      console.log(err);
      toast.error('Something has gone wrong!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })
  };

  return(
    <>
    <IndexNavbar />
      <IndexHeader />
    <div className="container">
      <h3 style = {{marginLeft:"440px"}}>My Complaint</h3>
    <form onSubmit={sendNewData}>
    <FormGroup>
      <Label for="Name">Name</Label>
      <Input type="text" name="name" id="idName" placeholder="A.D. Amarasekara" onChange={(e)=>{
        setName(e.target.value);
      }}/>
    </FormGroup>
    <FormGroup>
      <Label for="Email">Email address</Label>
      <Input type="text" name="email" id="idEmail" placeholder="name@gmail.com" onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      
    </FormGroup>
    <FormGroup>
      <Label for="contact">Contact No</Label>
      <Input type="number" name="contact" id="idContact" placeholder="94 76 564 9534" onChange={(e)=>{
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
    UpdateComplaint
  }