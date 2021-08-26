import styles from '../assets/css/AddGuide.module.css'
import { useState } from 'react';
import axios from 'axios';
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';
import{
    Label,
    Input,
    Button
}
from 'reactstrap'






function AddGuide(){

const [guideID , setGuideId] = useState("");
const [fName , setFname] = useState("");
const [lName , setLname] = useState("");
const [email , setEmail] = useState("");
const [telNo , setTelno] = useState("");
const [licenseID , setLicenseId] = useState("");
const [foreignLang , setForeignLang] = useState("");
const [message , setMessage] = useState("");

function sendData(e){
    e.preventDefault();

    const newGuide = {
        guideID,
        fName,
        lName,
        email,
        telNo,
        licenseID,
        foreignLang
    }


axios.post("http://localhost:8070/guides/add" , newGuide ).then(()=>{
    window.location.reload();
}).catch((err)=>{
    alert(err);
    })
}


    return(
        <>
        <IndexHeader />
        <IndexNavbar />
        <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Insert Tour Guide Details</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form onSubmit = {sendData}>

                <Label for = "GuideID">Guide ID</Label><br/>
                <Input type = 'text' name = "GuideID" placeholder = "Enter Guide ID" 
                onChange = {(e) => {
                        setGuideId(e.target.value);
                }}></Input><br/>

                <Label for = "FirstName">First Name</Label><br/>
                <Input type = 'text' name = "FirstName" placeholder = "Enter First Name"
                onChange = {(e) =>{
                        setFname(e.target.value);
                }}></Input><br/>

                <Label for = "LastName">Last Name</Label><br/>
                <Input type = 'text' name = "LastName" placeholder = "Enter Last Name"
                onChange = {(e)=>{
                        setLname(e.target.value);
                }}></Input><br/>

                <Label for = "Email">Email</Label><br/>
                <Input type = "email" name = "Email" placeholder = "Enter Email"
                onChange = {(e)=>{
                        setEmail(e.target.value);
                }}></Input><br/>

                <Label for = "TelNo">Telephone number</Label><br/>
                <Input type = "number" name = "TelNo" placeholder = "Enter Telephone Number"
                onChange = {(e)=>{
                        setTelno(e.target.value);
                }}></Input><br/>

                <Label for = "GuideLicense">Guide License ID</Label><br/>
                <Input type = "text" name = "GuideLicense" placeholder = "Enter Guide License ID"
                onChange= {(e)=>{
                        setLicenseId(e.target.value);
                }}/><br/>

                <Label for = "ForeignLanguage">Main Foreign ForeignLanguage</Label><br/>
                <Input type = "text" name = "ForeignLanguage" placeholder = "Enter Main Foreign Language"
                onChange = {(e)=>{
                        setForeignLang(e.target.value);
                }}/> <br/>
                <span style = {{textAlign:"left" , color : "red"}}>{message}</span>
                <Button color = "primary" type = "submit" style = {{float:'right' , margin : "5px" }}
                onClick = {() =>{
                    setMessage("Guide Added!");
                }}
                >Add Guide</Button>

            </form>    
            </div>
        </div>   
        <DemoFooter />
       </>     
    );
}

export default AddGuide;