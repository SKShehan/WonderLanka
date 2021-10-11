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
import { ReactSession } from "react-client-session";

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
    history.push({
      pathname: "view-itineraries",
    });
  };
  const clickComplaint = () => {
    history.push({
      pathname: "/my-complaint",
    });
  };
  const clickFeedaback = () => {
    history.push({
      pathname: "/my-feedback",
    });
  };

  useEffect(() => {
    ReactSession.setStoreType("localStorage");
    if (ReactSession.get("user") != null) {
      document.body.classList.add("index");
      document.getElementById("card1").classList.remove("card");
      document.getElementById("card2").classList.remove("card");
      document.getElementById("card3").classList.remove("card");
      document.getElementById("card4").classList.remove("card");
      document.getElementById("card5").classList.remove("card");

      return function cleanup() {
        document.body.classList.remove("index");
      };
    } else {
      history.push({
        pathname: "/login",
      });
    }
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
                  <img
                    src={require("assets/img/beach.png").default}
                    className="dashboard-icon"
                  />
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
                  <img
                    src={require("assets/img/calendar.png").default}
                    className="dashboard-icon"
                  />
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
                  onClick={clickComplaint}
                >
                  <img
                    src={require("assets/img/question.png").default}
                    className="dashboard-icon"
                  />
                  My Complaints
                  <label className="dashboard-card-subtitle">
                    Raise a complaint.
                  </label>
                </Card>
              </Col>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card4"
                  onClick={clickFeedaback}
                >
                  <img
                    src={require("assets/img/rating.png").default}
                    className="dashboard-icon"
                  />
                  My Feedbacks
                  <label className="dashboard-card-subtitle">
                    Provide a feedback.
                  </label>
                </Card>
              </Col>
              <Col>
                <Card
                  className="dashboard-card"
                  id="card5"
                  onClick={clickUserProfile}
                >
                  <img
                    src={require("assets/img/userprofile.png").default}
                    className="dashboard-icon"
                  />
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
