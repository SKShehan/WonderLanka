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

function BookTour({ user }) {
  const [currentpwd, setcurrentpwd] = useState("");
  const [newpass, setnewpass] = useState("");
  const [renewpass, setrenewpass] = useState("");
  const [alertDanger, setAlertDanger] = useState(false);

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
            toast.success(res.data, {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 10000,
              hideProgressBar: false,
            });
          })
          .catch((err) => {
            console.log(err);
            toast.error("Something went wrong!", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 10000,
              hideProgressBar: false,
            });
          });
      } else {
        toast.error("Please re-enter your new password correctly!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 10000,
          hideProgressBar: false,
        });
      }
    } else {
      toast.error("Please check your current passowrd!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 10000,
        hideProgressBar: false,
      });
    }
  };

  const demo = () => {
    setcurrentpwd("pass123");
    setnewpass("abc123");
    setrenewpass("abc123");
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
                      <Label for="newpwd">
                        New Password (Must contain at least 8 characters)*
                      </Label>
                      <Input
                        type="password"
                        id="newpwd"
                        name="newpwd"
                        value={newpass}
                        pattern=".{6,}"
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
