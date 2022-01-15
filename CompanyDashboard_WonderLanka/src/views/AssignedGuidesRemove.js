import IndexHeader from "components/Headers/IndexHeader";
import { useEffect } from "react"
import { useState } from "react"
import IndexHeader from "components/Headers/IndexHeader";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import axios from "axios";


function UnassignGuide(){

    const [bookings , setBookings] = useState([]);



    useEffect(() =>{
        axios.get("http://localhost:8070/bookings/").then((res) =>{
            setBookings(res.data);

        })
    },[])

    return (
        <div>
            <IndexNavbar />
            <IndexHeader />
            <h3 style ={{marginLeft:"40px"}}>Assigned Guides</h3><br/><br/>


            <div style = {{marginLeft:"20px"}}  className = "tableContainer">
                <table className = "table table-striped">
                    <thead>
                        <th scope = "col">#</th>
                        <th scope = "col">Tour ID</th>
                        <th scope = "col">Guide Assigned </th>
                        <th scope = "col">Operation</th>

                    </thead>

                    <tbody>
                        
                        {bookings.map((booking) =>(
                            
                            <tr>
                                <th scope = "row">{number++}</th>
                                <td>{booking.tourId}</td>
                                <td>{guides[booking.tourId]}</td>
                                <td><Button color="warning"  style = {{padding: "5px 5px 5px 5px" , width : "80px" , marginBottom : "8px"}}

                                >UnAssign</Button>
                               </td>
                            </tr>
    
                        ))}
                    </tbody>    


                </table>
            </div>   
            
            <DemoFooter />

        </div>    
    );
}

export default UnassignGuide