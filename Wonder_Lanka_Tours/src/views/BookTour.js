import React from "react";
import { useState, useEffect } from "react";

import { Label, Input, FormGroup, Row, Col, Card } from "reactstrap";

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
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "The Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Republic of the",
    "Congo, Democratic Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "The Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City (Holy See)",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

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

    setcountry(countryList[0]);
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
          <>
            <div className="booking-div">
              <form onSubmit={onSubmit}>
                <Row>
                  <Col>
                    <FormGroup align="center">
                      <label>
                        Please fill the form given below and submit.
                      </label>
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
                        type="select"
                        id="country"
                        name="country"
                        value={country}
                        placeholder="Country"
                        onChange={(e) => {
                          setcountry(e.target.value);
                        }}
                      >
                        {countryList.map((i) => (
                          <option>{i}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
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
                      <Label for="kids8">
                        Number of Kids (Under Age of 8)*
                      </Label>
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
                      <input
                        className="btn btn-danger submitBtn"
                        type="submit"
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
