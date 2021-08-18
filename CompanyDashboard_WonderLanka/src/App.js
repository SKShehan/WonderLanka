import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import AddItinerary from "views/AddItinerary";
import ViewItineraries from "views/viewItineraries";
import EditItinerary from "views/EditItinerary";

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
        <Route                                  //Setting path for Add Itinerary view
           path = "/add-itinerary" exact>
          <AddItinerary/>
        </Route>

        <Route                                //Setting path for Edit Itinerary view  
          path = "/view-itineraries" exact>
            <ViewItineraries/>
        </Route>

        <Route
          path = "/edit-itinerary" exact>
            <EditItinerary/>
          
        </Route>
          
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
