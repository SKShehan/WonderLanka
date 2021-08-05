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
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
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
          <table border="1px" width="100%">
            <tr>
              <td>Lol</td>
              <td>Lol</td>
              <td>Lol</td>
              <td>Lol</td>
              <td>Lol</td>
              <td>Lol</td>
            </tr>
          </table>
        </div>

        <DemoFooter />
      </div>
    </>
  );
}

export default BookTour;
