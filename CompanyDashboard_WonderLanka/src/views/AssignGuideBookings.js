import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import IndexHeader from "components/Headers/IndexHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import {
  Label,
  Input,
  Button,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Alert,
  Container,
} from "reactstrap";
import { useHistory } from "react-router";



function AssignGuide(){



    
 //   const [guide , setGuide] = useState("");
   //   const [guide , setGuide] = useState([]);
   const [bookings , setBookings] = useState([]);
   const [guides, setGuides] = useState({});

   useEffect(()=>{
    axios.get("http://localhost:8070/bookings/").then((res) =>{
        setBookings(res.data);
    })
}, []) 

    let history = useHistory();
    var number = 1;
    
    useEffect(() => {
  
      bookings.forEach(({ tourId }) => {
        axios.get(`https://wonderlanka-backend.herokuapp.com/assignedGuides/check/${tourId}`).then((res) =>{
          if(res.data === true){
            axios.get(`https://wonderlanka-backend.herokuapp.com/assignedGuides/get/${tourId}`)
            .then(res => {
              setGuides(guides => ({
                ...guides,
                [tourId]: res.data.guideId,
              }));
            })
          }

        })
      
      });
    
    }, [bookings]);


    return(
        
        <div>
            <IndexNavbar />
            <IndexHeader />
            <h3 style ={{marginLeft:"40px"}}>Assigned Guides</h3><br/><br/>


            <div style = {{marginLeft:"20px"}}  className = "tableContainer">
                <table className = "table table-striped">
                    <thead>
                        <th scope = "col">#</th>
                        <th scope = "col">Tour ID</th>
                        <th scope = "col">Booking Date</th>
                        <th scope = "col">Arrival Date</th>
                        <th scope = "col">Country </th>
                        <th scope = "col">Guide Assigned </th>
                        <th scope = "col">Operation</th>

                    </thead>

                    <tbody>
                        
                        {bookings.map((booking) =>(
                            
                            <tr>
                                <th scope = "row">{number++}</th>
                                <td>{booking.tourId}</td>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.arrivalDate}</td>
                                <td>{booking.country}</td>
                                {/* {GuideAssigned(booking.guideId)} */}
                                <td>{guides[booking.tourId]}</td>
                                <td><Button color="warning"  style = {{padding: "5px 5px 5px 5px" , width : "80px" , marginBottom : "8px"}}
                                onClick = {()=>{
                                    history.push(`/assign-guide/${booking.tourId}`);
                                }}
                                >Assign Guide</Button>
                               </td>
                            </tr>
    
                        ))}
                    </tbody>    


                </table>
            </div>   
            
            <DemoFooter />
        </div>    
    );

}

export default AssignGuide;