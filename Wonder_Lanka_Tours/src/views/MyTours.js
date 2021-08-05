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
      date: "05/08/2021",
      status: "In Progress",
    },
    {
      id: "#1234568",
      fullName: "Dominic Torreto",
      country: "USA",
      mobileNo: "69696969",
      email: "family@gmail.com",
      arrivalDate: "10/05/2021",
      itinerary: "MARU HABAY",
      date: "05/07/2021",
      status: "Completed",
    },
    {
      id: "#1234569",
      fullName: "Virat Kohli",
      country: "India",
      mobileNo: "69696969",
      email: "anushka69@gmail.com",
      arrivalDate: "10/06/2021",
      itinerary: "SES CAT OK D?",
      date: "05/06/2021",
      status: "Completed",
    },
    {
      id: "#1234560",
      fullName: "Kim Jon Un",
      country: "North Korea",
      mobileNo: "69696969",
      email: "president4ever@gmail.com",
      arrivalDate: "10/05/2021",
      itinerary: "GGEZ",
      date: "05/05/2021",
      status: "Canceled",
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
