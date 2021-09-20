import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../assets/css/DriverHome.module.css";
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';



function DriverManagement() {
    let history=useHistory();
    function handleClick(){
        history.push("/Add-Driver")
    }
    function handleClick2(){
        history.push("/View-Driver")
    }
    function handleClick3(){
      history.push("/Assign-Driver")
  }
  return (
        <>
      <IndexHeader />
      <IndexNavbar />
      <div style = {{paddingTop : "50px"}} className = {styles.body2}>
      
      
       
        <center><h1 className={styles.header}>Driver Management </h1></center>
       
        <div style = {{paddingTop : "50px"}} className = {styles.btn_group2}>
                    <button
                    onClick={handleClick}
                    className={styles.btn_drivermng}
                   
                    type="button"
                    >
                    Add Driver
                    </button>

                    <button
                    onClick={handleClick2}
                    className={styles.btn_drivermng}
                  
                    type="button"
                    >
                    View Drivers
                    </button>

                    <button
                     onClick={handleClick3}                   
                    className={styles.btn_drivermng}
                   
                    type="button"
                    >
                    Assign Drivers
                    </button>

                    <button
                                        
                    className={styles.btn_drivermng}
                  
                    type="button"
                    >
                    Drivers Report
                    </button>
                    </div>
                
     
      </div>
  </>
  );
}

export default DriverManagement;
