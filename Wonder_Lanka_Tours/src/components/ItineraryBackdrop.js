import styles from '../assets/css/Itinerary.module.css'
function Backdrop(props){
    return(
        <div className = {styles.Backdrop} onClick = {props.onCancel} />
    );
}

export default Backdrop;