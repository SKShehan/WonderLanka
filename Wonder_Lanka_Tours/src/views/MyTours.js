import React from "react";
import { useState, useEffect } from "react";

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
import TourComponent from "components/TourComponent";

function BookTour() {
  const [tourId, settourId] = useState(0);
  const [tours, settours] = useState([
    {
      id: "#1234567",
      itinerary: "MADA MULANE MURUGAYA",
      date: "5/8/2021",
      status: "In Progress",
    },
    {
      id: "#1234568",
      itinerary: "MARU HABAY",
      date: "5/7/2021",
      status: "Completed",
    },
    {
      id: "#1234569",
      itinerary: "SES CAT OK D?",
      date: "5/6/2021",
      status: "Completed",
    },
    {
      id: "#1234560",
      itinerary: "GGEZ",
      date: "5/5/2021",
      status: "Canceled",
    },
    {
      id: "#1234561",
      itinerary: "CHU BARAI",
      date: "5/4/2021",
      status: "In Progress",
    },
  ]);

  const count = () => {
    return tourId++;
  };
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
        <div className="body-content">
          <h2 align="center"> My Tours</h2>
          <hr></hr>
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
