import  { useHistory } from 'react-router-dom'
import styles from "../assets/css/ItineraryHome.module.css"

function ItineraryManagement(){

    let history = useHistory();
    
    function handleClickAdd(){
        history.push("/add-itinerary");
    }

    function handleClickView(){
        history.push("/view-itineraries");
    }

    return(
        <div>
            <h3><center>Itinerary Management</center></h3><br/><br/>
            <div className = {styles.itnBody}>
            <div className = {styles.relative}>
            
                <button className = {styles.btn_itmng} onClick = {handleClickAdd}>Add Itinerary</button>
            
        
                <button className = {styles.btn_itmng} onClick = {handleClickView}>View Tour Iteneraries</button>
             
    
                <button className = {styles.btn_itmng}>Custom Itinerary Report</button>
        
            
                <button className = {styles.btn_itmng}>Custom Itinerary Requests</button>
            
            </div>

            </div>

        </div>    
    );
}

export default ItineraryManagement;