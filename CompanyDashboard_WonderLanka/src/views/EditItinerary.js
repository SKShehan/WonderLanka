import styles from '../assets/css/AddItinerary.module.css'

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




function EditItinerary(){

    

    const [itineraryId , setItineraryId] = useState("");
    const [itineraryName , setItineraryName] = useState("");
    const [itineraryDays , setItineraryDays] = useState("");
    const [itineraryDesc , setItineraryDesc] = useState("");
    const [itineraryClass , setItineraryClass] = useState("");
    const [itineraryPriceAdult , setItineraryPriceAdult] = useState("");
    const [itineraryPriceChild , setItineraryPriceChild] = useState("");
    const [imgFile1 , setItineraryImage] = useState("");
    const [imgFile2 , setItineraryCoverImage] = useState("");

    const {id} = useParams();

    const onChangeFile = e =>{
        setItineraryImage(e.target.files[0]);
    }
    const onChangeFile2 = e =>{
        setItineraryCoverImage(e.target.files[0]);
    }

    useEffect(()=>{
        axios.get(`http://localhost:8070/itineraries/get/${id}`).then((res) =>{

        console.log(res.data);
        setItineraryId(res.data.itineraryId);
        setItineraryName(res.data.itineraryName);
        setItineraryDays(res.data.itineraryDays);
        setItineraryDesc(res.data.itineraryDesc);
        setItineraryClass(res.data.itineraryClass);
        setItineraryPriceAdult(res.data.itineraryPriceAdult);
        setItineraryPriceChild(res.data.itineraryPriceChild);
     //   setItineraryCoverImage(res.data.itineraryImage);
  //      setItineraryImage(res.data.itineraryCoverImage);


        }).catch((err)=>{
        console.log(err);
        })
    } , []);



    function updateData(e){
        e.preventDefault();

        const formData = new FormData();


        formData.append("itineraryId" , itineraryId);
        formData.append("itineraryDays" , itineraryDays);
        formData.append("itineraryName" , itineraryName);
        formData.append("itineraryDesc" , itineraryDesc);
  //      formData.append("itineraryImage" , imgFile1);
  //      formData.append("itineraryCoverImage" , imgFile2);
        formData.append("itineraryClass" , itineraryClass);
        formData.append("itineraryPriceAdult" , itineraryPriceAdult);
        formData.append("itineraryPriceChild" , itineraryPriceChild);

        axios.put(`http://localhost:8070/itineraries/update/${id}` , formData).then(() =>{
            alert("Itinerary Updated!");
        }).catch((err) =>{
            console.log(err);
        })

    }

    return(

        <div>
            <br/><br/><h3 style = {{textAlign : 'center'}}>Edit Tour Itinerary Details</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form onSubmit = {updateData} encType = "multipart/form-data">

                <Label for = "ItineraryID">Itinerary ID</Label><br/>
                <Input type = 'text' name = "ItineraryID" placeholder = "Enter Itinerary ID" value = {itineraryId}
                onChange = {(e) =>{
                    setItineraryId(e.target.value);
                }}
                ></Input><br/>

                <Label for = "ItineraryName">Itinerary Name</Label><br/>
                <Input type = 'text' name = "ItineraryName" placeholder = "Enter Itinerary Name" value = {itineraryName}
                onChange = {(e)=>{
                    setItineraryName(e.target.value);
                }}
                ></Input><br/>

                <Label for = "ItineraryDays">Itinerary Duration</Label><br/>
                <Input type = 'number' name = "ItineraryDuration" placeholder = "Enter Duration of the Itinerary" value = {itineraryDays}
                onChange = {(e) =>{
                    setItineraryDays(e.target.value);
                }}
                ></Input><br/>

                <Label for = "ItineraryDescription">Itinerary Description</Label><br/>
                <Input type = "text" name = "ItineraryDescription" placeholder = "Enter Itinerary Description" value = {itineraryDesc}
                onChange = {(e)=>{
                    setItineraryDesc(e.target.value);
                }}
                ></Input><br/>

                <Label for = "ItineraryImage">Itinerary Image</Label><br/>
                <Input type = "file" filename = "itineraryImage" accept = "image/*" value = {imgFile1}
                onChange = {onChangeFile}
                ></Input><br/>

                <Label for = "CardImage">Image for Card</Label><br/>
                <Input type = "file" filename = "itineraryCoverImage" accept = "image/*" value = {imgFile2}
                onChange = {onChangeFile2}
                /><br/>

                <Label for = "ItineraryClass">Select Itinerary Class</Label><br/>
                <Input type = "select" name = "ItineraryClass" value = {itineraryClass}
                onChange = {(e) =>{
                    setItineraryClass(e.target.value);
                }}
                >
                    <option>Superior</option>
                    <option>Standard</option>
                </Input>

                <Label for = "ItineraryPriceA">Itinerary Price for Adults</Label><br/>
                <Input type = "number" name = "ItineraryPriceA" placeholder = "Enter Itinerary Price for Adults" value = {itineraryPriceAdult} 
                onChange = {(e) =>{
                    setItineraryPriceAdult(e.target.value);
                }}
                />

                <Label for = "ItineraryPriceC">Itinerary Price for Children</Label><br/>
                <Input type = "number" name = "ItineraryPriceC" placeholder = "Enter Itinerary Price for Children" value = {itineraryPriceChild}
                onChange = {(e)=>{
                    setItineraryPriceChild(e.target.value);
                }}
                />

                <Button type = "submit" color = "warning" style = {{float:'right' , margin : "5px" }} >Edit Itinerary</Button>

            </form>    
            </div>
        </div>   

    );
}

export default EditItinerary;