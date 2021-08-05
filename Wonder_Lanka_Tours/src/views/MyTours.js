import React from "react";
import { useState, useEffect } from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import TourComponent from "components/TourComponent";

function BookTour() {
  const [tours, settours] = useState([
    {
      id: "#1234567",
      fullName: "John Cena",
      country: "USA",
      mobileNo: "69696969",
      email: "johncena@gmail.com",
      arrivalDate: "10/08/2021",
      itinerary: "MADA MULANE MURUGAYA",
      insurance: "DANNA BROO",
      class: "SHEHAN ARE YOU HAPPY NOW?",
      noOfAdults: "4",
      noOfKids18: "0",
      noOfKids8: "1",
      payment: "6969.69",
      tourGuide: "GOTABAYA RAJAPAKSHA",
      driver: "NAMAL RAJAPAKSHA",
      vehicle: "SUDU VAN",
      date: "05/08/2021",
      status: "In Progress",
    },
  ]);

  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
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
            <TourComponent tour={tour} key={tour.id}></TourComponent>
          ))}
        </div>

        <DemoFooter />
      </div>
    </>
  );
}

export default BookTour;
