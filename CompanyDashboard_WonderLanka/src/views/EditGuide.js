import styles from '../assets/css/AddItinerary.module.css'
import{
    Label,
    Input,
    Button
}
from 'reactstrap'

function EditGuide(){

    return(

        <div>
            <br/><br/><h3 style = {{textAlign : 'center'}}>Edit Guide Details</h3><br/><br/>
            <div className = {styles.FormContainer}>
            <form>

                <Label for = "GuideID">Guide ID</Label><br/>
                <Input type = 'text' name = "GuideID" ></Input><br/>

                <Label for = "FirstName">First Name</Label><br/>
                <Input type = 'text' name = "FirstName" ></Input><br/>

                <Label for = "LastName">Last Name</Label><br/>
                <Input type = 'text' name = "LastName" ></Input><br/>

                <Label for = "Email">Email</Label><br/>
                <Input type = "email" name = "Email" ></Input><br/>

                <Label for = "TelNo">Telephone number</Label><br/>
                <Input type = "number" name = "TelNo" ></Input><br/>

                <Label for = "GuideLicense">Guide License ID</Label><br/>
                <Input type = "text" name = "GuideLicense" /><br/>

                <Label for = "ForeignLanguage">Main Foreign ForeignLanguage</Label><br/>
                <Input type = "text" name = "ForeignLanguage"/> <br/>

                <Button color = "warning" style = {{float:'right' , margin : "5px" }}>Edit Guide</Button>

            </form>    
            </div>
        </div>   

    );
}

export default EditGuide;