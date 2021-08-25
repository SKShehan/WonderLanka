import styles from '../assets/css/AddItinerary.module.css'
import { useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';

import{
    Label,
    Input,
    Button
}
from 'reactstrap'
import { thisExpression } from '@babel/types';


function EditGuide(){

    const [guideID , setGuideId] = useState("");
    const [fName , setFname] = useState("");
    const [lName , setLname] = useState("");
    const [email , setEmail] = useState("");
    const [telNo , setTelno] = useState("");
    const [licenseID , setLicenseId] = useState("");
    const [foreignLang , setForeignLang] = useState("");
    const [message , setMessage] = useState("");

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8070/guides/get/${id}`).then((res) =>{

        console.log(res.data);
        setGuideId(res.data.guideID);
        setFname(res.data.fName);
        setLname(res.data.lName);
        setEmail(res.data.email);
        setTelno(res.data.telNo);
        setLicenseId(res.data.licenseID);
        setForeignLang(res.data.foreignLang);


        }).catch((err)=>{
        console.log(err);
        })
    } , []);

    function onSubmit (e){
        e.preventDefault();

        const updateGuide = {
            guideID,
            fName,
            lName,
            email,
            telNo,
            licenseID,
            foreignLang
        }
        axios.put(`http://localhost:8070/guides/update/${id}` , updateGuide ).then(() =>{
            window.location.reload();

        }).catch((err) =>{
            console.log(err);
        })
    }
    return(

        <div>
            <IndexHeader />
            <IndexNavbar />
            <br/><br/><h3 style = {{textAlign : 'center'}}>Edit Guide Details</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form onSubmit = {onSubmit}>

                <Label for = "GuideID">Guide ID</Label><br/>
                <Input type = 'text' name = "GuideID" value = {guideID}
                onChange = {(e) =>{
                    setGuideId(e.target.value);
                }}></Input><br/>

                <Label for = "FirstName">First Name</Label><br/>
                <Input type = 'text' name = "FirstName" value = {fName}
                onChange = {(e)=>{
                    setFname(e.target.value);
                }}></Input><br/>

                <Label for = "LastName">Last Name</Label><br/>
                <Input type = 'text' name = "LastName" value = {lName} 
                onChange = {(e)=>{
                    setLname(e.target.value);
                }}></Input><br/>

                <Label for = "Email">Email</Label><br/>
                <Input type = "email" name = "Email" value = {email}
                onChange = {(e) =>{
                    setEmail(e.target.value);
                }}></Input><br/>

                <Label for = "TelNo">Telephone number</Label><br/>
                <Input type = "number" name = "TelNo" value = {telNo}
                onChange = {(e)=>{
                    setTelno(e.target.value);
                }}></Input><br/>

                <Label for = "GuideLicense">Guide License ID</Label><br/>
                <Input type = "text" name = "GuideLicense" value = {licenseID}
                onChange = {(e) =>{
                    setLicenseId(e.target.value);
                }}/><br/>

                <Label for = "ForeignLanguage">Main Foreign ForeignLanguage</Label><br/>
                <Input type = "text" name = "ForeignLanguage" value = {foreignLang}
                onChange = {(e)=>{
                    setForeignLang(e.target.value);
                }}/> <br/>

                <span style = {{textAlign:"left" , color : "red"}}>{message}</span>
                <Button type = "submit" color = "warning" style = {{float:'right' , margin : "5px" }} 
                onClick = {() =>{
                    setMessage("Guide Updated!");
                }}
                >Edit Guide</Button>

            </form>    
            </div>
        </div>   

    );
}

export default EditGuide;