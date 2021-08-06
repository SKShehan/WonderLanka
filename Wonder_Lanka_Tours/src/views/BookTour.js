import React from "react";
import { useState, useEffect } from "react";

import { Label, Input, FormGroup, Row, Col } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function BookTour() {
  const [customize, setcustomize] = useState(false);
  const [itinerary, setitinerary] = useState("");
  const [customizedItinerary, setcustomizedItinerary] = useState("");
  const [insurance, setinsurance] = useState("");
  const [iclass, seticlass] = useState("");
  const [fullName, setfullName] = useState("");
  const [country, setcountry] = useState("");
  const [email, setemail] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [arrivalDate, setarrivalDate] = useState("");
  const [adults, setadults] = useState("");
  const [kids18, setkids18] = useState("");
  const [kids8, setkids8] = useState("");

  const [itineraryList, setitineraryList] = useState([
    "Tour Itinerary 1",
    "Tour Itinerary 2",
    "Tour Itinerary 3",
    "Tour Itinerary 4",
    "Customized",
  ]);
  const [insuranceList, setinsuranceList] = useState([
    "Insurance 1",
    "Insurance 2",
    "Insurance 3",
    "Insurance 4",
  ]);

  const [classList, setclassList] = useState([
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
  ]);

  const selectItinerary = (itinerary) => {
    setitinerary(itinerary);
    if (itinerary === "Customized") setcustomize(true);
    else setcustomize(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (itinerary !== "Customized") {
      setcustomizedItinerary("");
    }

    const bookingDetails = {
      fullName,
      country,
      email,
      mobileNo,
      arrivalDate,
      itinerary,
      customizedItinerary,
      insurance,
      iclass,
      adults,
      kids18,
      kids8,
    };

    console.log(bookingDetails);
  };

  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("index");

    setitinerary(itineraryList[0]);
    setinsurance(insuranceList[0]);
    seticlass(classList[0]);
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
          <h2 align="center"> Tour Booking</h2>
          <hr></hr>
          <br></br>
          <div className="booking-div">
            <form onSubmit={onSubmit}>
              <Row>
                <Col>
                  <FormGroup align="center">
                    <label>Please fill the form given below and submit.</label>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="fullName">Full Name*</Label>
                    <Input
                      type="text"
                      name="fullName"
                      id="fullName"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => {
                        setfullName(e.target.value);
                      }}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="country">Country*</Label>
                    <Input
                      type="text"
                      name="country"
                      placeholder="Country"
                      value={country}
                      onChange={(e) => {
                        setcountry(e.target.value);
                      }}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="email">E-Mail Address*</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="mobileNo">Mobile Number*</Label>
                    <Input
                      type="text"
                      name="mobileNo"
                      id="mobileNo"
                      placeholder="Mobile Number"
                      value={mobileNo}
                      onChange={(e) => {
                        setmobileNo(e.target.value);
                      }}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="date">Arrival Date*</Label>
                    <Input
                      type="date"
                      name="date"
                      id="date"
                      placeholder="Arrival Date"
                      value={arrivalDate}
                      onChange={(e) => {
                        setarrivalDate(e.target.value);
                      }}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="itinerary">Tour Itinerary*</Label>
                    <Input
                      type="select"
                      name="itinerary"
                      id="itinerary"
                      value={itinerary}
                      onChange={(e) => {
                        selectItinerary(e.target.value);
                      }}
                      required
                    >
                      {itineraryList.map((i) => (
                        <option>{i}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  {customize && (
                    <FormGroup>
                      <Input
                        type="textarea"
                        name="customizedItinerary"
                        id="customizedItinerary"
                        placeholder="Write here..."
                        value={customizedItinerary}
                        onChange={(e) => {
                          setcustomizedItinerary(e.target.value);
                        }}
                        required={customize}
                      />
                    </FormGroup>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="select">Insurance*</Label>
                    <Input
                      type="select"
                      name="insurance"
                      id="insurance"
                      value={insurance}
                      onChange={(e) => {
                        setinsurance(e.target.value);
                      }}
                      required
                    >
                      {insuranceList.map((i) => (
                        <option>{i}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="select">Class*</Label>
                    <Input
                      type="select"
                      name="class"
                      id="class"
                      value={iclass}
                      onChange={(e) => {
                        seticlass(e.target.value);
                      }}
                      required
                    >
                      {classList.map((i) => (
                        <option>{i}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="adults">Number of Aduts*</Label>
                    <Input
                      type="text"
                      name="adults"
                      id="adults"
                      placeholder="0"
                      value={adults}
                      onChange={(e) => {
                        setadults(e.target.value);
                      }}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="kids18">
                      Number of Kids (Under Age of 18)*
                    </Label>
                    <Input
                      type="text"
                      name="kids18"
                      id="kids18"
                      placeholder="0"
                      value={kids18}
                      onChange={(e) => {
                        setkids18(e.target.value);
                      }}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="kids8">Number of Kids (Under Age of 8)*</Label>
                    <Input
                      type="text"
                      name="kids8"
                      id="kids8"
                      placeholder="0"
                      value={kids8}
                      onChange={(e) => {
                        setkids8(e.target.value);
                      }}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="text-danger">
                    *Payment will be calculated accordingly
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <input className="btn btn-danger submitBtn" type="submit" />
                  </FormGroup>
                </Col>
              </Row>
            </form>
          </div>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default BookTour;
