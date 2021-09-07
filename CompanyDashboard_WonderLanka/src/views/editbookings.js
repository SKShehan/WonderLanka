
import React,{Component} from "react";
import './editbooking.css';
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
  Label,
  FormText

} from "reactstrap";



// core components

class Editbookings extends Component {

 constructor(props){
    super(props);
    this.state = {
        tourId:"",
        arrivalDate:"",
        bookingDate:"",
        email:"",
        mobileno:"",
        noOfAdults:"",
        noOfKids18:"",
        noOfKids8:"",
        insurance:"",
        itinerary:"",
        fullName:"",
        iclass:"",
        mobileNo:"",
        payment:"",
        country:""
    }
 }

 handleInputchange = (e) =>{
     const {name,value} = e.target;
     this.setState({
         ...this.state,
         [name]:value
     })
 }

 onsubmit = (e) =>{
     
     e.preventDefault();
     const id = this.props.match.params.id;
     const{tourId,arrivalDate,bookingDate,email,
     noOfAdults,noOfKids18,noOfKids8,insurance,itinerary,fullName,iclass,
     payment,mobileNo,country} = this.state;

     const data ={
        tourId:tourId,
        arrivalDate:arrivalDate,
        bookingDate:bookingDate,
        email:email,
        mobileNo:mobileNo,
        noOfAdults:noOfAdults,
        noOfKids18:noOfKids18,
        noOfKids8:noOfKids8,
        insurance:insurance,
        itinerary:itinerary,
        fullName:fullName,
        iclass:iclass,
        payment:payment,
        country:country
     }

     console.log(data);

     axios.put(`/post/update/${id}`,data).then((res)=>{
         if(res.data.success){
            alert("updated successfuly")
            this.setState(
                 {
                    tourId:"",
                    arrivalDate:"",
                    bookingDate:"",
                    email:"",
                    mobileNo:"",
                    noOfAdults:"",
                    noOfKids18:"",
                    noOfKids8:"",
                    insurance:"",
                    itinerary:"",
                    fullName:"",
                    iclass:"",
                    payment:"",
                    country:""
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
                tourId:res.data.post.tourId,
                arrivalDate:res.data.post.arrivalDate,
                bookingDate:res.data.post.bookingDate,
                email:res.data.post.email,
                mobileNo:res.data.post.mobileNo,
                noOfAdults:res.data.post.noOfAdults,
                noOfKids18:res.data.post.noOfKids18,
                noOfKids8:res.data.post.noOfKids8,
                insurance:res.data.post.insurance,
                itinerary:res.data.post.itinerary,
                fullName:res.data.post.fullName,
                iclass:res.data.post.iclass,
                payment:res.data.post.payment,
                country:res.data.post.country
            
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
      <p className="paragraph">Update Bookings</p>
        </center>
        
        <Container>
       
      <Row>
            <Col className="mx-auto" lg="18" md="7" style={{color:"black"}}>
           
      <Form>
        <br/>
      <FormGroup className="fonts">
      <Label for="exampleEmail">Tour ID</Label>
        <Input type="text" value = {this.state.tourId} onChange={this.handleInputchange} name="tourId" id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">Arrival Date</Label>
        <Input type="text" value = {this.state.arrivalDate} onChange={this.handleInputchange}  name="arrivalDate" id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">Booking Date</Label>
        <Input type="text" name="bookingDate" value = {this.state.bookingDate} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">Email</Label>
        <Input type="text" name="email" value = {this.state.email} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>

      <FormGroup className="fonts">
        <Label for="examplePassword">Full Name</Label>
        <Input type="text" value = {this.state.fullName} onChange={this.handleInputchange} name="fullName" id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">iClass</Label>
        <Input type="text" name="iclass" value = {this.state.iclass} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">Insurance</Label>
        <Input type="text" name="insurance" value = {this.state.insurance} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">Itinerary</Label>
        <Input type="text" name="itinerary" value = {this.state.itinerary} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">No of adults</Label>
        <Input type="text" name="noOfAdults" value = {this.state.noOfAdults} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">Country</Label>
        <Input type="text" name="country" value = {this.state.country} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>

      <FormGroup className="fonts">
        <Label for="examplePassword">No of kids18</Label>
        <Input type="text" name="noOfKids18" value = {this.state.noOfKids18} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">No of kids8</Label>
        <Input type="text" name="noOfKids8" value = {this.state.noOfKids8} onChange={this.handleInputchange}  id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">Payment</Label>
        <Input type="text" name="payment" value = {this.state.payment} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>
      <FormGroup className="fonts">
        <Label for="examplePassword">Mobile No</Label>
        <Input type="text" name="mobileNo" value = {this.state.mobileNo} onChange={this.handleInputchange} id="exampleEmail"  />
      </FormGroup>
      
      
      
      <br/>

      <Button  onClick={this.onsubmit} color="info" size="lg" block> Update</Button>
      <br/>
     
     
    </Form>
               
          
    </Col>
          </Row>
        </Container>
        <br/>
        <br/>
      </div>{" "}
    </>
  
    </div>
  );
  }
}
export default  Editbookings;
