import React from "react";
import { useState, useEffect } from "react";
import { Card } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

function TourComponent({ tour }) {
  const history = useHistory();
  const clickSeeDetails = () => {
    history.push({
      pathname: "/view-tour",
      state: tour,
    });
  };

  const clickFeedback = () => {
    history.push({
      pathname: "/my-feedback",
    });
  };

  document.documentElement.classList.remove("nav-open");

  useEffect(() => {
    document.body.classList.add("index");
    document.getElementById(tour.tourId).classList.remove("card");

    return function cleanup() {
      document.body.classList.remove("index");
    };
  }, []);
  if (tour != null) {
    return (
      <div>
        <Card id={tour.tourId} className="tour-card">
          <table width="100%">
            <tr>
              <td>
                <label className="tour-label-title">Booking ID :</label>
                <label className="tour-label-info">{tour.tourId}</label>

                <label className="tour-label-title">Date :</label>
                <label className="tour-label-info">{tour.bookingDate}</label>

                <label className="tour-label-title">Tour Itinerary :</label>
                <label className="tour-label-info">{tour.itinerary}</label>

                <label className="tour-label-title">Payment :&nbsp; </label>
                <label className="tour-label-info">
                  {" "}
                  LKR&nbsp;{tour.payment}
                </label>
              </td>
            </tr>
            <br></br>
            <tr>
              <td>
                <button
                  className="btn btn-success tour-btn"
                  onClick={clickFeedback}
                >
                  Give Feedback
                </button>
                <button
                  className="btn btn-info tour-btn"
                  onClick={clickSeeDetails}
                >
                  See Details
                </button>
              </td>
            </tr>
          </table>
        </Card>
        <br></br>
      </div>
    );
  }
}

export default TourComponent;
