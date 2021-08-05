import React from "react";
import { useState, useEffect } from "react";
import { Card } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

function TourComponent({ tour }) {
  const [statusClass, setstatusclass] = useState();
  const history = useHistory();
  const clickSeeDetails = () => {
    history.push({
      pathname: "/view-tour",
      state: tour,
    });
  };
  const checkStatus = () => {
    if (tour.status === "In Progress") {
      setstatusclass("label-warning");
    } else if (tour.status === "Completed") {
      setstatusclass("label-success");
    } else if (tour.status === "Canceled") {
      setstatusclass("label-danger");
    }
  };

  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("index");
    document.getElementById(tour.id).classList.remove("card");
    checkStatus();
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });

  return (
    <div>
      <Card id={tour.id} className="tour-card">
        <table width="100%">
          <tr>
            <td>
              <label className="tour-label-title">Booking ID :</label>
              <label className="tour-label-info">{tour.id}</label>
              <label className="tour-label-title">Tour Itinerary :</label>
              <label className="tour-label-info">{tour.itinerary}</label>
              <label className="tour-label-title">Date :</label>
              <label className="tour-label-info">{tour.date}</label>
            </td>
          </tr>
          <br></br>
          <tr>
            <td>
              <button className="btn btn-success tour-btn">
                Give Feedback
              </button>
              <button
                className="btn btn-info tour-btn"
                onClick={clickSeeDetails}
              >
                See Details
              </button>
              <label
                className={"label " + statusClass + " mr-1 tour-label-status"}
              >
                Status - {tour.status}
              </label>
            </td>
          </tr>
        </table>
      </Card>
      <br></br>
    </div>
  );
}

export default TourComponent;
