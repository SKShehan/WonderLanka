import styles from '../assets/css/AddBookingCancellation.module.css'
import React,{Component} from "react";
import './section.css';
import axios from 'axios';
import IndexHeader from 'components/Headers/IndexHeader';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import DemoFooter from 'components/Footers/DemoFooter';
// reactstrap components


import{
  Label,
  Input,
  Button
}
from 'reactstrap'



// core components

class Cancelbookingform extends Component {

  constructor(props){
    super(props);
    this.state={
      tourId:"",
      cancellationdate:"",
      reason:"",
      amount:""
    }
  }
  


  handleInputChange =(e) =>{
     const {name,value} = e.target;
     this.setState({
         ...this.state,
        [name]:value
     })
  }
 
  onsubmit = (e) =>{
     
    e.preventDefault();
    
    const {tourId,cancellationdate,reason,amount} = this.state;
    const data ={
       tourId:tourId,
       cancellationdate:cancellationdate,
       reason:reason,
       amount:amount
    }

    console.log(data);
    axios.post("/cancel/save",data).then((res)=>{
      if(res.data.success){
         this.setState(
              {
                tourId:"",
                cancellationdate:"",
                reason:"",
                amount:""    
              }
          )
       }})
       window.location = '/';
}


componentDidMount(){
  const id = this.props.match.params.id;
  axios.get(`/book/${id}`).then((res) =>{
      if(res.data.success){
          this.setState({
              tourId:res.data.post.tourId
          });
          console.log(this.state.post);
      }
  });
}


   
  render(){
    return(
      <>
      <IndexHeader />
      <IndexNavbar />
      <div style = {{paddingTop : "50px"}} className = {styles.body}>
          <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Insert Booking Cancellation Details</h3><br/><br/>
          <div className = {styles.FormContainer}>
          <form >
          
        <Label for="exampleEmail">Tour ID</Label>
        <Input type="text" value={this.state.tourId} onChange={this.handleInputChange} name="tourId" id="exampleEmail" placeholder="Enter Booking ID" />
        <br/>
      
        <Label for="examplePassword">Cancellation Date</Label>
        <Input type="text" value={this.state.cancellationdate} onChange={this.handleInputChange} name="cancellationdate" id="examplePassword" placeholder="Enter date" />
        <br/>
      
        <Label for="exampleSelect">Reason</Label>
        <Input type="select" value={this.state.reason} onChange={this.handleInputChange} name="reason" id="exampleSelect">
          <option>Company Reason</option>
          <option>User Request</option>
        </Input>
        <br/>
      
      
        <Label for="examplePassword">Amount</Label>
        <Input type="number" value={this.state.amount} onChange={this.handleInputChange} name="amount" id="examplePassword" placeholder="Enter amount" />
        <br/>
                
        <Button color = "primary" type = "submit" style = {{float:'right' , margin : "5px" }}
        onClick={this.onsubmit} 
        >Submit</Button>
          </form>    
          </div>
      </div>   
      <DemoFooter />
     </>     
  );
  }
  
}
export default  Cancelbookingform;
