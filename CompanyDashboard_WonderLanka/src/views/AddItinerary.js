import styles from '../assets/css/AddItinerary.module.css'
import axios from 'axios';
import { useState , useEffect } from 'react';
import{
    Label,
    Input,
    Button
}
from 'reactstrap'

function AddItinerary(){

    const [itineraryId ,setitineraryId] = useState("");
    const [itineraryDays , setitineraryDays] = useState("");
    const [itineraryName , setitineraryName] = useState("");
    const [itineraryDesc , setitineraryDesc] = useState("");
    const [imgFile1 , setitineraryImage] = useState("");
    const [imgFile2 , setitineraryCoverImage] = useState("");
    const [itineraryClass , setitineraryClass] = useState("");
    const [itineraryPriceAdult , setitineraryPriceAdult] = useState("");
    const [itineraryPriceChild , setitineraryPriceChild] = useState("");

    const onChangeFile = e =>{
        setitineraryImage(e.target.files[0]);
    }
    const onChangeFile2 = e =>{
        setitineraryCoverImage(e.target.files[0]);
    }
    function sendData(e){
        e.preventDefault();

        const formData = new FormData();
        
        formData.append("itineraryId" , itineraryId);
        formData.append("itineraryDays" , itineraryDays);
        formData.append("itineraryName" , itineraryName);
        formData.append("itineraryDesc" , itineraryDesc);
        formData.append("itineraryImage" , imgFile1);
        formData.append("itineraryCoverImage" , imgFile2);
        formData.append("itineraryClass" , itineraryClass);
        formData.append("itineraryPriceAdult" , itineraryPriceAdult);
        formData.append("itineraryPriceChild" , itineraryPriceChild);

 



        axios.post("http://localhost:8070/itineraries/add" , formData).then(()=>{
            alert("Itinerary Addded");
        }).catch((err) =>{
            console.log(err);
        })
    }
    return(

        <div>
            <br/><br/><h3 style = {{textAlign : 'center'}}>Insert Tour Itinerary Details</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form encType = "multipart/form-data" onClick = {sendData}>

                <Label for = "ItineraryID">Itinerary ID</Label><br/>
                <Input type = 'text' name = "ItineraryID" placeholder = "Enter Itinerary ID"
                onChange = {(e) =>{
                    setitineraryId(e.target.value);
                }}
                ></Input><br/>

                <Label for = "ItineraryName">Itinerary Name</Label><br/>
                <Input type = 'text' name = "ItineraryName" placeholder = "Enter Itinerary Name"
                onChange = {(e) =>{
                    setitineraryName(e.target.value);
                }}
                ></Input><br/>

                <Label for = "ItineraryDays">Itinerary Days</Label><br/>
                <Input type = 'number' name = "ItineraryDays" placeholder = "Enter Duration of the Itinerary"
                onChange = {(e)=>{
                    setitineraryDays(e.target.value);
                }}
                ></Input><br/>

                <Label for = "ItineraryDescription">Itinerary Description</Label><br/>
                <Input type = "text" name = "ItineraryDescription" placeholder = "Enter Itinerary Description"
                onChange = {(e) =>{
                    setitineraryDesc(e.target.value);
                }}
                ></Input><br/>
                <div className = "form-group">
                <Label for = "ItineraryImage">Itinerary Image</Label><br/>
                <Input type = "file" filename = "itineraryImage" accept = "image/*" className = "form-control-file"
                 onChange = {onChangeFile}
                ></Input><br/>
                </div>

                <Label for = "CardImage">Image for Card</Label><br/>
                <Input type = "file" filename = "itineraryCoverImage" accept = "image/*" className = "form-control-file"
                onChange = {onChangeFile2}
                /><br/>

                <Label for = "ItineraryClass">Select Itinerary Class</Label><br/>
                <Input type = "select" name = "ItineraryClass"
                onChange = {(e) =>{
                    setitineraryClass(e.target.value);
                }}
                >
                    <option>Superior</option>
                    <option>Standard</option>
                </Input>

                <Label for = "ItineraryPriceA">Itinerary Price for Adults</Label><br/>
                <Input type = "number" name = "ItineraryPriceA" placeholder = "Enter Itinerary Price for Adults" 
                onChange = {(e) =>{
                    setitineraryPriceAdult(e.target.value);
                }}
                />

                <Label for = "ItineraryPriceC">Itinerary Price for Children</Label><br/>
                <Input type = "number" name = "ItineraryPriceC" placeholder = "Enter Itinerary Price for Children"
                onChange = {(e) =>{
                    setitineraryPriceChild(e.target.value);
                }}
                />

                <Button color = "primary" type = "submit">Add Itinerary</Button>
            </form>    
            </div>
        </div>   

    );
}

export default AddItinerary;