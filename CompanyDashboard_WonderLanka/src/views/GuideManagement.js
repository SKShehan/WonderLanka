
import styles from "../assets/css/ItineraryHome.module.css"

function GuideManagement(){


    return(
        <div>
            <h3><center>Guide Management</center></h3><br/><br/>
            <div className = {styles.itnBody}>
            <div className = {styles.relative}>
            
                <button className = {styles.btn_itmng} >Add Tour Guide</button>
            
        
                <button className = {styles.btn_itmng} >View Tour Guides</button>
             
    
                <button className = {styles.btn_itmng}>Assign Tour Guides</button>
        
            
                <button className = {styles.btn_itmng}>Tour Guide Report</button>
            
            </div>

            </div>

        </div>    
    );
}

export default GuideManagement;