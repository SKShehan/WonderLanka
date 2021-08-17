import React from "react";
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

function App() {
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
        <Route path="/book-tour" render={(props) => <BookTour {...props} />} />
        <Route path="/my-tours" render={(props) => <MyTours {...props} />} />
        <Route path="/view-tour" render={(props) => <ViewTour {...props} />} />
        <Route
          path="/edit-profile"
          render={(props) => <EditProfile {...props}></EditProfile>}
        />
        <Route
          path="/change-password"
          render={(props) => <ChangePassword {...props}></ChangePassword>}
        />
        <Route
          path="/user-profile"
          render={(props) => <UserProfile {...props} />}
        />
        <Route
          path="/unregister"
          render={(props) => <Unregister {...props} />}
        />
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
