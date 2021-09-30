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
// nodejs library that concatenates strings
import classnames from "classnames";
import { ReactSession } from "react-client-session";
import { useHistory, useLocation } from "react-router-dom";

import { useState } from "react";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const history = useHistory();
  const [loggedIn, setloggedIn] = useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const logout = () => {
    ReactSession.set("user", null);
    history.push({
      pathname: "/login",
    });
  };

  React.useEffect(() => {
    ReactSession.setStoreType("localStorage");
    if (ReactSession.get("user") != null) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
    }
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 169 ||
        document.body.scrollTop > 169
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 170 ||
        document.body.scrollTop < 170
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            Wonder Lanka Tours
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {!loggedIn && (
              <NavItem>
                <NavLink data-placement="bottom" href="/index" title="Home">
                  Home
                </NavLink>
              </NavItem>
            )}
            {loggedIn && (
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="/user-dashboard"
                  title="Dashboard"
                >
                  Dashboard
                </NavLink>
              </NavItem>
            )}

            <NavItem>
              <NavLink data-placement="bottom" href="" title="Itineraries">
                Itineraries
              </NavLink>
            </NavItem>
            {loggedIn && (
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="/my-tours"
                  title="My Tours"
                >
                  My Tours
                </NavLink>
              </NavItem>
            )}
            {loggedIn && (
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="/my-feedback"
                  title="Feedback"
                >
                  Feedback
                </NavLink>
              </NavItem>
            )}
            {loggedIn && (
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="/my-complaint"
                  title="Complaint"
                >
                  complaint
                </NavLink>
              </NavItem>
            )}
            {loggedIn && (
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="/user-profile"
                  title="User Profile"
                >
                  User Profile
                </NavLink>
              </NavItem>
            )}

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/contact-us"
                title="Contact Us"
              >
                Contact Us
              </NavLink>
            </NavItem>
            {loggedIn && (
              <NavItem>
                <NavLink href="" onClick={logout}>
                  <i className="nc-icon nc-circle-10" /> Log Out
                </NavLink>
              </NavItem>
            )}
            {!loggedIn && (
              <NavItem>
                <NavLink href="#">Sign Up</NavLink>
              </NavItem>
            )}
            {!loggedIn && (
              <NavItem>
                <NavLink href="/login">
                  <i className="nc-icon nc-circle-10" /> Log In
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
