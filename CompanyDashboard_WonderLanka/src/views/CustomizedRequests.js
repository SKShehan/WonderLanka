import{Button} from 'reactstrap'
import{ useHistory } from "react-router-dom"
function CustomizedRequests(){


    return(
        
        <div>
            <h3>Customized Itinerary Requests</h3><br/><br/>
            <div className = "tableContainer">
                <table className = "table table-striped">
                    <thead>
                        <th scope = "col">Booking ID</th>
                        <th scope = "col">Description</th>

                        <th scope = "col">Operation</th>

                    </thead>

                    <tbody>
                        <tr>
                            <th scope = "row">1</th>
                            <td>T123</td>
                            <td>Itinirary Description</td>

                            <td><Button color="info">Add Itinirary</Button></td>
                        </tr>
                    </tbody>    


                </table>
            </div>    
        </div>    
    );


}

export  default CustomizedRequests;