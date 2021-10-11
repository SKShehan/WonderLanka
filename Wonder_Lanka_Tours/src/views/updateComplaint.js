// reactstrap components
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router";
import { useHistory } from "react-router";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

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

    let history = useHistory();
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
  const [date, setDate] = useState(new Date());

  const [isError, setIsError] = useState(false);

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
      setDate(res.data.date);

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
      complaint,
      date
    };

    //console.log(newComplaint);

    axios.put(`http://localhost:8070/complaint/updateComplaint/${id}`, updateComplaint)
    .then((res)=>{
    console.log(res);
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
        history.push("/my-complaint");

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
      <h3 style = {{marginLeft:"440px"}}>Edit Complaint</h3>
    <form onSubmit={sendNewData}>
    <FormGroup>
      <Label for="Name">Name</Label>
      <Input type="text" name="name" id="idName" placeholder="" onChange={(e)=>{
        setName(e.target.value);
      }}/>
    </FormGroup>
    <FormGroup>
      <Label for="Email">Email address</Label>
      <Input type="text" name="email" id="idEmail" placeholder="" onChange={(e)=>{
        setEmail(e.target.value);
      }}/>
      
    </FormGroup>
    <FormGroup>
      <Label for="date">Contact Number</Label>
      <br></br>
        <PhoneInput type="tel" name="contact" id="idContact" placeholder="Enter phone number" value={contact} onChange=
          {setContact}
        />
      </FormGroup>
    <FormGroup>
      <Label for="date">Date</Label>
        <DatePicker selected={date} onChange={(date) => {
          setDate(date);
        }} />
      </FormGroup>
    <FormGroup>
      <Label for="typeSelect">Type of complaint</Label>
      <Input type="text" name="select" id="typeSelect" placeholder="About tour" onChange={(e)=>{
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
      <Input type="text" name="complaint" id="idText" placeholder="Vehicle Issues" onChange={(e)=>{
        setComplaint(e.target.value);
      }}/>
    </FormGroup>
    <Button color="primary" type="submit">
      Update
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