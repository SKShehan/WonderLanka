import { Container } from "reactstrap";


function ItineraryView(props){

    return(
        <>
            <div>
                <Container>
                        <div>
                        <Card>
                        <CardImg top src = {props.image} alt = "Itinerary"/>
                        <Button color = "primary" style = {{float : "right"}} onClick = {CloseItinerary}>Close</Button>
                        </Card>  
                        </div>    
                </Container>    
            </div>    
        </>
    );

}

export default ItineraryView;