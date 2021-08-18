import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import TourComponent from "components/TourComponent";

function BookTour() {
  const [username, setusername] = useState("johncena");
  const [tours, settours] = useState([]);

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    axios.get(`http://localhost:9000/bookings/get/${username}`).then((res) => {
      settours(res.data);
    });

    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);
  if (tours == null) {
    return <div>loading...</div>;
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
            {tours.map((tour) => (
              <TourComponent tour={tour} key={tour.tourId}></TourComponent>
            ))}
          </div>

          <DemoFooter />
        </div>
      </>
    );
  }
}

export default BookTour;
