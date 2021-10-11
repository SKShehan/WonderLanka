import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import { Label, Input, FormGroup, Row, Col, Card, Button } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ReactSession } from "react-client-session";
import { useHistory, useLocation } from "react-router-dom";

toast.configure();

function BookTour({ user }) {
  const [customize, setcustomize] = useState(false);
  const [itinerary, setitinerary] = useState("");
  const [customziedItinerary, setcustomizedItinerary] = useState("");
  const [insurance, setinsurance] = useState("");
  const [iclass, seticlass] = useState("");
  const [fullName, setfullName] = useState("");
  const [country, setcountry] = useState("");
  const [email, setemail] = useState("");
  const [mobileNo, setmobileNo] = useState("");
  const [arrivalDate, setarrivalDate] = useState("");
  const [noOfAdults, setnoOfAdults] = useState();
  const [noOfKids18, setnoOfKids18] = useState();
  const [noOfKids8, setnoOfKids8] = useState();
  const [username, setusername] = useState("");
  let payment = 0;
  const [bookingDate, setbookingDate] = useState();
  const history = useHistory();
  const location = useLocation();

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

  const demo = () => {
    setfullName("James Anderson");
    setcountry("United Kingdom");
    setmobileNo("94772665133");
    setemail("james@gmail.com");
    setarrivalDate("2021-10-21");
    setitinerary("Polonnaruwa");
    seticlass("Standard");
    setinsurance("Insurance 1");
    setnoOfAdults(4);
    setnoOfKids18(2);
    setnoOfKids8(0);
  };

  const getGeoInfo = async () => {
    await axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setcountry(data.country_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [itineraryList, setitineraryList] = useState([
    {
      itineraryName: "Customized",
    },
  ]);
  const [insuranceList, setinsuranceList] = useState([
    "Insurance 1",
    "Insurance 2",
    "Insurance 3",
    "Insurance 4",
    "Insurance 5",
  ]);

  const [classList, setclassList] = useState(["Standard", "Deluxe"]);

  const getItineraries = () => {
    axios.get("http://localhost:8070/itineraries").then((res) => {
      console.log(res.data);
      setitineraryList([...res.data, ...itineraryList]);
    });
  };

  const selectItinerary = (itinerary) => {
    setitinerary(itinerary);
    if (itinerary === "Customized") setcustomize(true);
    else setcustomize(false);
  };

  const calcPayment = () => {
    for (var i = 0; i < itineraryList.length; i++) {
      if (itineraryList[i].itineraryName === itinerary) {
        if (itineraryList[i].itineraryClass === iclass) {
          payment +=
            itineraryList[i].itineraryPriceAdult * noOfAdults +
            itineraryList[i].itineraryPriceChild * noOfKids18;
          if (insurance == "Insurance 1") {
            payment += 100000;
          } else if (insurance == "Insurance 2") {
            payment += 50000;
          } else if (insurance == "Insurance 3") {
            payment += 30000;
          } else if (insurance == "Insurance 4") {
            payment += 130000;
          } else if (insurance == "Insurance 5") {
            payment += 200000;
          }

          break;
        }
      }
    }
    console.log(payment);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (itinerary !== "Customized") {
      setcustomizedItinerary("");
      calcPayment();
    }

    const bookingDetails = {
      username,
      fullName,
      country,
      mobileNo,
      email,
      arrivalDate,
      itinerary,
      customziedItinerary,
      insurance,
      iclass,
      noOfAdults,
      noOfKids18,
      noOfKids8,
      payment,
      bookingDate,
    };

    console.log(bookingDetails);

    axios
      .post("http://localhost:8070/bookings/add", { bookingDetails })
      .then((res) => {
        console.log(res);
        toast.success(res.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 10000,
          hideProgressBar: false,
        });
      });
  };

  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("index");
    ReactSession.setStoreType("localStorage");
    if (ReactSession.get("user") === null) {
      history.push({
        pathname: "/login",
      });
    } else {
      getItineraries();
      setcountry(countryList[0]);
      setusername(ReactSession.get("user").username);
      setfullName(ReactSession.get("user").fullName);
      setcountry(ReactSession.get("user").country);
      setemail(ReactSession.get("user").email);
      setmobileNo(ReactSession.get("user").mobileNo);
      setcountry(ReactSession.get("user").country);

      if (location.state == null) {
        setitinerary(itineraryList[0].itineraryName);
      } else {
        setitinerary(location.state.itineraryTitle);
        console.log(location.state.itineraryTitle);
      }

      if (location.state == null) {
        seticlass(classList[0]);
      } else {
        seticlass(location.state.itineraryClass);
        console.log(location.state.itineraryClass);
      }

      setinsurance(insuranceList[0]);

      let today = new Date().toISOString().slice(0, 10);
      setbookingDate(today);
      return function cleanup() {
        document.body.classList.remove("index");
      };
    }
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
                        placeholder="000-000-0000"
                        pattern="[+0-9]+"
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
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                        {[
                          ...new Set(itineraryList.map((i) => i.itineraryName)),
                        ].map((i) => (
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
                          value={customziedItinerary}
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
                        pattern="[0-9]+"
                        value={noOfAdults}
                        onChange={(e) => {
                          setnoOfAdults(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="kids18">Number of Kids (Under Age 18)*</Label>
                      <Input
                        type="text"
                        name="kids18"
                        id="kids18"
                        placeholder="0"
                        pattern="[0-9]+"
                        value={noOfKids18}
                        onChange={(e) => {
                          setnoOfKids18(e.target.value);
                        }}
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="kids8">Number of Kids (Under Age 8)*</Label>
                      <Input
                        type="text"
                        name="kids8"
                        id="kids8"
                        placeholder="0"
                        pattern="[0-9]+"
                        value={noOfKids8}
                        onChange={(e) => {
                          setnoOfKids8(e.target.value);
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
                      <input className="btn btn-info submitBtn" type="submit" />
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
