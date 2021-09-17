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

    axios.post("http://localhost:8070/ComplaintRoute/addComplaint", newComplaint).then(()=>{
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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function MyComplaintsTable () {
  const [complaints, setComplaint] = useState([]);
  const [searchVal , setSearchVal] = useState("");


  useEffect(() => {
    function getComplaints() {
      axios.get("http://localhost:8070/ComplaintRoute/getComplaint").then((res) => {
        setComplaint(res.data);
        console.log(res);
      }).catch((err) => {
        alert(err.message);
      })
    }
    getComplaints();
  },[])

  function complaintDelete(complaint)  {
    if (
        window.confirm(
          "Complaint " + complaint.tourId + " will be removed from the database"
        )
    )
    axios.delete(`http://localhost:8070/ComplaintRoute/deleteComplaint/${complaint._id}`).then((res) =>{
        console.log(res);
        
        toast.error('Complaint Deleted!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        
    }).catch((err) =>{
        console.log(err);
        alert(err);
    })
  }

  var number = 1;

  return (

    <div>
      <Input placeholder="Search " type="text" 
        onChange = {(e) =>{
          setSearchVal(e.target.value);
      }}/>
      <div style = {{marginLeft:"20px"}}  className = "tableContainer">
        <table className = "table table-striped">
          <thead>
              <th scope = "col">#</th>
              <th scope = "col">Tour ID</th>
              <th scope = "col">Customer ID</th>
              <th scope = "col">Date</th>
              <th scope = "col">Complaint</th>

          </thead>

          <tbody>
              
              {complaints.filter((val) =>{
                
                if(searchVal === ''){
                  return val;
                }
                else if (val.tourId.toLowerCase().includes(searchVal.toLowerCase())){
                  return val;
                }
              
              }).map((complaint) =>(
                  
                  <tr>
                    <th scope = "row">{number++}</th>
                    <td>{complaint.tourId}</td>
                    <td>{complaint.customerID}</td>
                    <td>{complaint.date}</td>
                    <td>{complaint.customercomplaint}</td>


                    <td><Button color="warning"  style = {{padding: "5px 5px 5px 5px" , width : "80px" , marginBottom : "8px"}}
                      onClick = {()=>{
                          //push(`/edit-complaint/${complaint._id}`);
                      }}
                      >Edit</Button>

                      <Button color="danger" style = {{padding: "5px 5px 5px 5px", width : "80px"}}
                      onClick = {() =>{
                          
                          complaintDelete(complaint);
                      }}
                    
                      >Remove</Button>
                    </td>

                  </tr>

              ))}
          </tbody>    
        </table>
        <DemoFooter />
      </div>
    </div>
  

  );
}*/

export {
  MyComplaints,
  //MyComplaintsTable
}

