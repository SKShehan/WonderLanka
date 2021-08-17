import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Label, Input, FormGroup, Row, Col, Card } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function BookTour() {
  const location = useLocation();
  const [fullName, setfullName] = useState("");
  const [country, setcountry] = useState();
  const [email, setemail] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [nic, setnic] = useState("");
  const [username, setusername] = useState("");

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

  const onSubmit = (e) => {
    e.preventDefault();
  };

  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("index");
    setusername(location.state.username);
    setfullName(location.state.fullName);
    setcountry(location.state.country);
    setnic(location.state.nic);
    setmobileNo(location.state.mobileNo);
    setemail(location.state.email);
    setdateOfBirth(location.state.dob);

    setcountry(countryList[0]);
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
          <h2 align="center">Edit Profile</h2>
          <hr></hr>
          <br></br>
          <>
            <div className="booking-div">
              <form onSubmit={onSubmit}>
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
                          <option value={i}>{i}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="nic">NIC*</Label>
                      <Input
                        type="text"
                        name="nic"
                        id="nic"
                        placeholder="NIC"
                        value={nic}
                        onChange={(e) => {
                          setnic(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="date">Date of birth*</Label>
                      <Input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="Arrival Date"
                        value={dateOfBirth}
                        onChange={(e) => {
                          setdateOfBirth(e.target.value);
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
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="username">Username*</Label>
                      <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                          setusername(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="email">E-Mail Address*</Label>
                      <Input
                        type="text"
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
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <FormGroup>
                      <input
                        className="btn btn-info submitBtn"
                        type="submit"
                        value="Save"
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
