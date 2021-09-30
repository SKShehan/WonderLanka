import React from "react";
import { useState, useEffect } from "react";
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
import BookingReport from "views/BookingReport";
import { MyComplaints } from "views/MyComplaints";
import { AllComplaints } from "views/AllComplaints";
import { MyFeedbacks } from "views/MyFeedbacks";
import { AllFeedbacks } from "views/AllFeedbacks";
import { ContactUS } from "views/ContactUs";
import Itineraries from "views/Itineraries";
import Login from "views/Login";
import { ReactSession } from "react-client-session";

function App() {
  useEffect(() => {
    ReactSession.setStoreType("localStorage");
  }, []);
  const [user, setuser] = useState({});
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
          <MyTours></MyTours>
        </Route>
        <Route path="/view-tour" exact>
          <ViewTour></ViewTour>
        </Route>
        <Route path="/edit-profile" exact>
          <EditProfile></EditProfile>
        </Route>
        <Route path="/change-password" exact>
          <ChangePassword></ChangePassword>
        </Route>
        <Route path="/user-profile" exact>
          <UserProfile></UserProfile>
        </Route>
        <Route path="/unregister" exact>
          <Unregister></Unregister>
        </Route>
        <Route path="/user-dashboard" exact>
          <Dashboard></Dashboard>
        </Route>
        <Route path="/booking-report" exact>
          <BookingReport></BookingReport>
        </Route>

        <Route path="/my-complaint" exact>
          <MyComplaints user={user}></MyComplaints>
        </Route>
        <Route path="/complaint/" exact>
          <AllComplaints user={user}></AllComplaints>
        </Route>
        <Route path="/update-complaint/:id" exact>
          <updateComplaint user={user}></updateComplaint>
        </Route>

        <Route path="/my-feedback" exact>
          <MyFeedbacks user={user}></MyFeedbacks>
        </Route>
        <Route path="/feedback/" exact>
          <AllFeedbacks user={user}></AllFeedbacks>
        </Route>

        <Route path="/contact-us" exact>
          <ContactUS user={user}></ContactUS>
        </Route>
        <Route path="/login" exact>
          <Login user={user} setuser={setuser}></Login>
        </Route>

        <Route path="/view-itineraries" exact>
          <Itineraries />
        </Route>
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
