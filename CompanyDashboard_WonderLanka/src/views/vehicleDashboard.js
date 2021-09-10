
import styles from "../assets/css/VehicleHome.module.css"


import { useHistory } from "react-router";
function VehicleDashboard(){

    let history = useHistory();

    function handleClickAdd(){
        history.push("/add-vehicle");
    }

    function handleClickView() {
        history.push("/view-vehicles");
    }
    function handleClickType() {
        history.push("/type-vehicles");
    }

    function handleClickAssign() {
        history.push("/assign-vehicles");
    }

    function handleClickReport() {
        history.push("/report-vehicles");
    }


    return(
        
            <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <h3 className = {styles.header}><center><b>Vehicle Management</b></center></h3><br/><br/>

           <br></br> <br></br>

            <div style = {{paddingTop : "50px"}} className = {styles.btn_group}>
            
                <button className = {styles.btn_guidemng} onClick = {handleClickAdd} >Add Vehicle</button>
            
        
                <button className = {styles.btn_guidemng} onClick = {handleClickView} >View Vehicles</button>
             
    
                <button className = {styles.btn_guidemng} onClick = {handleClickType}>Add Vehicle Type</button>
        
            
                <button className = {styles.btn_guidemng} onClick = {handleClickAssign}>Assign Vehicles</button>

               
                <button className = {styles.btn_guidemng} onClick = {handleClickReport}>Vehicle Report</button>
            
            </div>
        </div>
        
    );
}

export default VehicleDashboard;