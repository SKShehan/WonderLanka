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
import { ReactSession } from "react-client-session";
import { useHistory, useLocation } from "react-router-dom";

function UserProfile({}) {
  const [user, setuser] = useState();
  const history = useHistory();
  const [fullName, setfullName] = useState("");
  const [country, setcountry] = useState();
  const [email, setemail] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [nic, setnic] = useState("");
  const [username, setusername] = useState("");
  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("index");
    document.getElementById("profile-card").classList.remove("card");
    document.getElementById("profile-card-blue").classList.remove("card");
    ReactSession.setStoreType("localStorage");
    if (ReactSession.get("user") === null) {
      history.push({
        pathname: "/login",
      });
    } else {
      setusername(ReactSession.get("user").username);
      setfullName(ReactSession.get("user").fullName);
      setcountry(ReactSession.get("user").country);
      setnic(ReactSession.get("user").nic);
      setmobileNo(ReactSession.get("user").mobileNo);
      setemail(ReactSession.get("user").email);
      setdateOfBirth(ReactSession.get("user").dateOfBirth);
    }
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
                              src={
                                require("assets/img/userprofile.png").default
                              }
                              className="profile-img"
                            ></img>
                          </CardTitle>

                          <CardTitle>
                            <label className="profile-name">
                              <b>{fullName}</b>
                            </label>
                          </CardTitle>
                          <CardSubtitle>{country}</CardSubtitle>
                        </CardBody>
                      </Card>
                    </td>
                    <td style={{ paddingLeft: "20px" }}>
                      <Row>
                        <Col>
                          <label>E-Mail : {email}</label>
                        </Col>
                        <Col>
                          <label>Mobile No. : {mobileNo}</label>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row>
                        <Col>
                          <label>Date of Birth : {dateOfBirth}</label>
                        </Col>
                        <Col>
                          <label>NIC : {nic}</label>
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
