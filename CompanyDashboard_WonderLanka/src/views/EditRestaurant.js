import styles from '../assets/css/EditRestaurant.module.css'
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import{
    Label,
    Input,
    Button
}
from 'reactstrap'

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { thisExpression } from '@babel/types';
toast.configure();


function EditRestaurant(){

    
        const [restID ,setrestID] = useState("");
        const [restName , setrestName] = useState("");
        const [restDescription , setrestDescription] = useState("");
        const [restTele , setrestTele] = useState("");
        const [restEmail , setrestEmail] = useState("");
        const [restType , setrestType] = useState("");
        const [restLocation , setrestLocation] = useState("");
       
        
    
       const {id} = useParams();

     

        useEffect(()=>{
            axios.get(`http://localhost:8070/restaurants/${id}`).then((res) =>{

                console.log(res.data);
                setrestID(res.data.restID);
                setrestName(res.data.restName);
                setrestDescription(res.data.restDescription);
                setrestTele(res.data.restTele);
                setrestEmail(res.data.restEmail);
                setrestType(res.data.restType);
                setrestLocation(res.data.restLocation);
            
        }).catch((err)=>{
                console.log(err);
                })
            } , []);



            function onSubmit (e){
                e.preventDefault();
        
                const updateRestaurant = {
                    restID,
                    restName,
                    restDescription,
                    restTele,
                    restEmail,
                    restType,
                    restLocation
                    
                }
          
    
            axios.put(`http://localhost:8070/restaurants/update/${id}` , updateRestaurant).then(()=>{
                
                
                toast.success('Restuarant Added!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    e.target.reset();
            }).catch((err) =>{
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
        }
        return(
            <>
            <IndexNavbar />
            <IndexHeader />
            <div style = {{paddingTop : "50px"}} className = {styles.body}>
                <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center' }}><b>Update Restuarant Details</b></h3><br/><br/>
                <div className = {styles.FormContainer}>
                <form  onSubmit = {onSubmit}>
    
                <Label for = "restID">Restaurant ID</Label><br/>
                <Input type = 'text' name = "restID" placeholder = "Enter Restaurant ID" required
                onChange = {(e) =>{
                    setrestID(e.target.value);
                }}
                ></Input><br/>

                <Label for = "restName">Restaurant Name</Label><br/>
                <Input type = 'text' name = "restName" placeholder = "Enter Restaurant Name" required
                onChange = {(e) =>{
                    setrestName(e.target.value);
                }}
                ></Input><br/>

                <Label for = "restTele">Restaurant Mobile Number</Label><br/>
                <Input type = 'number' name = "restTele" placeholder = "Enter Contact Number of restaurant" required
                onChange = {(e)=>{
                    setrestTele(e.target.value);
                }}
                ></Input><br/>

                <Label for = "restEmail">Restaurant Email</Label><br/>
                <Input type = 'text' name = "restEmail" placeholder = "Enter Restaurant Email Address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required
                onChange = {(e) =>{
                    setrestEmail(e.target.value);
                }}
                ></Input><br/>

                <Label for = "restDescription">Restaurant Description</Label><br/>
                <Input type = "text" name = "restDescription" placeholder = "Enter Restaurant Description" required
                onChange = {(e) =>{
                    setrestDescription(e.target.value);
                }}
                ></Input><br/>

                <Label for = "restType">Select Restaurant Type</Label><br/>
                <Input type = "select" name = "restType"
                onChange = {(e) =>{
                    setrestType(e.target.value);
                }}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input><br/>

                <Label for = "restLocation">Select Restaurant Location</Label><br/>
                <Input type = "select" name = "restLocation"
                onChange = {(e) =>{
                    setrestLocation(e.target.value);
                }}
                >
                    <option>Jaffna</option>
                    <option>Kilinochchi</option>
                    <option>Mannar</option>
                    <option>Mullativu</option>
                    <option>Vavniya</option>
                    <option>Puttalam</option>
                    <option>Kurunegala</option>
                    <option>Gampaha</option>
                    <option>Colombo</option>
                    <option>Kaluthara</option>
                    <option>Anuradhapura</option>
                    <option>Polonnaruwa</option>
                    <option>Matale</option>
                    <option>Kandy</option>
                    <option>Nuwara Eliya</option>
                    <option>Kegelle</option>
                    <option>Ratnapura</option>
                    <option>Trincomalee</option>
                    <option>Batticaloa</option>
                    <option>Ampara</option>
                    <option>Badulla</option>
                    <option>Monaragala</option>
                    <option>Hambantota</option>
                    <option>Mathara</option>
                    <option>Galle</option>
                   

                </Input><br/>


                   
    
                    
    
                    <Button color = "warning" type = "submit" style = {{float:'right' , margin : "5px" }}>Update Restaurant</Button>
                </form>    
                </div>
                <DemoFooter />
            </div>   
          </>          
        );
    }

export default EditRestaurant;