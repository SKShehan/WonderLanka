import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../assets/css/DriverHome.module.css";

// reactstrap components
import {
  Button,
 
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function DriverManagement() {
    let history=useHistory();
    function handleClick(){
        history.push("/Add-Driver")
    }
    function handleClick2(){
        history.push("/View-Driver")
    }
  return (
  
      <div style = {{paddingTop : "50px"}} className = {styles.body}>
      
      
       
        <center><h1 className={styles.header}>Driver Management </h1></center>
       
        <div style = {{paddingTop : "50px"}} className = {styles.btn_group}>
                    <Button
                    onClick={handleClick}
                    className={styles.btn_drivermng}
                   
                    type="button"
                    >
                    Add Driver
                    </Button>

                    <Button
                    onClick={handleClick2}
                    className={styles.btn_drivermng}
                  
                    type="button"
                    >
                    View Drivers
                    </Button>

                    <Button
                                        
                    className={styles.btn_drivermng}
                   
                    type="button"
                    >
                    Assign Drivers
                    </Button>

                    <Button
                                        
                    className={styles.btn_drivermng}
                  
                    type="button"
                    >
                    Drivers Report
                    </Button>
                    </div>
                
     
      </div>
  
  );
}

export default DriverManagement;
