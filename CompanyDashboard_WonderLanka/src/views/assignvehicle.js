import React, { Component } from 'react';

import styles from "../assets/css/VehicleHome.module.css"

import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';

function AssignVehicle(){

  return(
   <>
     <IndexHeader />
        <IndexNavbar />
   
       <div style = {{paddingTop : "50px"}} >
           
            <h1 ><center><b><font  color ="red"> ERROR 404</font></b></center></h1><br/><br/>
    </div>
    <DemoFooter />
    </>
    );
}
export default AssignVehicle;