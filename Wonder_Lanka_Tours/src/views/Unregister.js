import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import {
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Card,
  Alert,
  Container,
  Button,
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Unregister({ user }) {
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

  const unregReason = () => {
    const unreg = {
      fullName: user.fullName,
      unregisteredDate: new Date().toISOString().slice(0, 10),
      reason,
    };
    axios
      .post(`http://localhost:8070/unregUser/add`, unreg)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteBookings = () => {
    axios
      .delete(`http://localhost:8070/bookings/delete/${user.username}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password != user.password) {
      toast.error("Incorrect Password!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 10000,
        hideProgressBar: false,
      });
    } else {
      axios
        .delete(`http://localhost:8070/users/delete/${user.username}`)
        .then(() => {
          unregReason();
          deleteBookings();
          toast.success("Successfull!", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 10000,
            hideProgressBar: false,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong :(", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 10000,
            hideProgressBar: false,
          });
        });
    }
  };

  const demo = () => {
    setpassword("pass123");
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
              <Row>
                <Col>
                  <Button
                    className="btn btn-danger"
                    style={{
                      float: "right",
                    }}
                    onClick={demo}
                  >
                    Demo
                  </Button>
                </Col>
              </Row>
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
                        required={other}
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

export default Unregister;
