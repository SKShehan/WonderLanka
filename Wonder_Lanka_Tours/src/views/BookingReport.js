import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Row, Col, Card } from "reactstrap";
import { jsPDF } from "jspdf";

function BookingReport({ user }) {
  const location = useLocation();
  const [date, setdate] = useState();
  let doc;

  const downloadPDF = () => {
    doc = new jsPDF("p", "pt", [1000, 600]);
    doc.html(document.getElementById("report-cont"), {
      callback: function (pdf) {
        pdf.save("report.pdf");
      },
    });
  };

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("index");
    document.getElementById("report").classList.remove("card");
    let today = new Date().toISOString().slice(0, 10);
    setdate(today);
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);

  return (
    <>
      <ProfilePageHeader></ProfilePageHeader>
      <IndexNavbar></IndexNavbar>
      <div className="main">
        <div className="my-tour-content">
          <h2 align="center">Report</h2>
          <hr></hr>
          <br></br>
          <Row>
            <Col>
              <Card className="report-card" id="report">
                <div id="report-cont">
                  <Row>
                    <Col>
                      {" "}
                      <img
                        src={require("assets/img/logo-test.png").default}
                        className="report-logo"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h4 className="report-title">Wonder Lanka Tours</h4>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>
                      <label style={{ float: "right" }}>
                        <i>Date : {date}</i>
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr></hr>
                    </Col>
                  </Row>
                  <br></br>
                  <Row>
                    <Col>Tour Id : {location.state.tourId}</Col>
                    <Col>Booking Date : {location.state.bookingDate}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Full Name : {location.state.fullName}</Col>
                    <Col>Country :{location.state.country}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Email : {location.state.email}</Col>
                    <Col>Mobile No. : {location.state.mobileNo}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Arrival Date :{location.state.arrivalDate}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Tour Itinerary : {location.state.itinerary}</Col>
                    <Col>Insurance Plan : {location.state.insurance}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Class : {location.state.iclass}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>No. of Adults : {location.state.noOfAdults}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>
                      No. of Kids (Under Age 18) : {location.state.noOfKids18}
                    </Col>
                    <Col>
                      No. of Kids (Under Age 8) : {location.state.noOfKids8}
                    </Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Tour Guide : {location.state.assignedGuide}</Col>
                    <Col>Driver : {location.state.assignedDriver}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Vehicle : {location.state.assignedVehicle}</Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <Col>Payment : USD &nbsp;{location.state.payment}</Col>
                  </Row>
                  <br></br>
                </div>
              </Card>
            </Col>
          </Row>
          <br></br>
          <div className="report-download">
            <Row>
              <Col>
                <button
                  className="btn btn-info btn-edit-booking"
                  onClick={downloadPDF}
                >
                  Dwonload PDF
                </button>
              </Col>
            </Row>
          </div>
        </div>

        <DemoFooter />
      </div>
    </>
  );
}

export default BookingReport;
