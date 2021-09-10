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

import Addvehicle from "views/addvehicle";
import Editvehicle from "views/editvehicle";
import Vehiclelist from "views/vehiclelist";
import Vtype from "views/vtype";
import AssignVehicle from "views/assignvehicle";
import ReportVehicle from "views/reportvehicle";

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
        <Route path="/guide-management" exact>
          <GuideManagement />
        </Route>
        
        {/* vehicle */}
        <Route path="/add-vehicle" exact>
          <Addvehicle />
        </Route>
        <Route path="/view-vehicles" exact>
          <Vehiclelist />
        </Route>
        <Route path="/type-vehicles" exact>
          <Vtype />
        </Route>
        <Route path="/edit-vehicle/:id" component={Editvehicle}/>
          
        <Route path="/assign-vehicles" component={AssignVehicle}/> 
          
        <Route path="/report-vehicles" component={ReportVehicle}/> 
        
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
