import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import TourComponent from "components/TourComponent";

import { ReactSession } from "react-client-session";

function MyTours({}) {
  const [tours, settours] = useState([]);
  const history = useHistory();

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    ReactSession.setStoreType("localStorage");
    if (ReactSession.get("user") != null) {
      axios
        .get(
          `https://wonderlanka-backend.herokuapp.com/bookings/get/${
            ReactSession.get("user").username
          }`
        )
        .then((res) => {
          settours(res.data);
        });

      document.body.classList.add("index");
      return function cleanup() {
        document.body.classList.remove("index");
      };
    } else {
      history.push({
        pathname: "/login",
      });
    }
  }, []);
  if (tours === null) {
    return (
      <>
        <ProfilePageHeader></ProfilePageHeader>
        <IndexNavbar></IndexNavbar>
        <div className="main">
          <div className="my-tour-content">
            <h2 align="center"> My Tours</h2>
            <hr></hr>
            <br></br>
            <div style={{ textAlign: "center" }}>Nothing to see here.</div>
          </div>

          <DemoFooter />
        </div>
      </>
    );
  } else {
    return (
      <>
        <ProfilePageHeader></ProfilePageHeader>
        <IndexNavbar></IndexNavbar>
        <div className="main">
          <div className="my-tour-content">
            <h2 align="center"> My Tours</h2>
            <hr></hr>
            <br></br>
            {[...tours].reverse().map((tour) => (
              <TourComponent tour={tour} key={tour.tourId}></TourComponent>
            ))}
          </div>

          <DemoFooter />
        </div>
      </>
    );
  }
}

export default MyTours;
