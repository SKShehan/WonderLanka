import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader";
import DemoFooter from "components/Footers/DemoFooter.js";

function updateComplaints() {
  document.documentElement.classList.remove("nav-open");

  React.useEffect(() => {
    document.body.classList.add("index");

    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  const {handleSubmit, register} = useForm();

  //adding state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [select, setSelect] = useState("");
  const [text, setText] = useState("");



    return (
        <>
          <h3>My Complaints</h3>
          <IndexNavbar />
          <IndexHeader />
    
          <div className="updateComlplaint">
          <form onSubmit={sendData, handleSubmit(onSubmit)}>
    
          <FormGroup>
            <Label for="Name">Name</Label>
            <Input type="name" name="name" id="idName" placeholder="A.D. Amarasekara" onChange={(e)=>{
              setName(e.target.value);
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="Email">Email address</Label>
            <Input type="email" name="email" id="idEmail" placeholder="name@gmail.com" ref={register({
          required: "Email is Required.", 
          pattern: { 
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            message: "Please enter a valid email",
          },
        })}  onChange={(e)=>{
              setEmail(e.target.value);
            }}/>
            {errors?.email && <ErrorMessage message={errors.email,message}/>}
          </FormGroup>
          <FormGroup>
            <Label for="contact">Contact No</Label>
            <Input type="contact" name="contact" id="idContact" placeholder="(+94) 555-555-555" ref={register({
              pattern: {
                value:"[0-9]{10}"
              }
            })} onChange={(e)=>{
              setContact(e.target.value);
            }}/>
          </FormGroup>
          <FormGroup>
            <Label for="typeSelect">Type of complaint</Label>
            <Input type="select" name="select" id="typeSelect" onChange={(e)=>{
              setSelect(e.target.value);
            }}>
              <option>There's no free WI-FI in my room?</option>
              <option>Here's no free Hot water in my room?</option>
              <option>The attitudes and behaviours of your staff are unacceptable</option>
              <option>I cancelled my hotel room booking just before i was supposed to check in. Why can't i get my money back?</option>
              <option>That's not what it says (or looks like) on your website.</option>
              <option>There's problem with the vehicle we hired.</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Any other custom complaint</Label>
            <Input type="textarea" name="text" id="idText" onChange={(e)=>{
              setText(e.target.value);
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

export default updateComplaints;

