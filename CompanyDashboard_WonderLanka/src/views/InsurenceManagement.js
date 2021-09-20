import styles from "../assets/css/InsurenceHome.module.css"
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';

import { useHistory } from "react-router";
function InsurenceManagement(){

    let history = useHistory();

    function handleClickAdd(){
        history.push("/add-insurence");
    }

    function handleClickDelete() {
        history.push("/delete-insurence");
    }

    function handleClickEdit() {
        history.push("/edit-insurence");
    }

    function handleClickReport() {
        history.push("/report-insurence");
    }


    return(
        <>

        <IndexHeader />
        <IndexNavbar />
        
            <div style = {{paddingTop : "50px"}} className = {styles.body}>
            <h3 className = {styles.header}><center>Insurence Management</center></h3><br/><br/>

            <div style = {{paddingTop : "50px"}} className = {styles.btn_group}>
            
                <button className = {styles.btn_insurencemng} onClick = {handleClickAdd} >Add Insurence Planes</button>
            
        
                <button className = {styles.btn_insurencemng} onClick = {handleClickEdit} >Edit Insurence Planes</button>
             
    
                <button className = {styles.btn_insurencemng} onClick = {handleClickDelete}>Delete Insurence Plans</button>
        
            
                <button className = {styles.btn_insurencemng} onClick = {handleClickReport}>Genarate Report</button>
            
            </div>
        </div>

<DemoFooter />
</>     
        
    );
}

export default InsurenceManagement;