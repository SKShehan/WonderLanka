import {Card , CardImg , CardBody , CardTitle , CardText , Button } from 'reactstrap';
import {useState} from 'react';
import ItineraryContainer from 'components/ItineraryContainer';
import Backdrop from 'components/ItineraryBackdrop';
import styles from '../assets/css/Itinerary.module.css'
function Itineraries(){

    const [ItineraryisOpen , setItineraryOpen] = useState(false);
    function ViewItinerary(){
            setItineraryOpen(true);
    }

    function ItineraryisClosed(){
        setItineraryOpen(false);
    }
    return(
        <div>   
            <div className = {styles.Packages}>
                <h3>Our Tours</h3>
                <br/><br/>
                <Card style = {{width: '20rem'}}>
                    <CardImg top src = "img-src" alt = "TourImage"/>
                    <CardBody>
                        <CardTitle>Tour Name</CardTitle>
                        <CardText>Text related to the goes here!</CardText>
                        <Button color = "primary" onClick = {ViewItinerary} >View Itinerary</Button>
                        <Button color = "info" style = {{float : 'right'}}>Book Tour</Button>
                    </CardBody>        
                
                </Card>
                {ItineraryisOpen ? <ItineraryContainer onCancel = {ItineraryisClosed}/> : null}
                {ItineraryisOpen && <Backdrop onCancel = {ItineraryisClosed}/>}
                
                
                
            </div>

        </div>
    );
}

export default Itineraries;