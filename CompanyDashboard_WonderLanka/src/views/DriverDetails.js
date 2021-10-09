import driverStyles from "../assets/css/DriverDetails.module.css";


import{Button} from 'reactstrap'
import{ useHistory } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';
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
function DriverDetails(){
    
    let history = useHistory();

    const [drivers , setDrivers] = useState([]);
    const [message , setMessage] = useState("");
    const [searchVal , setSearchVal] = useState("");

  




    

    useEffect(() => {
        axios.get("http://localhost:8070/drivers/details").then((res) =>{
            setDrivers(res.data);
            console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
    
      }, []);

    

    function onDelete(driver)  {
        if (
            window.confirm(
              "Driver " + driver.driverid + " will be removed from the database"
            )
        )
        axios.delete(`http://localhost:8070/drivers/delete${driver._id}`).then((res) =>{
            console.log(res);
            
            setMessage("Driver Deleted!");
            toast.error('Driver Deleted!', {
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
            
            <center><h1>Driver Details</h1><br/><br/></center>

            <Row>
          <Col>
            <FormGroup>
              <InputGroup style = {{marginLeft : "70px"}} className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search " type="text" 
                    onChange = {(e) =>{
                                setSearchVal(e.target.value);
                    }}/>
              </InputGroup>
            </FormGroup>
          </Col>
          <Col>
            <div>
              <Label style = {{marginLeft : "70px"}} check>
                <Input type="checkbox"/>{" "} 
                <label style ={{marginRight : "40px"}}>Driver ID</label>
              </Label>

              <Label check>
                <Input type="checkbox"/>{" "}
                <label style ={{marginRight : "40px"}}>First Name</label>
              </Label>

              <Label check>
                <Input type="checkbox" />{" "}
                <label style ={{marginRight : "40px"}}>License ID</label>
              </Label>
            </div>
          </Col>
          <Col></Col>
        </Row>

           <center>
                <table width ="90%" border ="2px"className = {driverStyles.tbldata}>
                    <tr>
                       
                        <th className={driverStyles.tbldata}>Driver ID</th>
                        <th className={driverStyles.tbldata}>First Name</th>
                        <th className={driverStyles.tbldata}>Last Name</th>
                        <th className={driverStyles.tbldata}>Email</th>
                        <th className={driverStyles.tbldata}>Phone Number</th>
                        <th className={driverStyles.tbldata}>License ID</th>
                        <th className={driverStyles.tbldata}>Languages</th>
                        <th className={driverStyles.tbldata}>Actions</th>
                       
                    </tr>

                    <tbody>
                        
                        {drivers.filter((val) =>{
                          
                          if(searchVal === ''){
                            return val;
                          }
                          else if (val.driverid.toLowerCase().includes(searchVal.toLowerCase())){
                            return val;
                          }
                          else if (val.firstname.toLowerCase().includes(searchVal.toLowerCase())){
                            return val;
                          }
                          else if (val.licenseid.toLowerCase().includes(searchVal.toLowerCase())){
                            return val;
                          }
                          

                          
                        
                        }).map((driver) =>(
                            
                            <tr className={driverStyles.tbldata}>
                                
                                <td className={driverStyles.tbldata}>{driver.driverid}</td>
                                <td className={driverStyles.tbldata}>{driver.firstname}</td>
                                <td className={driverStyles.tbldata}>{driver.lastname}</td>
                                <td className={driverStyles.tbldata}>{driver.email}</td>
                                <td className={driverStyles.tbldata}>{driver.phonenumber}</td>
                                <td className={driverStyles.tbldata}>{driver.licenseid}</td>
                                <td className={driverStyles.tbldata}>{driver.languages}</td>
                                
                                <td className={driverStyles.tbldata}>
                                  <button 
                                   className={driverStyles.btnEdit}
                                onClick = {()=>{
                                    history.push(`/edit-driver/${driver._id}`);
                                }}
                                >Edit</button>

                                <button  className={driverStyles.btnDelete}
                                onClick = {() =>{
                                    
                                    onDelete(driver);
                                }}
                                    
                               
                                >Delete</button>
                               </td>
                            </tr>
    
                        ))}
                    </tbody>    


                </table>
                </center>
            
            <span style = {{textAlign:"left" , color : "red"}}>{message}</span> <br/><br/>
            <DemoFooter />
      
        </div>   
        
    );


}

export  default DriverDetails;

