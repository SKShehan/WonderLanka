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

function DriverInsert() {
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
        <center><h1 className="title">Driver Management</h1></center>
          <Row>
            <Col className="mx-auto" lg="6" md="6">
              <Card className="card-register">
                <center><h2 className="title">Insert New Driver Details</h2></center>
                
                <Form className="register-form">
                  <label><h5>First Name</h5></label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                     
                    </InputGroupAddon>
                    <Input placeholder="Input First Name" type="text" required/>
                    </InputGroup>

                 
                  <label><h5>Last Name</h5></label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                     
                    </InputGroupAddon>
                    <Input placeholder="Last Name" type="text" required/>
                    </InputGroup>
                  

                  <label><h5>Email</h5></label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                     
                    </InputGroupAddon>
                    <Input placeholder="Input Email" type="email" required/>
                  </InputGroup>

                  <label><h5>Mobile Number</h5></label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                     
                    </InputGroupAddon>
                    <Input placeholder="Input Phone Number" type="text" required/>
                  </InputGroup>

                  <label><h5>License ID</h5></label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                     
                    </InputGroupAddon>
                    <Input placeholder="Input License ID" type="text" required/>
                  </InputGroup>

                  <label><h5>Fluent Languages</h5></label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                     
                    </InputGroupAddon>
                    <Input placeholder="Input Languages (eg: English/French/....)" type="text" required/>
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Submit Details
                  </Button>
                </Form>
               
              </Card>
              
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default DriverInsert;
