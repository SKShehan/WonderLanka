import React from "react";
import { useState, useEffect } from "react";

import {
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Link } from "react-router-dom";

function UserProfile({ user }) {
  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("index");
    document.getElementById("profile-card").classList.remove("card");
    document.getElementById("profile-card-blue").classList.remove("card");

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
          <h2 align="center">User Profile</h2>
          <hr></hr>
          <br></br>
          <>
            <div className="user-profile-div">
              <Card className="profile-card" id="profile-card">
                <table width="100%">
                  <tr>
                    <td
                      style={{
                        width: "35%",
                        height: "300px",
                      }}
                    >
                      <Card
                        className="profile-card-blue"
                        id="profile-card-blue"
                      >
                        <CardBody>
                          <CardTitle>
                            <img
                              src={require("assets/img/profile.png").default}
                              className="profile-img"
                            ></img>
                          </CardTitle>

                          <CardTitle>
                            <label className="profile-name">
                              <b>{user.fullName}</b>
                            </label>
                          </CardTitle>
                          <CardSubtitle>{user.country}</CardSubtitle>
                        </CardBody>
                      </Card>
                    </td>
                    <td style={{ paddingLeft: "20px" }}>
                      <Row>
                        <Col>
                          <label>E-Mail : {user.email}</label>
                        </Col>
                        <Col>
                          <label>Mobile No. : {user.mobileNo}</label>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>
                          <label>Date of Birth : {user.dob}</label>
                        </Col>
                        <Col>
                          <label>NIC : {user.nic}</label>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>

                      <Row>
                        <Col>
                          <Link to={{ pathname: "/edit-profile" }}>
                            Edit Profile
                          </Link>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col>
                          <Link to={{ pathname: "/change-password" }}>
                            Change Password
                          </Link>
                        </Col>
                      </Row>
                      <br></br>
                      <Row>
                        <Col>
                          <Link to={{ pathname: "/unregister" }}>
                            Unregsiter
                          </Link>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </table>
              </Card>
            </div>
          </>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default UserProfile;