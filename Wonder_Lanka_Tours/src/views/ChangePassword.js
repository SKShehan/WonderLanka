import React from "react";
import { useState, useEffect } from "react";

import { Label, Input, FormGroup, Row, Col, Card } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function BookTour() {
  const [currentpwd, setcurrentpwd] = useState("");
  const [newpwd, setnewpwd] = useState("");
  const [renewpwd, setrenewpwd] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("index");

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
          <h2 align="center">Change Password</h2>
          <hr></hr>
          <br></br>
          <>
            <div className="chng-pwd-div">
              <form onSubmit={onSubmit}>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="currentpwd">Current Password*</Label>
                      <Input
                        type="password"
                        name="currentpwd"
                        id="currentpwd"
                        value={currentpwd}
                        onChange={(e) => {
                          setcurrentpwd(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="newpwd">New Password*</Label>
                      <Input
                        type="password"
                        id="newpwd"
                        name="newpwd"
                        value={newpwd}
                        onChange={(e) => {
                          setnewpwd(e.target.value);
                        }}
                        required
                      ></Input>
                    </FormGroup>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="renewpwd">Re-enter New Password*</Label>
                      <Input
                        type="password"
                        name="renewpwd"
                        id="renewpwd"
                        value={renewpwd}
                        onChange={(e) => {
                          setrenewpwd(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <FormGroup>
                      <input
                        className="btn btn-info submitBtn"
                        type="submit"
                        value="Confirm"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </form>
            </div>
          </>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default BookTour;
