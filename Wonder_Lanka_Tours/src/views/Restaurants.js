import {Card , CardImg , CardBody , CardTitle , CardText , Button } from 'reactstrap';
import {useState} from 'react';
import { useEffect } from 'react';
import ItineraryContainer from 'components/ItineraryContainer';
import BookTour from './BookTour';
import Backdrop from 'components/ItineraryBackdrop';
import styles from '../assets/css/Itinerary.module.css'
import { useScrollToBottom} from 'react-scroll-to-bottom';
import axios from 'axios';
        
function Restaurants(){
    
    const scrollBottom = useScrollToBottom(); 

    const [restaurants , setRestaurants] = useState([]);
    const [restaurantCoverImage , setrestaurantCoverImage] = useState (); 
    const [restaurantName , setrestaurantName] = useState("");
    const [restaurantDesc , setrestaurantDesc] = useState("");
    const [restaurantType , setrestaurantType] = useState();
    const [restaurantLocation , setrestaurantLocation] = useState();

    useEffect(() =>{
        axios.get("http://localhost:8070/restaurants/").then((res)=>{
            setRestaurants(res.data);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    } , []);



    const [BookisClicked , setClicked] = useState(false);

    function BookClick(){
        setClicked(true);
    }


    const [RestaurantisOpen , setRestaurantOpen] = useState(false);
    const [scrolled , setScroll] = useState(false);
    function ViewRestaurant(){
        setRestaurantOpen(true);
             
    }
    

    function RestaurantisClosed(){
        setRestaurantOpen(false);
    }
    return(
        <div>   
            <div className = {styles.Packages}>
                <h3 style = {{marginLeft : "30px" , marginTop : "30px" , fontWeight :"bold" , fontSize :"25px"}}>Restaurants collaborate With Us!!</h3>
                <br/><br/>
                <div className = {styles.container} >
                {restaurants.map((restaurant) =>(
                        
                    <Card style = {{width: '20rem' , margin : '50px'}}>
                    <CardImg  top src = {`http://localhost:8070/restaurants/getImage/${restaurant._id}`} alt = "TourImage" />
                    <CardBody>
                        <CardTitle style = {{fontWeight :"bold", fontSize : "18px"}}>{restaurant.restaurantName}</CardTitle><br />
                        <CardText style = {{ fontSize : "17px" , fontWeight : "bolder"}}>
                        {restaurant.restaurantDesc}<br/><br/>
                            <b>Restaurant Category  :</b> {restaurant.restaurantType} <br/>
                            <b>Restaurant Distric : </b> {restaurant.restaurantLocation}  <br/>
                            

                        </CardText>

                        <Button color = "primary" onClick = {() =>{
                              setCovImage(`http://localhost:8070/itineraries/getCovImage/${itinerary._id}`)
                              setScroll(true);
                              ViewItinerary();  
                              
                             
                        }} 
                        >View Itinerary</Button>
                        <Button color = "info" style = {{float : 'right'}} onClick = {() =>{
                            setClass(itinerary.itineraryClass);
                            setTitle(itinerary.itineraryName);
                        }}
                        >Book Tour</Button>
                    </CardBody>        

                    </Card>
                 
                ))}
                </div>
               
                {ItineraryisOpen ? <ItineraryContainer onCancel = {ItineraryisClosed} image = {itineraryCovImage}  /> : null}
                {ItineraryisOpen && <Backdrop onCancel = {ItineraryisClosed}/>}
                {BookisClicked   && <BookTour itineraryClass = {itineraryClass} itineraryTitle = {itineraryTitle} />}
                
                
            </div>

        </div>
    );
}

export default Restaurants;