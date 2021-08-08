import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function DriverProfile() {
  return (
    <>
      <div
        className="section section-image section-login"
        style={{
          backgroundImage:
            "url(" + require("assets/img/driver.jpg").default + ")",
        }}
      >
          <Container>
            <center><h1 className="title">Driver Details</h1></center>
          <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">License ID</th>
      <th scope="col">Languages</th>
      <th scope="col">Availability</th>
      <th scope="col">Update/Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Gotha</td>
      <td>Bayya</td>
      <td>Gothabayya@69.com</td>
      <td>0779632587</td>
      <td>12345</td>
      <td>Sinhala/English</td>
      <td>Available</td>
      <button>Update</button>
      <button>Delete</button>
    </tr>
    
    <tr>
      <th scope="row">2</th>
      <td>Maha</td>
      <td>Bayya</td>
      <td>Mahaabayya@69.com</td>
      <td>0779632557</td>
      <td>12345</td>
      <td>Sinhala/English</td>
      <td>Available</td>
      <button>Update</button>
      <button>Delete</button>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Besil</td>
      <td>Bayya</td>
      <td>Besilbayya@69.com</td>
      <td>0779672587</td>
      <td>12345</td>
      <td>Sinhala/English</td>
      <td>Available</td>
      <button>Update</button>
      <button>Delete</button>
    </tr>
  </tbody>
</table>
</Container>
      </div>{" "}
    </>
  );
}

export default DriverProfile;
