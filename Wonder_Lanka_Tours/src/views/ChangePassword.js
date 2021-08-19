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
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function BookTour({ user }) {
  const [currentpwd, setcurrentpwd] = useState("");
  const [newpass, setnewpass] = useState("");
  const [renewpass, setrenewpass] = useState("");
  const [alertDanger, setAlertDanger] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alert, setalert] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentpwd === user.password) {
      if (renewpass === newpass) {
        const newpwd = {
          password: newpass,
        };

        axios
          .put(`http://localhost:8070/users/changepwd/${user.username}`, newpwd)
          .then((res) => {
            console.log(res);
            user.password = newpwd.password;
            setalert(res.data);
            setAlertDanger(false);
            setAlertSuccess(true);
          })
          .catch((err) => {
            console.log(err);
            setalert("Something went wrong!");
            setAlertDanger(true);
            setAlertSuccess(false);
          });
      } else {
        setalert("Please re-enter your new password correctly!");
        setAlertDanger(true);
        setAlertSuccess(false);
      }
    } else {
      setalert("Please check your current passowrd!");
      setAlertDanger(true);
      setAlertSuccess(false);
    }
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
              <Alert color="success" isOpen={alertSuccess}>
                <Container>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={() => setAlertSuccess(false)}
                  >
                    <i className="nc-icon nc-simple-remove" />
                  </button>
                  <span>{alert}</span>
                </Container>
              </Alert>
              <Alert
                className="alert-with-icon"
                color="danger"
                isOpen={alertDanger}
              >
                <Container>
                  <div className="alert-wrapper">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="alert"
                      aria-label="Close"
                      onClick={() => setAlertDanger(false)}
                    >
                      <i className="nc-icon nc-simple-remove" />
                    </button>
                    <span>{alert}</span>
                  </div>
                </Container>
              </Alert>
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
                        value={newpass}
                        onChange={(e) => {
                          setnewpass(e.target.value);
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
                        value={renewpass}
                        onChange={(e) => {
                          setrenewpass(e.target.value);
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
