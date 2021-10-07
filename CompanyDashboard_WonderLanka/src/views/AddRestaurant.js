import styles from '../assets/css/AddRestaurant.module.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import "react-toastify/dist/ReactToastify.css";
import{
    Label,
    Input,
    Button
}
from 'reactstrap'
import { toast } from 'react-toastify';

toast.configure();

export default function AddRestaurant(){

    const [restID ,setrestID] = useState("");
    const [restName , setrestName] = useState("");
    const [restDescription , setrestDescription] = useState("");
    const [restTele , setrestTele] = useState("");
    const [restEmail , setrestEmail] = useState("");
    const [restType , setrestType] = useState("");
    const [restLocation , setrestLocation] = useState("");
    
    
    

   
   
    function sendData(e){
        e.preventDefault();

        const newRestaurant = {
            restID,
            restName,
            restDescription,
            restTele,
            restEmail,
            restType,
            restLocation,
        
    
        }

    
        axios
        .post("http://localhost:8070/restaurants/add" , newRestaurant)
        .then(()=>{
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
        });
    };
        

    
   
    return(
        <>
        <IndexNavbar />
        <IndexHeader />
        <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center' , color : "black"}}><b>Insert Restuarant Details</b></h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form  onSubmit = {sendData} encType = "multipart/form-data">

                <Label for = "restID">Restaurant ID</Label><br/>
                <Input type = 'text' name = "restID" placeholder = "Enter Restaurant ID"  required
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
                <Input type = 'number' name = "restTele" placeholder = "Enter Contact Number of restaurant"   required
                onChange = {(e)=>{
                    setrestTele(e.target.value);
                }}
                ></Input><br/>

                <Label for = "restEmail">Restaurant Email</Label><br/>
                <Input type = 'text' name = "restEmail" placeholder = "example@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required
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


               

                

                <Button color = "primary" type = "submit" style = {{float:'right' , margin : "5px" }}>Add Restaurant</Button>
            </form>    
            </div>
        </div>   
      </>          
    );
}

