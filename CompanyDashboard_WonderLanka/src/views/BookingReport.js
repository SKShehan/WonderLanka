import React from 'react';
import Pdf from "react-to-pdf";
import { useState, useEffect } from "react";
import { Row, Col, Card, Container, Button } from "reactstrap";
import styles from '../assets/css/Bookingmanagementreport.css'
import { Link } from 'react-router-dom';
const ref = React.createRef();

const PDF = (props) =>{
  
  const [date, setdate] = useState();
  useEffect(() => {
      let today = new Date().toISOString().slice(0, 10);
      setdate(today);
  }, []);

  
    return(
        <>
       
       
        <div className="my-tour-content">
       
          <h2  align="center">Booking Cancellation Report</h2>
          <hr></hr>
          <br></br>
        
          <Row>
            <Col>
           
              <Card className="report-card" >
              <div className="Post" ref={ref}> 
              <div id="report-cont">
              
                  <Row>
                    <Col>
                      {" "}
                      <img  className="report-logo"
                        src={
                          require("assets/img/wonder-lanka-logo.png").default
                        }
                        ></img>
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

                  <br></br>
                  
                  <Row>
                    <Col>Tour Id : {props.tourId}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Cancellation Date : {props.cancellationdate}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Reason : {props.reason}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Amount : {props.amount}</Col>
                  </Row>
                  
		  <br></br>
                  <br></br>
                 
                  <br></br>
              </div>
              </div>
              </Card>
             
            </Col>
          </Row>
          <br></br>
          <Container>
          <div className="reportdownload">
            <Row>
              <Col>
                <Pdf targetRef={ref} filename="post.pdf">
                {({ toPdf }) => 
                <button style={{float:"right"}}  className="btn btn-info btn-edit-booking custom" onClick={toPdf}
            > Capture as Pdf</button>}
                </Pdf>
              </Col>
              <Link to="/booktable">
              <Col>
                    <Button className="btn btn-info btn-edit-booking custom" onClick="ViewTable">View Table</Button>
              </Col>
              </Link>
            </Row>
            </div>
          </Container>
            <br/>
          </div>
        </>
        
    );
}

export default PDF; 