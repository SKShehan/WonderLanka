import React from "react";
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";

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
import BookingManagement from "views/BookingManagement";

import AddHotel from "views/AddHotel";
import HotelDetails from "views/HotelDetails";
import EditHotel from "views/EditHotel";
import HotelHome from "views/HotelHome";
import Booktable from "views/booktable";
import Bookingdetails from "views/bookingdetails";
import Editbookings from "views/editbookings";
import Cancelbookingform from "views/Cancelbookingform";

import DriverUpdate from "views/DriverUpdate";
import AddDriver from "views/AddDriver";
import DriverDetails from "views/DriverDetails";

<<<<<<< Updated upstream
=======
import MyComplaints from "views/MyComplaints";
import MyFeedbacks from "views/MyFeedbacks";

>>>>>>> Stashed changes



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
<<<<<<< Updated upstream
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
        <Route path="/booking-management" exact>
          < BookingManagement/>
        </Route>


      
        <Route path="/booktable" exact>
          <Booktable />
        </Route>
        <Route path="/edit-bookingmanagement/:id"  component={Editbookings}>
        </Route>
   
      
        <Route path="/add-cancelbooking/:id" component={Cancelbookingform} >
        </Route>

       
        <Route path="/edit-driver/:id" component={DriverUpdate} />
        <Route path ="/Add-Driver" component={AddDriver}/>
        <Route path ="/View-Driver" component={DriverDetails}/>


        
        <Route //Setting path for hotels
          path="/" exact >
          <HotelHome />
        </Route>

        <Route path="/add" exact >
          <AddHotel />
        </Route>

=======
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
        <Route path="/booking-management" exact>
          < BookingManagement/>
        </Route>


      
        <Route path="/booktable" exact>
          <Booktable />
        </Route>
        <Route path="/edit-bookingmanagement/:id"  component={Editbookings}>
        </Route>
   
      
        <Route path="/add-cancelbooking/:id" component={Cancelbookingform} >
        </Route>

       
        <Route path="/edit-driver/:id" component={DriverUpdate} />
        <Route path ="/Add-Driver" component={AddDriver}/>
        <Route path ="/View-Driver" component={DriverDetails}/>


        
        <Route //Setting path for hotels
          path="/" exact >
          <HotelHome />
        </Route>

        <Route path="/add" exact >
          <AddHotel />
        </Route>

>>>>>>> Stashed changes
        <Route path="/edit/:id"  component={EditHotel}>
        </Route>

        <Route path="/get" exact >
          <HotelDetails />
        </Route>


<<<<<<< Updated upstream
=======

        <Route path="/my-complaints" exact>
          <MyComplaints user={user}></MyComplaints>
        </Route>
        <Route path="/my-feedbacks" exact>
          <MyFeedbacks user={user}></MyFeedbacks>
        </Route>


>>>>>>> Stashed changes
        <Redirect to="/index" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
