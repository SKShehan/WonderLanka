import { React, useState, useEffect } from "react";
import axios from "axios";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import { useLocation, useHistory } from "react-router-dom";

import { Row, Col, Input, Alert, Container } from "reactstrap";
import { jsPDF } from "jspdf";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactSession } from "react-client-session";

toast.configure();

function ViewTour() {
  const location = useLocation();
  const history = useHistory();
  const [editing, setediting] = useState(false);
  const [tourId, settourId] = useState();
  const [payment, setpayment] = useState();
  const [bookingDate, setbookingDate] = useState();
  const [noOfAdults, setnoOfAdults] = useState();
  const [noOfKids8, setnoOfKids8] = useState();
  const [noOfKids18, setnoOfKids18] = useState();
  const [iclass, seticlass] = useState();
  const [fullName, setfullName] = useState();
  const [country, setcountry] = useState();
  const [mobileNo, setmobileNo] = useState();
  const [email, setemail] = useState();
  const [insurance, setinsurance] = useState();
  const [itinerary, setitinerary] = useState();
  const [arrivalDate, setarrivalDate] = useState();
  const [assignedGuide, setassignedGuide] = useState("Not Yet Assigned");
  const [assignedDriver, setassignedDriver] = useState("Not Yet Assigned");
  const [assignedVehicle, setassignedVehicle] = useState("Not Yet Assigned");
  const doc = new jsPDF("l", "pt", "a4");

  const clickGenerateReport = () => {
    const user = {
      tourId,
      bookingDate,
      fullName,
      country,
      email,
      mobileNo,
      arrivalDate,
      itinerary,
      insurance,
      iclass,
      noOfAdults,
      noOfKids18,
      noOfKids8,
      assignedDriver,
      assignedGuide,
      assignedVehicle,
      payment,
    };
    history.push({
      pathname: "/booking-report",
      state: user,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const updates = {
      fullName,
      country,
      mobileNo,
      email,
      arrivalDate,
    };
    axios
      .put(`http://localhost:8070/bookings/update/${location.state.tourId}`, {
        updates,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 10000,
          hideProgressBar: false,
        });
        toggleEditing();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 10000,
          hideProgressBar: false,
        });
      });
  };

  const getAssignedGuide = () => {
    axios
      .get(`http://localhost:8070/assignedGuides/get/${location.state.tourId}`)
      .then((res) => {
        if (res.data) {
          axios
            .get(`http://localhost:8070/guides/get/${res.data.guideId}`)
            .then((ress) => {
              if (ress.data) {
                setassignedGuide(ress.data.fName + " " + ress.data.lName);
              }
            });
        }
      });
  };
  const getAssignedVehcile = () => {
    axios
      .get(
        `http://localhost:8070/assignedVehicles/get/${location.state.tourId}`
      )
      .then((res) => {
        if (res.data) {
          axios
            .get(`http://localhost:8070/vehicles/${res.data.vehicleId}`)
            .then((ress) => {
              if (ress.data) {
                setassignedVehicle(ress.data.vname);
              }
            });
        }
      });
  };
  const getAssignedDriver = () => {
    axios
      .get(`http://localhost:8070/assignedDrivers/get/${location.state.tourId}`)
      .then((res) => {
        if (res.data) {
          axios
            .get(`http://localhost:8070/get/${res.data.driverId}`)
            .then((ress) => {
              if (ress.data) {
                setassignedDriver(
                  ress.data.firstname + " " + ress.data.lastname
                );
              }
            });
        }
      });
  };

  const generatePDF = () => {
    doc.html(document.getElementById("content"), {
      callback: function (pdf) {
        pdf.save("report.pdf");
      },
    });
  };

  const notify = (message) => {};
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

  const toggleEditing = () => {
    setediting(!editing);
  };

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    ReactSession.setStoreType("localStorage");
    if (ReactSession.get("user") != null) {
      if (location.state != null) {
        setfullName(location.state.fullName);
        setcountry(location.state.country);
        setmobileNo(location.state.mobileNo);
        setemail(location.state.email);
        setarrivalDate(location.state.arrivalDate);
        seticlass(location.state.iclass);
        setbookingDate(location.state.bookingDate);
        setnoOfAdults(location.state.noOfAdults);
        setnoOfKids18(location.state.noOfKids18);
        setnoOfKids8(location.state.noOfKids8);
        settourId(location.state.tourId);
        setpayment(location.state.payment);
        setinsurance(location.state.insurance);
        setitinerary(location.state.itinerary);
        getAssignedGuide();
        getAssignedDriver();
        getAssignedVehcile();
      }
    } else {
      history.push({
        pathname: "/login",
      });
    }

    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);

  if (!location.state) {
    history.push({
      pathname: "/my-tours",
    });
    return null;
  } else {
    return (
      <>
        <ProfilePageHeader></ProfilePageHeader>
        <IndexNavbar></IndexNavbar>
        <div className="main">
          <div className="edit-booking-content" id="content">
            <h2 align="center"> Tour Details</h2>
            <hr></hr>
            <br></br>
            <form className="edit-booking-form" onSubmit={onSubmit}>
              <label className="tour-det-label">Personal Details</label>
              <table width="100%" border="0px">
                <tr>
                  <td style={{ width: "50%", paddingRight: "10px" }}>
                    <label>Full Name*</label>
                    <input
                      className="form-control"
                      placeholder="Full Name*"
                      style={{ width: "100%" }}
                      value={fullName}
                      onChange={(e) => {
                        setfullName(e.target.value);
                      }}
                      disabled={!editing}
                      required
                    ></input>
                  </td>
                  <td style={{ paddingRight: "10px" }}>
                    <label>Country*</label>
                    <Input
                      type="select"
                      id="country"
                      name="country"
                      value={country}
                      placeholder="Country"
                      onChange={(e) => {
                        setcountry(e.target.value);
                      }}
                      disabled={!editing}
                      required
                    >
                      {countryList.map((i) => (
                        <option>{i}</option>
                      ))}
                    </Input>
                  </td>
                  <td>
                    <label>Mobile Number*</label>
                    <input
                      className="form-control"
                      style={{ width: "100%" }}
                      placeholder="Mobile Number*"
                      pattern="[+0-9]+"
                      value={mobileNo}
                      onChange={(e) => {
                        setmobileNo(e.target.value);
                      }}
                      disabled={!editing}
                      required
                    ></input>
                  </td>
                </tr>
                <br></br>
                <tr>
                  <td style={{ width: "50%", paddingRight: "10px" }}>
                    <label>E-Mail Address*</label>
                    <input
                      className="form-control"
                      placeholder="E-Mail Address*"
                      style={{ width: "100%" }}
                      value={email}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                      disabled={!editing}
                      required
                    ></input>
                  </td>
                  <td style={{ paddingRight: "10px" }}>
                    <label>Arrival Date*</label>
                    <Input
                      type="date"
                      name="date"
                      id="date"
                      placeholder="Arrival Date"
                      value={arrivalDate}
                      onChange={(e) => {
                        setarrivalDate(e.target.value);
                      }}
                      disabled={!editing}
                      required
                    />
                  </td>
                  <td></td>
                </tr>
              </table>
              {editing && (
                <>
                  <input
                    className="btn btn-primary btn-edit-booking"
                    type="submit"
                    value="Save"
                  />
                </>
              )}
            </form>
            {editing && (
              <input
                className="btn btn-default btn-edit-booking"
                type="submit"
                value="Cancel"
                onClick={() => {
                  toggleEditing();
                }}
              />
            )}
            {!editing && (
              <button
                className="btn btn-danger btn-edit-booking"
                onClick={() => {
                  toggleEditing();
                }}
              >
                Edit
              </button>
            )}
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <label className="tour-det-label">Tour Details</label>
            <br></br>
            <br></br>
            <Row>
              <Col>
                <label className="tour-det-head">Booking ID :</label>
                <label className="tour-det-text">{tourId}</label>
              </Col>
              <Col>
                <label className="tour-det-head">Date :</label>
                <label className="tour-det-text">{bookingDate}</label>
              </Col>
              <Col></Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <label className="tour-det-head">Tour Itinerary :</label>
                <label className="tour-det-text">{itinerary}</label>
              </Col>
              <Col>
                <label className="tour-det-head">Insurance Plan :</label>
                <label className="tour-det-text">{insurance}</label>
              </Col>
              <Col>
                <label className="tour-det-head">Class :</label>
                <label className="tour-det-text">{iclass}</label>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <label className="tour-det-head">Number of Adults :</label>
                <label className="tour-det-text">{noOfAdults}</label>
              </Col>
              <Col>
                <label className="tour-det-head">
                  Number of Kids (Under Age of 18) :
                </label>
                <label className="tour-det-text">{noOfKids18}</label>
              </Col>
              <Col>
                <label className="tour-det-head">
                  Number of Kids (Under Age of 8) :
                </label>
                <label className="tour-det-text">{noOfKids8}</label>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <label className="tour-det-head">Tour Guide :</label>
                <label className="tour-det-text">{assignedGuide}</label>
              </Col>
              <Col>
                <label className="tour-det-head">Driver :</label>
                <label className="tour-det-text">{assignedDriver}</label>
              </Col>
              <Col>
                <label className="tour-det-head">Vehicle :</label>
                <label className="tour-det-text">{assignedVehicle}</label>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <label className="tour-det-head">Payment :</label>
                <label className="tour-det-text">
                  LKR&nbsp;
                  {payment}
                </label>
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <button
                  className="btn btn-info btn-edit-booking"
                  onClick={clickGenerateReport}
                >
                  Generate Report
                </button>
              </Col>
            </Row>
            <br></br>
            <br></br>
          </div>

          <DemoFooter />
        </div>
      </>
    );
  }
}

export default ViewTour;
