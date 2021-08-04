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
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
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
            <fieldset>
            <label for="full-name">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
            <label for="email-address">Email Address</label>
            <input type="email" name="replyto" id="email-address" placeholder="email@gmail.com" required=""/>
            <label for="telephone">Telephone Number (Optional)</label>
            <input type="telephone" name="telephone" id="telephone" placeholder="(+94)3333-55555"/>
            <label for="complaint">Complaint</label>
            <textarea rows="6" name="complaint" id="complaint" placeholder="" required=""/>
            <input type="hidden" name="subject" id="email-subject" value="Complaint Form Submission"/>
            <input type="submit" value="File Complaint"></input>
            </fieldset>
        </form>      
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
