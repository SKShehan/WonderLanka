import styles from '../assets/css/Itinerary.module.css'
import {Card , CardImg , Button} from 'reactstrap'

function ItineraryContainer(props){


    function CloseItinerary(){
        props.onCancel();
    }

    return(
        <div>
            <Card className = {styles.CardComponent}>
                <CardImg top src = "" alt = "Itinerary"/>
                <Button color = "primary" style = {{float : "right"}} onClick = {CloseItinerary}>Close</Button>
            </Card>    
        </div>
    );

}

export default ItineraryContainer;