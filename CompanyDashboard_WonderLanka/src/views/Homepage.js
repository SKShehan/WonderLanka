
import styles from "../assets/css/Home.module.css"
import { useHistory } from "react-router";

function Homepage(){

  let history = useHistory();
  
    function handleClickItinerary(){
        history.push("/itinerary-management");
    }

    function handleClickGuide() {
        history.push("/guide-management");
    }

    function handleClickBooking() {
        history.push("/assign-guides");
    }

    function handleClickComp() {
        history.push("/report-guides");
    }

    function handleClickVehicle() {
      history.push("/vehicle-management");
    }

    function handleClickDriver() {
      history.push("/driver-management");
    }

    function handleClickInsurance() {
      history.push("/report-guides");
    }

   function handleClickHotel() {
     history.push("/hotel-management");
    }

    function handleClickEmployee(){
      history.push("/employee-management");
    }


    return(
        
            <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <h3 className = {styles.header}><center>Company Management</center></h3><br/><br/>

            <div>
              <table className = {styles.tb}>

                <tr>
                  <td>
                      <button className = {styles.btn_guidemng} onClick = {handleClickItinerary} >Itinerary Management</button>
                  </td>
                    
                  <td>
                      <button className = {styles.btn_guidemng} onClick = {handleClickGuide} >Guide Management</button>
                  </td>

                  <td>
                      <button className = {styles.btn_guidemng} onClick = {handleClickBooking}>Booking Management</button>
                  </td>

                  <td>
                      <button className = {styles.btn_guidemng} onClick = {handleClickComp}>Complaint and Feedback Management</button>
                  </td>

                </tr>

                <tr>
                  <td>
                      <button className = {styles.btn_guidemng} onClick = {handleClickVehicle} >Vehicle Management</button>
                  </td>
                    
                  <td>
                      <button className = {styles.btn_guidemng} onClick = {handleClickDriver} >Driver Management</button>
                  </td>

                  <td>
                      <button className = {styles.btn_guidemng} onClick = {handleClickInsurance}>Insurance Management</button>
                  </td>

                  <td>
                      <button className = {styles.btn_guidemng} onClick = {handleClickHotel}>Hotel and Restaraunt Management</button>
                  </td>
                </tr>  
              </table>

              <button className = {styles.btn_guidemng} onClick = {handleClickEmployee}>Employee Management</button>
            </div>
        </div>
        
    );
}

export default Homepage;
