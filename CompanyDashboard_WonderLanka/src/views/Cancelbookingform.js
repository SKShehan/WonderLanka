
import React,{Component} from "react";
import './section.css';
import axios from 'axios';
// reactstrap components


import {
  Button,
  Card,
  Form,
  Input,
  Container,
  Row,
  Col,
  FormGroup,
  Label

} from "reactstrap";



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
  return (
    <div>
    <>
      <div
 
 style={{
   backgroundColor: '#def28d',
  
 }}
 
      >
        <br/>
        
        <center>
      <p className="paragraph">Cancel Booking</p>
        </center>
        <br/>
        <br/>
        <Container>
       
      <Row>
            <Col className="mx-auto" lg="18" md="7" style={{color:"black"}}>
           
      <Form>
        
      <FormGroup className="fonts">
        <Label for="exampleEmail">Tour ID</Label>
        <Input type="text" value={this.state.tourId} onChange={this.handleInputChange} name="tourId" id="exampleEmail" placeholder="Enter Booking ID" />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">Cancellation Date</Label>
        <Input type="text" value={this.state.cancellationdate} onChange={this.handleInputChange} name="cancellationdate" id="examplePassword" placeholder="Enter date" />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="exampleSelect">Reason</Label>
        <Input type="select" value={this.state.reason} onChange={this.handleInputChange} name="reason" id="exampleSelect">
          <option>Company Reason</option>
          <option>User Request</option>
        </Input>
      </FormGroup>
      
      <FormGroup className="fonts">
        <Label for="examplePassword">Amount</Label>
        <Input type="text" value={this.state.amount} onChange={this.handleInputChange} name="amount" id="examplePassword" placeholder="Enter amount" />
      </FormGroup>
      
      <br/>

      <Button onClick={this.onsubmit} color="info" size="lg" block>Submit</Button>
      <br/>
      <Button   color="danger" size="lg" block>Generate Report</Button>
     
    </Form>
               
          
    </Col>
          </Row>
        </Container>
        <br/>
        <br/>
        <br/>
      </div>{" "}
    </>
    
    </div>
  );
  }
  
}
export default  Cancelbookingform;
