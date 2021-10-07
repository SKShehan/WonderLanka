import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ReactSession } from "react-client-session";



import {
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Card,
  Alert,
  Container,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import styles from "../assets/css/Style-signin.module.css";



export default function SignUp(){
  const [country, setCountry]= useState("");
  const [email, setEmail]= useState("");
  const [fullName, setFullName]= useState("");
  const [mobileNo, setMobileNo]= useState("");
  const [username, setUsername]= useState("");
  const [nic, setNic]= useState("");
  const [dateOfBirth, setDateOfBirth]= useState("");
  const [password, setPassword]= useState("");

  function sendData(e){
    e.preventDefault();

    const user={
      
    
    fullName,
    email,
    mobileNo,
    country,
    dateOfBirth,
    nic,
    username,
    password
    
    }
    axios.post("http://localhost:8070/users/add", user).then(()=>{
            alert("SignUp Details Added");
            window.location.reload();
      
          }).catch((err)=>{
            alert(err)
          })
  }
  
  
  return(
    
    <div style={{ width: "100vw" }}>
      <Row>
        <Col xl="8">
          <div className={styles.loginImg}></div>
        </Col>
        <Col>
          <div className={styles.loginForm}>
            <h2><b>SIGN IN</b></h2>
            <br />
           

    <Form style={{ width: "80%" }} onSubmit={sendData}>

     <Label for="fullName"><b>Full Name</b></Label>
     <Input placeholder="Enter Full Name" type="text"
     onChange={(e)=>{
      setFullName(e.target.value);
     }} />

     <Label for="email"><b>Email</b></Label>
     <Input placeholder="Enter Email" type="email"
     title = "Enter a valid email"
     required
     onChange={(e)=>{
      setEmail(e.target.value);
     }} />

     <Label for="mobileNo"><b>Mobile Number</b></Label>
     <Input placeholder="Enter Mobile Number" type="text"
     
     pattern = "[0-9]{10}"
     title = "Enter a 10 digit phone number starting with 0"  required
     onChange={(e)=>{
      setMobileNo(e.target.value);
     }} />

     <Label for="country"><b>Country</b></Label>
     
     
     <Input placeholder="Enter Your country" 
     
     type="text"
     onChange={(e)=>{
      setCountry(e.target.value);
     }} >
       
    </Input> 

     <Label for="dateOfBirth"><b>Date Of Birth</b></Label>
     <Input placeholder="Enter Date Of Birth" type="date"
     onChange={(e)=>{
      setDateOfBirth(e.target.value);
     }} />

     <Label for="nic"><b>NIC</b></Label>
     <Input placeholder="Enter NIC Number" type="text"
     pattern = "[0-9]{9}[V]"
     title = "Enter valid ID number 'xxxxxxxxxV'"  required
     onChange={(e)=>{
      setNic(e.target.value);
     }} />

     <Label for="username"><b>Username</b></Label>
     <Input placeholder="Enter username" type="text"
     onChange={(e)=>{
      setUsername(e.target.value);
     }} />

     <Label for="password"><b>Password</b></Label>
     <Input placeholder="Enter password" type="text"
     
     onChange={(e)=>{
      setPassword(e.target.value);
     }} />



     <br />
     <h9> By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.</h9>

     <center>
       <Button type="submit" className="btn btn-primary">Submit</Button> { }
       
       <Button href="/login" type="submit" className="btn btn-primary">Log IN</Button>
     </center>





    </Form>
    </div>
        </Col>
      </Row>
    </div>

    
    
  )


}
