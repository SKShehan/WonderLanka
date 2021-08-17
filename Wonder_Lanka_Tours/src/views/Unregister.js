import React from "react";
import { useState, useEffect } from "react";

import { Label, Input, FormGroup, Row, Col, Card } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function BookTour() {
  const [reason, setreason] = useState("");
  const [password, setpassword] = useState("");
  const [other, setother] = useState(false);
  const [reason1, setreason1] = useState(false);
  const [reason2, setreason2] = useState(false);
  const [reason3, setreason3] = useState(false);

  const selectReason1 = () => {
    setother(false);
    setreason2(false);
    setreason3(false);
    setreason1(true);
    setreason("Not satisfied with the service");
  };
  const selectReason2 = () => {
    setother(false);
    setreason1(false);
    setreason3(false);
    setreason2(true);
    setreason("Not satisfied with the itineraries");
  };
  const selectReason3 = () => {
    setother(false);
    setreason2(false);
    setreason1(false);
    setreason3(true);
    setreason("Not satisfied with the pricing");
  };
  const selectOther = () => {
    setreason2(false);
    setreason1(false);
    setreason3(false);
    setother(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("index");
    setreason1(true);
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
          <h2 align="center">Unregister</h2>
          <hr></hr>
          <br></br>
          <>
            <div className="unregister-div">
              <form onSubmit={onSubmit}>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="currentpwd">
                        Let us know why you want to unregister*
                      </Label>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="unregister-radio-div">
                  <Row>
                    <Col>
                      <FormGroup>
                        <Input
                          type="radio"
                          name="reason"
                          onClick={selectReason1}
                          checked={reason1}
                        />
                        Not satisfied with the service
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Input
                          type="radio"
                          name="reason"
                          onClick={selectReason2}
                          checked={reason2}
                        />{" "}
                        Not satisfied with the itineraries
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Input
                          type="radio"
                          name="reason"
                          onClick={selectReason3}
                          checked={reason3}
                        />{" "}
                        Not satisfied with the pricing
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Input
                          type="radio"
                          name="reason"
                          onClick={selectOther}
                          checked={other}
                        />{" "}
                        Other (please explain further) :
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <br></br>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input
                        type="textarea"
                        name="reason-other"
                        placeholder="Write here..."
                        onChange={(e) => {
                          setreason(e.target.value);
                        }}
                        disabled={!other}
                      ></Input>
                    </FormGroup>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="password">Enter Your Password*</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => {
                          setpassword(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <label className="text-danger">
                      *Your account will be deleted permanently
                    </label>
                  </Col>
                </Row>
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
