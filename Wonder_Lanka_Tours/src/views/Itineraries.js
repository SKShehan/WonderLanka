import {Card , CardImg , CardBody , CardTitle , CardText , Button, NavLink } from 'reactstrap';
import {useState} from 'react';
import { useEffect } from 'react';
import ItineraryContainer from 'components/ItineraryContainer';
import BookTour from './BookTour';
import Backdrop from 'components/ItineraryBackdrop';
import styles from '../assets/css/Itinerary.module.css'
import { useScrollToBottom} from 'react-scroll-to-bottom';
import axios from 'axios';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { useHistory } from 'react-router';
function Itineraries(){
    
    let history = useHistory();


    const [itineraries , setItineraries] = useState([]);
    const [itineraryCovImage , setCovImage] = useState (); 


    useEffect(() =>{
        axios.get("http://localhost:8070/itineraries/").then((res)=>{
            setItineraries(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    } , []);




    const [ItineraryisOpen , setItineraryOpen] = useState(false);

    function ViewItinerary(){
            setItineraryOpen(true);
             
    }
    

    function ItineraryisClosed(){
        setItineraryOpen(false);
    }
    return(
        
        <>
               
        <IndexHeader />
        <IndexNavbar />
        <div>   
            <div className = {styles.Packages}>
                <h3 style = {{marginLeft : "30px" , marginTop : "30px" , fontWeight :"bold" , fontSize :"25px"}}>Our Tours</h3>
                <br/><br/>
                <div className = {styles.container} >
                {itineraries.map((itinerary) =>(
                        
                    <Card style = {{width: '20rem' , margin : '50px'}}>
                    {/* <CardImg  top src = {`http://localhost:8070/itineraries/getImage/${itinerary._id}`} alt = "TourImage" /> */}
                    <CardImg  top src = {`http://localhost:8070/itineraries/getCovImage/${itinerary._id}`} alt = "TourImage" />
                    <CardBody>
                        <CardTitle style = {{fontWeight :"bold", fontSize : "18px"}}>{itinerary.itineraryName}</CardTitle><br />
                        <CardText style = {{ fontSize : "17px" , fontWeight : "bolder"}}>
                        {itinerary.itineraryDesc}<br/><br/>
                            <b>Itinerary Days  :</b> {itinerary.itineraryDays} <br/>
                            <b>Itinerary Class :</b> {itinerary.itineraryClass}<br/>
                            <b>Price Per Adult : </b> {itinerary.itineraryPriceAdult}  <br/>
                            <b>Price per Child : </b>{itinerary.itineraryPriceChild} 

                        </CardText>

                        <Button color = "primary" onClick = {() =>{
                        //      setCovImage(`http://localhost:8070/itineraries/getCovImage/${itinerary._id}`)
                             setCovImage(`http://localhost:8070/itineraries/getImage/${itinerary._id}`)
                              ViewItinerary();  
                              
                             
                        }} 
                        >View Itinerary</Button>
                        <Button color = "info" style = {{float : 'right'}} onClick = {() =>{
                  
                           history.push({

                                pathname : "/book-tour",
                                state: {itineraryClass : itinerary.itineraryClass  , itineraryTitle : itinerary.itineraryName}
                           })
                            
                        }}
                        >Book Tour</Button>
                    </CardBody>        

                    </Card>
                    
                 
                ))}


                </div>
               
               
                
                
            </div>
                {ItineraryisOpen ? <ItineraryContainer onCancel = {ItineraryisClosed} image = {itineraryCovImage}  /> : null}
                {ItineraryisOpen ? <Backdrop onCancel = {ItineraryisClosed}/> : null}
           

        </div>
        <DemoFooter />
        </>
    );
}

export default Itineraries;