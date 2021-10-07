import{Button} from 'reactstrap'
import{ useHistory } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';
import HotelDetails from './HotelDetails';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {
    Label,
    Input,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormGroup,
    Alert,
    Container,
  } from "reactstrap";

toast.configure();
function ViewRestauarant(){
    
    let history = useHistory();

    const [restaurants , setRestaurant] = useState([]);
    const [message , setMessage] = useState("");
   
    const [checkrestName , setcheckrestName] = useState(true);
    const [checkrestID , setcheckrestID] = useState(false);
    const [checkrestLocation , setcheckrestLocation] = useState(false);
    const [searchText, setsearchText] = useState("");





    

    useEffect(() => {
        axios.get("http://localhost:8070/restaurants/details").then((res) =>{
          setRestaurant(res.data);
            console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
    
      }, []);

    

    function onDelete(restaurant)  {
        if (
            window.confirm(
              "Restaurant " + restaurant.restaurantId + " will be removed from the database"
            )
        )
        axios.delete(`http://localhost:8070/restaurants/delete${restaurant._id}`).then((res) =>{
            console.log(res);
            
            setMessage("Restaurant Deleted!");
            toast.error('Restaurant Deleted!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            
        }).catch((err) =>{
            console.log(err);
            alert("Error!");
        })
    }
 

    var number = 1;
    
    return(
        
        <div>
            <IndexNavbar />
            <IndexHeader />
            <center><h3><b>Restaurant Details</b></h3><br/><br/></center>

            <Row>
          <Col>
            <FormGroup>
              <InputGroup style = {{marginLeft : "40px"}} className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search " type="text" 
                    value = {searchText}
                    onChange = {(e) =>{
                                setsearchText(e.target.value);
                    }}/>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col>
            <div>
              <Label check style = {{marginLeft : "40px"}} > 
              <Input 
                    type="checkbox"
                    checked={checkrestName}
                    onChange={()=>{
                      setcheckrestName(!checkrestName);
                    }}/>
                {" "} 
                <label style ={{marginRight : "40px"}}>Restaurant Name</label>
              </Label>

              <Label check>
                <Input type="checkbox"
                  checked={checkrestID}
                  onChange={() =>{
                    setcheckrestID(!checkrestID);
                  }}/>{" "}
                <label style ={{marginRight : "40px"}}>Restaurant ID</label>
              </Label>

              <Label check>
                <Input type="checkbox" 
                  checked={checkrestLocation}
                  onChange={()=>{
                    setcheckrestLocation(!checkrestLocation);
                  }}/>{" "}
                <label style ={{marginRight : "40px"}}>Location</label>
              </Label>
            </div>
          </Col>
          <Col></Col>
        </Row>

            <div style = {{marginLeft:"20px"}}  className = "tableContainer">
                <table className = "table table-striped">
                    <thead>
                        <th scope = "col">#</th>
                        <th scope = "col">Restaurant ID</th>
                        <th scope = "col">Restaurant Name</th>
                        <th scope = "col">Restaurant Description</th>
                        <th scope = "col">Restaurant Tele</th>
                        <th scope = "col">Restaurant Email</th>
                        <th scope = "col">Restaurant Category</th>
                        <th scope = "col">Restaurant Distric</th>
                        <th scope = "col">Operations</th>

                    </thead>

                    <tbody>
                        
                    {restaurants
            .filter((restaurant) => {
              let restName = restaurant.restName;
              if (searchText === "") {
                return restaurant;
              } else {
                if (checkrestName) {
                  if (
                    restName.toLowerCase().includes(searchText.toLowerCase())
                  ) {
                    return restaurant;
                  }
                }
                if (checkrestID) {
                  if (
                    restaurant.restID
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  ) {
                    return restaurant;
                  }
                }
                if (checkrestLocation) {
                  if (
                    restaurant.restLocation
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  ) {
                    return restaurant;
                  }
                }
              }
           
                        }).map((restaurant) =>(
                            
                            <tr>
                                <th scope = "row">{number++}</th>
                                <td><b>{restaurant.restID}</b></td>
                                <td><b>{restaurant.restName}</b></td>
                                <td><b>{restaurant.restDescription}</b></td>
                                <td><b>{restaurant.restTele}</b></td>
                                <td><b>{restaurant.restEmail}</b></td>
                                <td><b>{restaurant.restType}</b></td>
                                <td><b>{restaurant.restLocation}</b></td>
                                
                             

                                <td><Button color="warning"  style = {{padding: "5px 5px 5px 5px" , width : "80px" , marginBottom : "8px"}}
                                onClick = {()=>{
                                    history.push(`/edit-restaurant/${restaurant._id}`);
                                }}
                                >Edit</Button>

                                <Button color="danger" style = {{padding: "5px 5px 5px 5px", width : "80px"}}
                                onClick = {() =>{
                                    
                                    onDelete(restaurant);
                                }}
                                    
                               
                                >Remove</Button>
                               </td>
                            </tr>
    
                        ))}
                    </tbody>    


                </table>
            </div>   
            <span style = {{textAlign:"left" , color : "red"}}>{message}</span> <br/><br/>
            
            
            
            
            
            


           
            
            <HotelDetails />            
            
            <DemoFooter />
        </div>    
    );


}







export  default ViewRestauarant;

