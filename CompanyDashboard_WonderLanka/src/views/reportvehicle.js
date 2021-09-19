import React, { Component } from 'react';

import styles from'../assets/css/AddVehicle.module.css';

import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';

function ReportVehicle(){

  return(
     <>
     <IndexHeader />
        <IndexNavbar />
        <div style = {{paddingTop : "50px"}} className = {styles.body}>
   
       <div style = {{paddingTop : "800px"}} >
           
            
    </div>
    </div>
    
    <DemoFooter />
    </>
    );
}
export default ReportVehicle;