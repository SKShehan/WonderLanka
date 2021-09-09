import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import UserProfile from "./UserProfile";

function Dashboard() {
  const history = useHistory();
  document.documentElement.classList.remove("nav-open");

  const clickMyTours = () => {
    history.push({
      pathname: "/my-tours",
    });
  };
  const clickUserProfile = () => {
    history.push({
      pathname: "/user-profile",
    });
  };
  const clickTourItineraries = () => {
    alert("Kohe yannada hutto");
  };
  const clickComplaintFeedaback = () => {
    alert("Kohe yannada hutto");
  };

  useEffect(() => {
    document.body.classList.add("index");
    document.getElementById("card1").classList.remove("card");
    document.getElementById("card2").classList.remove("card");
    document.getElementById("card3").classList.remove("card");
    document.getElementById("card4").classList.remove("card");

    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);

  return (
    <>
      <ProfilePageHeader></ProfilePageHeader>
      <IndexNavbar></IndexNavbar>

      <div className="main">
        <div className="edit-booking-content">
          <h2 align="center">Dashboard</h2>
          <hr></hr>
          <br></br>
          <div className="dashboard-content">
            <Row>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card1"
                  onClick={clickTourItineraries}
                >
                  Tour Itineraries
                  <label className="dashboard-card-subtitle">
                    View all the tour itineraries we offer.
                  </label>
                </Card>
              </Col>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card2"
                  onClick={clickMyTours}
                >
                  My Tours
                  <label className="dashboard-card-subtitle">
                    View & manage all your bookings.
                  </label>
                </Card>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <Row>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card3"
                  onClick={clickComplaintFeedaback}
                >
                  Complaints & Feedbacks
                  <label className="dashboard-card-subtitle">
                    Raise complaints, provide feedback.
                  </label>
                </Card>
              </Col>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card4"
                  onClick={clickUserProfile}
                >
                  User Profile
                  <label className="dashboard-card-subtitle">
                    Manage your user profile.
                  </label>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default Dashboard;
