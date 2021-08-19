import{Button} from 'reactstrap'
import{ useHistory } from "react-router-dom"
function ViewItineraries(){

    let history = useHistory();

    function clickHandlerEdit(){
        history.push("/edit-itinerary")
    }

    return(
        
        <div>
            <h3>Tour Itinerary Details</h3><br/><br/>
            <div className = "tableContainer">
                <table className = "table table-striped">
                    <thead>
                        <th scope = "col">Itinerary ID</th>
                        <th scope = "col">Itinerary Name</th>
                        <th scope = "col">Itinerary Days</th>
                        <th scope = "col">Itinerary Description</th>
                        <th scope = "col">Itinerary Image</th>
                        <th scope = "col">Itinerary CoverImage</th>
                        <th scope = "col">Itinerary Class</th>
                        <th scope = "col">Itinerary Price Per Adult</th>
                        <th scope = "col">Itinerary Price for Children</th>
                        <th scope = "col">Operations</th>

                    </thead>

                    <tbody>
                        <tr>
                            <th scope = "row">1</th>
                            <td>Sigiriya Tour</td>
                            <td>5 Days</td>
                            <td>Itinirary Description</td>
                            <td>Image File</td>
                            <td>Image File</td>
                            <td>Superior</td>
                            <td>12,500</td>
                            <td>10,000</td>
                            <td><Button color="warning" onClick = {clickHandlerEdit}>Edit</Button><Button color="danger">Remove</Button></td>
                        </tr>
                    </tbody>    


                </table>
            </div>    
        </div>    
    );


}

export  default ViewItineraries;