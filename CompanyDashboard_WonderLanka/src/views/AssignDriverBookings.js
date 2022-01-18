import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import driverStyles from "../assets/css/DriverDetails.module.css";
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



function AssignDriver(){



    const [bookings , setBookings] = useState([]);
    const [drivers , setDrivers] = useState("");

    useEffect(()=>{
        axios.get("https://wonderlanka-backend.herokuapp.com/bookings/").then((res) =>{
            setBookings(res.data);
        })
    })
    let history = useHistory();
    var number = 1;



    useEffect(() => {
  
      bookings.forEach(({ tourId }) => {
        axios.get(`https://wonderlanka-backend.herokuapp.com/assignedDrivers/check/${tourId}`).then((res) =>{
          if(res.data === true){
            axios.get(`https://wonderlanka-backend.herokuapp.com/assignedDrivers/get/${tourId}`)
            .then(res => {
              setDrivers(drivers => ({
                ...drivers,
                [tourId]: res.data.driverId,
              }));
            })
          }

        })
      
      });
    
    }, [bookings]);

   {/* function DriverAssigned(tid){
        axios.get(`http://localhost:8070/assignedDrivers/get/${tid}`).then((res)=>{
          console.log(res.data.driverId);
          setDriver(res.data.driverId);
          if (typeof driver == 'undefined'){
            return "Not Assigned";
          }
          
        }).catch((err)=>{
          console.log(err);
        })
        
        return driver;

        
    }*/}
    return(
        
        <div>
          
            <IndexNavbar />
            <IndexHeader />
            <Container>
            
            <center><h1 style ={{marginLeft:"40px"}}>Assigned Drivers</h1></center>
            <br/><br/>

            <Row>
          <Col>
            <FormGroup>
              <InputGroup style = {{marginLeft : "40px"}} className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search " type="text" 
/>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col>
            <div>
              <Label style = {{marginLeft : "40px"}} check>
                <Input type="checkbox"/>{" "} 
                <label style ={{marginRight : "40px"}}>Tour ID</label>
              </Label>
            </div>
          </Col>
          <Col></Col>
        </Row>

            <div style = {{marginLeft:"30px"}}  className = "tableContainer">
                <table className="table" >
                    <thead>
                        <th class="table-danger" scope = "col">#</th>
                        <th class="table-danger" scope = "col">Tour ID</th>
                        <th class="table-danger" scope = "col">Booking Date</th>
                        <th class="table-danger" scope = "col">Arrival Date</th>
                        <th class="table-danger" scope = "col">Country </th>
                        <th class="table-danger" scope = "col">Driver Assigned </th>
                        <th class="table-danger" scope = "col">Operation</th>

                    </thead>

                    <tbody>
                        
                        {bookings.map((booking) =>(
                            
                            <tr>
                                <th  class="table-primary" scope = "row">{number++}</th>
                                <td  class="table-primary">{booking.tourId}</td>
                                <td  class="table-primary">{booking.bookingDate}</td>
                                <td  class="table-primary">{booking.arrivalDate}</td>
                                <td  class="table-primary">{booking.country}</td>
                               <td  class="table-primary"> {drivers[booking.tourId]}</td>
                                <td  class="table-primary"><button  className={driverStyles.btnAssign} style = {{padding: "5px 5px 5px 5px" , width : "90px" , marginBottom : "8px"}}
                                onClick = {()=>{
                                    history.push(`/assign-driver/${booking.username}`);
                                }}
                                >Assign</button>
                               </td>
                            </tr>
    
                        ))}
                    </tbody>    


                </table>
            </div>  
            </Container> 
            
            <DemoFooter />
         
        </div>    
    );

}

export default AssignDriver;