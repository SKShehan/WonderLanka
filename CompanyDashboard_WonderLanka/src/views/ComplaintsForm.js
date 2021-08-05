/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components

// core components
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/ComplaintHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "views/index-sections/SectionButtons.js";
import SectionNavbars from "views/index-sections/SectionNavbars.js";
import SectionNavigation from "views/index-sections/SectionNavigation.js";
import SectionProgress from "views/index-sections/SectionProgress.js";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionTypography from "views/index-sections/SectionTypography.js";
import SectionJavaScript from "views/index-sections/SectionJavaScript.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "views/index-sections/SectionNucleoIcons.js";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionLogin from "views/index-sections/SectionLogin.js";
import SectionExamples from "views/index-sections/SectionExamples.js";
import SectionDownload from "views/index-sections/SectionDownload.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
      <form>
      <FormGroup>
        <Label for="Name">Name</Label>
        <Input type="name" name="name" id="idName" placeholder="A.D. Amarasekara" />
      </FormGroup>
      <FormGroup>
        <Label for="Email">Email address</Label>
        <Input type="email" name="email" id="idEmail" placeholder="name@gmail.com" />
      </FormGroup>
      <FormGroup>
        <Label for="contact">Contact No</Label>
        <Input type="contact" name="contact" id="idContact" placeholder="(+94) 555-555-555" />
      </FormGroup>
      <FormGroup>
        <Label for="typeSelect">Type of complaint</Label>
        <Input type="select" name="select" id="typeSelect">
          <option>There's no free WI-FI in my room?</option>
          <option>here's no free Hot water in my room?</option>
          <option>The attitudes and behaviours of your staff are unacceptable</option>
          <option>I cancelled my hotel room booking just before i was supposed to check in. Why can't i get my money back?</option>
          <option>That's not what it says (or looks like) on your website.</option>
          <option>There's problem with the vehicle we hired.</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Any other custom complaint</Label>
        <Input type="textarea" name="text" id="idText" />
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>       
      <DemoFooter />
      </div>
    </>
  );
}

export default Index; 
