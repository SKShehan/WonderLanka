import { React, usesState, useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import { useLocation } from "react-router-dom";

import Datetime from "react-datetime";

import { Row, Col } from "reactstrap";

function EditBooking() {
  const location = useLocation();
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
          <h2 align="center"> Edit Booking Details</h2>
          <hr></hr>
          <br></br>
          <p className="text-danger">
            <b>*You can only edit your personal details.</b>
          </p>
          <br></br>
          <label>Booking Info.</label>
          <br></br>
          <label className="tour-label-title">Booking ID :</label>
          <label className="tour-label-info">{location.state.id}</label>
          <label className="tour-label-title">Tour Itinerary :</label>
          <label className="tour-label-info">{location.state.itinerary}</label>
          <label className="tour-label-title">Date :</label>
          <label className="tour-label-info">{location.state.date}</label>
          <br></br>
          <br></br>
          <form className="edit-booking-form">
            <label>Your Personal Details</label>
            <table width="100%" border="0px">
              <tr>
                <td style={{ width: "50%", paddingRight: "10px" }}>
                  <label>Full Name*</label>
                  <input
                    className="form-control"
                    placeholder="Full Name*"
                    style={{ width: "100%" }}
                    value={location.state.fullName}
                  ></input>
                </td>
                <td style={{ paddingRight: "10px" }}>
                  <label>Country*</label>
                  <input
                    className="form-control input-tour-edit"
                    style={{ width: "100%" }}
                    placeholder="Country*"
                    value={location.state.country}
                  ></input>
                </td>
                <td>
                  <label>Mobile Number*</label>
                  <input
                    className="form-control"
                    style={{ width: "100%" }}
                    placeholder="Mobile Number*"
                    value={location.state.mobileNo}
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
                  ></input>
                </td>
                <td style={{ paddingRight: "10px" }}>
                  <label>Arrival Date*</label>
                  <Datetime
                    timeFormat={false}
                    inputProps={{ placeholder: "Arrival Date*" }}
                    value={location.state.arrivalDate}
                  />
                </td>
              </tr>
              <br></br>
              <tr>
                <td colSpan="3">
                  <input
                    className="btn btn-primary btn-edit-booking"
                    type="submit"
                    value="Save"
                  />
                </td>
              </tr>
            </table>
          </form>
        </div>

        <DemoFooter />
      </div>
    </>
  );
}

export default EditBooking;
