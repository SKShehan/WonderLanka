import React from "react";
import { useState } from "react";

import {
  Button,
  Label,
  Form,
  Card,
  Input,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function BookTour() {
  const [dropDownItinerary, setDropDownItinerary] = useState(false);
  const [dropDownInsurance, setDropDownInsurance] = useState(false);
  const [dropDownClass, setdropDownClass] = useState(false);
  const [customize, setcustomize] = useState(false);
  const [itinerary, setitinerary] = useState("Select Itinerary");
  const [insurance, setinsurance] = useState("Select Insurance");
  const [iclass, seticlass] = useState("Select Class");

  const toggleItinerary = () => {
    setDropDownItinerary(!dropDownItinerary);
  };

  const toggleInsurance = () => {
    setDropDownInsurance(!dropDownInsurance);
  };

  const toggleClass = () => {
    setdropDownClass(!dropDownClass);
  };

  const selectItinerary = (itinerary, status) => {
    setitinerary(itinerary);
    setcustomize(status);
  };

  const selectInsurance = (insurance) => {
    setinsurance(insurance);
  };

  const selectIClass = (iclass) => {
    seticlass(iclass);
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    document.getElementById("card").classList.remove("card");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <ProfilePageHeader></ProfilePageHeader>
      <IndexNavbar></IndexNavbar>
      <div className="main bookingBody">
        <div>
          <h2> Tour Booking</h2>
        </div>
        <div>
          <Card className="bookingCard" id="card">
            <h3 align="center">Tour Booking</h3>
            <br></br>
            <form className="register-form">
              <table width="100%">
                <tr>
                  <td>
                    <>First Name</>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      placeholder="First Name"
                      type="text"
                    />
                  </td>
                  <td>
                    <>Last Name</>
                    <input
                      style={{ width: "100%" }}
                      className="form-control"
                      placeholder="Last Name"
                      type="text"
                    />
                  </td>
                </tr>
              </table>
              <br></br>
              <>Mobile Number</>
              <input
                className="form-control"
                placeholder="Mobile Number"
                type="text"
                pattern="[0-9]"
              />
              <br></br>
              <>E-Mail Address</>
              <input
                className="form-control"
                placeholder="example@exaxple.com"
                type="text"
                pattern="[0-9]"
              />
              <br></br>
              <>Tour Itinerary</>
              <Dropdown isOpen={dropDownItinerary} toggle={toggleItinerary}>
                <DropdownToggle className="bookingDropdown" caret>
                  {itinerary}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={() => selectItinerary("Foo Action", false)}
                  >
                    Foo Action
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => selectItinerary("Bar Action", false)}
                  >
                    Bar Action
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => selectItinerary("Quo Action", false)}
                  >
                    Quo Action
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => selectItinerary("Customized", true)}
                  >
                    Customized
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <br></br>
              {customize && (
                <textarea
                  className="form-control textAreaItinerary"
                  placeholder="Write here..."
                ></textarea>
              )}
              {customize && <br></br>}
              <>Insurance Plan</>
              <Dropdown isOpen={dropDownInsurance} toggle={toggleInsurance}>
                <DropdownToggle className="bookingDropdown" caret>
                  {insurance}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => selectInsurance("Foo Action")}>
                    Foo Action
                  </DropdownItem>
                  <DropdownItem onClick={() => selectInsurance("Bar Action")}>
                    Bar Action
                  </DropdownItem>
                  <DropdownItem onClick={() => selectInsurance("Quo Action")}>
                    Quo Action
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <br></br>
              <>Class</>
              <Dropdown isOpen={dropDownClass} toggle={toggleClass}>
                <DropdownToggle className="bookingDropdown" caret>
                  {iclass}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => selectIClass("Foo Action")}>
                    Foo Action
                  </DropdownItem>
                  <DropdownItem onClick={() => selectIClass("Bar Action")}>
                    Bar Action
                  </DropdownItem>
                  <DropdownItem onClick={() => selectIClass("Quo Action")}>
                    Quo Action
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <br></br>
              <table width="100%">
                <tr>
                  <td> Number of Adults : </td>
                  <td style={{ paddingLeft: "10px" }}>
                    <input
                      style={{ width: "50px" }}
                      className="form-control"
                      value="0"
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: "20px" }}>Number of Kids :</td>
                </tr>
                <tr>
                  <td style={{ paddingTop: "20px" }}> Under Age of 18 : </td>
                  <td style={{ paddingLeft: "10px", paddingTop: "20px" }}>
                    <input
                      style={{ width: "50px" }}
                      className="form-control"
                      value="0"
                      type="text"
                    />
                  </td>
                  <td align="right" style={{ paddingTop: "20px" }}>
                    Under Age of 8 :
                  </td>
                  <td
                    align="right"
                    style={{ paddingLeft: "10px", paddingTop: "20px" }}
                  >
                    <input
                      style={{ width: "50px" }}
                      className="form-control"
                      value="0"
                      type="text"
                    />
                  </td>
                </tr>
              </table>
              <input className="btn btn-primary submitBtn" type="submit" />
              <button className="btn btn-danger cancelBtn">Cancel</button>
            </form>
          </Card>
        </div>

        <DemoFooter />
      </div>
    </>
  );
}

export default BookTour;
