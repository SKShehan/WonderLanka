import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import TourComponent from "components/TourComponent";

function MyTours({ user }) {
  const [tours, settours] = useState([]);

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    axios
      .get(`http://localhost:9000/bookings/get/${user.username}`)
      .then((res) => {
        settours(res.data);
      });

    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);
  if (!tours) {
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
