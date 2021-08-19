import styles from '../assets/css/AddItinerary.module.css'
import{
    Label,
    Input,
    Button
}
from 'reactstrap'

function AddGuide(){

    return(

        <div>
            <br/><br/><h3 style = {{textAlign : 'center'}}>Insert Tour Guide Details</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form>

                <Label for = "GuideID">Guide ID</Label><br/>
                <Input type = 'text' name = "GuideID" placeholder = "Enter Guide ID"></Input><br/>

                <Label for = "FirstName">First Name</Label><br/>
                <Input type = 'text' name = "FirstName" placeholder = "Enter First Name"></Input><br/>

                <Label for = "LastName">Last Name</Label><br/>
                <Input type = 'text' name = "LastName" placeholder = "Enter Last Name"></Input><br/>

                <Label for = "Email">Email</Label><br/>
                <Input type = "email" name = "Email" placeholder = "Enter Email"></Input><br/>

                <Label for = "TelNo">Telephone number</Label><br/>
                <Input type = "number" name = "TelNo" placeholder = "Enter Telephone Number"></Input><br/>

                <Label for = "GuideLicense">Guide License ID</Label><br/>
                <Input type = "text" name = "GuideLicense" placeholder = "Enter Guide License ID"/><br/>

                <Label for = "ForeignLanguage">Main Foreign ForeignLanguage</Label><br/>
                <Input type = "text" name = "ForeignLanguage" placeholder = "Enter Main Foreign Language"/> <br/>

                <Button color = "primary" style = {{float:'right' , margin : "5px" }}>Add Guide</Button>

            </form>    
            </div>
        </div>   

    );
}

export default AddGuide;