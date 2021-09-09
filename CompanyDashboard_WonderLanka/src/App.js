import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import IndexHeader from "components/Headers/IndexHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";

import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";

import AddItinerary from "views/AddItinerary";
import ViewItineraries from "views/viewItineraries";
import EditItinerary from "views/EditItinerary";

import EditGuide from "views/EditGuide";
import AddGuide from "views/AddGuide";
import ViewGuides from "views/ViewGuides";
import GuideManagement from "views/GuideManagement";
import DriverUpdate from "views/DriverUpdate";
import AddDriver from "views/AddDriver";
import DriverDetails from "views/DriverDetails";
import DriverManagement from "views/DriverManagement";
import ItineraryManagement from "views/ItineraryManagement";


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
        <Route //Setting path for Add Itinerary view
          path="/add-itinerary"
          exact
        >
          <AddItinerary />
        </Route>

        <Route //Setting path for Edit Itinerary view
          path="/view-itineraries"
          exact
        >
          <ViewItineraries />
        </Route>

        <Route path="/edit-itinerary/:id" exact>
          <EditItinerary />
        </Route>
        <Route path= "/edit-guide/:id" exact>
          <EditGuide />
        </Route>
        <Route path="/add-guide" exact>
          <AddGuide />
        </Route>
        <Route path="/view-guides" exact>
          <ViewGuides />
        </Route>
       
        <Route path="/edit-driver/:id" exact 
          component={DriverUpdate} />
        <Route path ="/Add-Driver" exact  
          component={AddDriver}/>
        <Route path ="/View-Driver" exact  
          component={DriverDetails}/>

        {/*Setting Management Function paths */}

        <Route path="/guide-management" exact>
          <GuideManagement />
        </Route>

        <Route path="/itinerary-management" exact>
          <ItineraryManagement />
        </Route>

        <Route path="/driver-management" exact>
          <DriverManagement />
        </Route>


        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
