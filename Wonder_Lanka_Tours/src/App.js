import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import BookTour from "views/BookTour";
import MyTours from "views/MyTours";
import ViewTour from "views/ViewTour";
import UserProfile from "views/UserProfile";
import EditProfile from "views/EditProfile";
import ChangePassword from "views/ChangePassword";
import Unregister from "views/Unregister";
import Dashboard from "views/Dashboard";

function App() {
  const [user, setuser] = useState({
    username: "johncena",
    password: "pass123",
    fullName: "John Cena",
    country: "India",
    nic: "000000000",
    mobileNo: "+94772665133",
    email: "john69@gmail.com",
    dob: "1969-04-01",
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route path="/book-tour" exact>
          <BookTour user={user}></BookTour>
        </Route>
        <Route path="/my-tours" exact>
          <MyTours user={user}></MyTours>
        </Route>
        <Route path="/view-tour" exact>
          <ViewTour user={user}></ViewTour>
        </Route>
        <Route path="/edit-profile" exact>
          <EditProfile user={user}></EditProfile>
        </Route>
        <Route path="/change-password" exact>
          <ChangePassword user={user}></ChangePassword>
        </Route>
        <Route path="/user-profile" exact>
          <UserProfile user={user}></UserProfile>
        </Route>
        <Route path="/unregister" exact>
          <Unregister user={user}></Unregister>
        </Route>
        <Route path="/user-dashboard" exact>
          <Dashboard user={user}></Dashboard>
        </Route>
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
