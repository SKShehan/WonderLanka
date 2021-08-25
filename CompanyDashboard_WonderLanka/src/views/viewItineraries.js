import{Button} from 'reactstrap'
import{ useHistory } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function ViewItineraries(){
    
    let history = useHistory();

    const [itineraries , setItineraries] = useState([]);



    useEffect(() => {
        axios.get("http://localhost:8070/itineraries/").then((res) =>{
            setItineraries(res.data);
            console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
    
      }, []);

    

    function onDelete(itinerary)  {
        if (
            window.confirm(
              "Itinerary " + itinerary.itineraryId + " will be removed from the database"
            )
        )
        axios.delete(`http://localhost:8070/itineraries/delete/${itinerary._id}`).then((res) =>{
            console.log(res);
            alert("Deletion Succesful!");
        }).catch((err) =>{
            console.log(err);
            alert("Error!");
        })
    }
 

    var number = 1;
    
    return(
        
        <div>
            <h3>Tour Itinerary Details</h3><br/><br/>
            <div className = "tableContainer">
                <table className = "table table-striped">
                    <thead>
                        <th scope = "col">#</th>
                        <th scope = "col">Itinerary ID</th>
                        <th scope = "col">Itinerary Name</th>
                        <th scope = "col">Itinerary Days</th>
                        <th scope = "col">Itinerary Description</th>
                        <th scope = "col">Itinerary Image</th>
                        <th scope = "col">Itinerary CoverImage</th>
                        <th scope = "col">Itinerary Class</th>
                        <th scope = "col">Itinerary Price Per Adult</th>
                        <th scope = "col">Itinerary Price for Children</th>
                        <th scope = "col">Operations</th>

                    </thead>

                    <tbody>
                        
                        {itineraries.map((itinerary) =>(
                            
                            <tr>
                                <th scope = "row">{number++}</th>
                                <td>{itinerary.itineraryId}</td>
                                <td>{itinerary.itineraryName}</td>
                                <td>{itinerary.itineraryDays}</td>
                                <td>{itinerary.itineraryDesc}</td>
                                <td>{itinerary.itineraryImage}</td>
                                <td>{itinerary.itineraryCoverImage}</td>
                                <td>{itinerary.itineraryClass}</td>
                                <td>{itinerary.itineraryPriceAdult}</td>
                                <td>{itinerary.itineraryPriceChild}</td>

                                <td><Button color="warning" 
                                onClick = {()=>{
                                    history.push(`/edit-itinerary/${itinerary._id}`);
                                }}
                                >Edit</Button>

                                <Button color="danger" 
                                onClick = {() =>{
                                    onDelete(itinerary);
                                }}
                                    
                               
                                >Remove</Button>
                               </td>
                            </tr>
    
                        ))}
                    </tbody>    


                </table>
            </div>    
        </div>    
    );


}

export  default ViewItineraries;