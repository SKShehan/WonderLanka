import styles from '../assets/css/AddItinerary.module.css'
import{
    Label,
    Input,
    Button
}
from 'reactstrap'

function AddItinerary(){

    return(

        <div>
            <br/><br/><h3 style = {{textAlign : 'center'}}>Insert Tour Itinerary Details</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form>
                <Label for = "ItineraryName">Itinerary Name</Label><br/>
                <Input type = 'text' name = "ItineraryName" placeholder = "Enter Itinerary Name"></Input><br/>

                <Label for = "ItineraryDays">Itinerary Duration</Label><br/>
                <Input type = 'number' name = "ItineraryDuration" placeholder = "Enter Duration of the Itinerary"></Input><br/>

                <Label for = "ItineraryDescription">Itinerary Description</Label><br/>
                <Input type = "text" name = "ItineraryDescription" placeholder = "Enter Itinerary Description"></Input><br/>

                <Label for = "ItineraryImage">Itinerary Image</Label><br/>
                <Input type = "file" name = "ItineraryImage" accept = "image/*"></Input><br/>

                <Label for = "CardImage">Image for Card</Label><br/>
                <Input type = "file" name = "CardImage" accept = "image/*"/><br/>

                <Label for = "ItineraryClass">Select Itinerary Class</Label><br/>
                <Input type = "select" name = "ItineraryClass">
                    <option>Superior</option>
                    <option>Standard</option>
                </Input>

                <Label for = "ItineraryPrice">Itinerary Price</Label><br/>
                <Input type = "number" name = "ItineraryPrice" placeholder = "Enter Itinerary Price"/>

            </form>    
            </div>
        </div>   

    );
}

export default AddItinerary;