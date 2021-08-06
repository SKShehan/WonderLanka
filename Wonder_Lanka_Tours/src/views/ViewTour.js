import { React, useState, useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import { useLocation } from "react-router-dom";

import { Row, Col, Input } from "reactstrap";

function ViewTour() {
  const location = useLocation();
  const [editing, setediting] = useState(false);

  const toggleEditing = () => {
    setediting(!editing);
  };
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <ProfilePageHeader></ProfilePageHeader>
      <IndexNavbar></IndexNavbar>
      <div className="main">
        <div className="edit-booking-content">
          <h2 align="center"> Tour Details</h2>
          <hr></hr>
          <br></br>

          <form className="edit-booking-form">
            <label className="tour-det-label">Personal Details</label>
            <table width="100%" border="0px">
              <tr>
                <td style={{ width: "50%", paddingRight: "10px" }}>
                  <label>Full Name*</label>
                  <input
                    className="form-control"
                    placeholder="Full Name*"
                    style={{ width: "100%" }}
                    value={location.state.fullName}
                    disabled={!editing}
                  ></input>
                </td>
                <td style={{ paddingRight: "10px" }}>
                  <label>Country*</label>
                  <input
                    className="form-control input-tour-edit"
                    style={{ width: "100%" }}
                    placeholder="Country*"
                    value={location.state.country}
                    disabled={!editing}
                  ></input>
                </td>
                <td>
                  <label>Mobile Number*</label>
                  <input
                    className="form-control"
                    style={{ width: "100%" }}
                    placeholder="Mobile Number*"
                    value={location.state.mobileNo}
                    disabled={!editing}
                  ></input>
                </td>
              </tr>
              <br></br>
              <tr>
                <td style={{ width: "50%", paddingRight: "10px" }}>
                  <label>E-Mail Address*</label>
                  <input
                    className="form-control"
                    placeholder="E-Mail Address*"
                    style={{ width: "100%" }}
                    value={location.state.email}
                    disabled={!editing}
                  ></input>
                </td>
                <td style={{ paddingRight: "10px" }}>
                  <label>Arrival Date*</label>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Arrival Date"
                    value={location.state.arrivalDate}
                    disabled={!editing}
                  />
                </td>
                <td></td>
              </tr>
              <br></br>
              <tr>
                <td colSpan="3">
                  {editing && (
                    <>
                      <input
                        className="btn btn-primary btn-edit-booking"
                        type="submit"
                        value="Save"
                        onClick={toggleEditing}
                      />
                      <input
                        className="btn btn-default btn-edit-booking"
                        type="submit"
                        value="Cancel"
                        onClick={toggleEditing}
                      />
                    </>
                  )}
                  {!editing && (
                    <button
                      className="btn btn-danger btn-edit-booking"
                      onClick={toggleEditing}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            </table>
          </form>
          <hr></hr>
          <br></br>
          <label className="tour-det-label">Tour Details</label>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <label className="tour-det-head">Booking ID :</label>
              <label className="tour-det-text">{location.state.id}</label>
            </Col>
            <Col>
              <label className="tour-det-head">Date :</label>
              <label className="tour-det-text">{location.state.date}</label>
            </Col>
            <Col></Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <label className="tour-det-head">Tour Itinerary :</label>
              <label className="tour-det-text">
                {location.state.itinerary}
              </label>
            </Col>
            <Col>
              <label className="tour-det-head">Insurance Plan :</label>
              <label className="tour-det-text">
                {location.state.insurance}
              </label>
            </Col>
            <Col>
              <label className="tour-det-head">Class :</label>
              <label className="tour-det-text">{location.state.class}</label>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <label className="tour-det-head">Number of Adults :</label>
              <label className="tour-det-text">
                {location.state.noOfAdults}
              </label>
            </Col>
            <Col>
              <label className="tour-det-head">
                Number of Kids (Under Age of 18) :
              </label>
              <label className="tour-det-text">
                {location.state.noOfKids18}
              </label>
            </Col>
            <Col>
              <label className="tour-det-head">
                Number of Kids (Under Age of 8) :
              </label>
              <label className="tour-det-text">
                {location.state.noOfKids8}
              </label>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <label className="tour-det-head">Tour Guide :</label>
              <label className="tour-det-text">
                {location.state.tourGuide}
              </label>
            </Col>
            <Col>
              <label className="tour-det-head">Driver :</label>
              <label className="tour-det-text">{location.state.driver}</label>
            </Col>
            <Col>
              <label className="tour-det-head">Vehicle :</label>
              <label className="tour-det-text">{location.state.vehicle}</label>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <label className="tour-det-head">Payment :</label>
              <label className="tour-det-text">
                USD&nbsp;
                {location.state.payment}
              </label>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <button
                className="btn btn-danger btn-edit-booking"
                style={{ width: "100%" }}
                onClick={() => {
                  window.location.replace(
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  );
                }}
              >
                DO NOT CLICK THIS! (MARU HABAY)
              </button>
            </Col>
          </Row>
          <br></br>
          <br></br>
        </div>

        <DemoFooter />
      </div>
    </>
  );
}

export default ViewTour;
