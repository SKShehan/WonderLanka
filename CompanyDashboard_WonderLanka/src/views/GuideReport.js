import { Row, Col, Card } from "reactstrap";
import { jsPDF } from "jspdf";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useHistory } from "react-router";
import axios from "axios";

function GuideReport(){

  const [bookings , setBookings] = useState([]);
  const [guide , setGuide] = useState("");

  useEffect(()=>{
    let today = new Date().toISOString().slice(0, 10);
    setdate(today);

    axios.get("http://localhost:8070/bookings/").then((res) =>{
      setBookings(res.data);
  })
})
let history = useHistory();
var number = 1;

function GuideAssigned(tid){
  axios.get(`http://localhost:8070/assignedGuides/get/${tid}`).then((res)=>{
   // console.log(res.data.guideId);
    setGuide(res.data.guideId);
    console.log(guide);
    if (typeof guide == 'undefined'){
      return "Not Assigned";
    }
    else{
      return guide;
    }
    
  }).catch((err)=>{
    console.log(err);
  })
  
  
  }

  const [date, setdate] = useState();

    return (
        <>
                <h2 align="center">Assigned Guide Report</h2>
                <hr></hr>

                    <Row>
                      <Col>
                        {" "}
                        <img
                          src={
                            require("assets/img/wonder-lanka-logo.png").default
                          }
                          className="report-logo"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <br></br>
                        <p className="report-contact">
                          100/77 City Gate, Temple Junction, Katana North,{" "}
                          <br></br>Katana, Negombo 11500<br></br>
                          Tel No. : +94 77 614 0895
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label style={{ float: "right", fontSize: "x-small" }}>
                          <i>Date : {date}</i>
                        </label>

                        <hr></hr>
                      </Col>
                    </Row>
                    <br/><br/>

                    <div style = {{marginLeft:"20px"}}  className = "tableContainer">
                <table className = "table table-striped">
                    <thead>
                        <th scope = "col">#</th>
                        <th scope = "col">Tour ID</th>
                        <th scope = "col">Booking Date</th>
                        <th scope = "col">Arrival Date</th>
                        <th scope = "col">Country </th>
                        <th scope = "col">Guide Assigned </th>
                       

                    </thead>

                    <tbody>
                        
                        {bookings.map((booking) =>(
                            
                            <tr>
                                <th scope = "row">{number++}</th>
                                <td>{booking.tourId}</td>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.arrivalDate}</td>
                                <td>{booking.country}</td>
                                <td>{GuideAssigned(booking.tourId)}</td>
                              
                            </tr>
    
                        ))}
                    </tbody>    


                </table>
            </div>   
        </>
    );
}

export default GuideReport;