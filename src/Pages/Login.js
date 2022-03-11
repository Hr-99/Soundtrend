import { Button, Col, Container, Row,Form} from "react-bootstrap";
import Alert from  "react-bootstrap/Alert";
import  "react-bootstrap";
import "../Styles/Login.css";
import  im1 from "../Images/mobilebg.png";
import axios from "axios";
import { useState } from "react";
import { ApiUrl } from "../utils/ApiURL.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


  


function Login(){
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [userState, setUserState] = useState({
    Name:'',
    EmailId:'',
    MobileNo:'',
      UserName: '',
      Password: ''
  })

  const handleSubmit = async () => {
    
      try {

          axios.post(ApiUrl + 'Register', userState)
                .then(res => {
if(res.data =="Account Created Successfully.")
{
                  navigate('/LoginUser');}
                  else
                  {
                  //alert(res.data);
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.data,
                    showConfirmButton: false,
                    timer: 2500,
                    footer: ''
                  })
                  }
              })
      }
      catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
          showConfirmButton: false,
          timer: 2500,
          footer: ''
        })
      }
     
  };
  const handleLogin = async () => {
    
    try {
                navigate('/LoginUser');
    }
    catch (error) {


    }
   
};

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUserState({ ...userState, [name]: value })

}
    return(
      <Form>
        <div class="Container-fluid Conta">
        <row>
          <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-3 " style={{display:"flex"}} >
          <Form.Group class="backgroundimage">
            
            {/* <img src={im1} alt="" /> */}
            {/* <p className="c1-t"></p> className="b" */}
             {/* <Container fluid className="l-co">
        <Row className="text-center">
            <Col className="l-c1">
          
            </Col>
            <Col md={{span:4}} className="l-c2">
            
            </Col>
        </Row>
        </Container> */}
        
            <p class="pstyle">Sound<b><span style={{color:"#2FD271"}}>Trend.</span></b></p>
            </Form.Group>
            </div>
            <div class="col-md-1">

            </div>
            
          <div class="col-md-4 panelborder"  >
          <div  >
            <br></br>
                <p style={{fontSize:"30px"}}>Sound<b>Trend.</b></p>
               
                <hr />
                {/* <p className="or">OR</p> */}
                <br />
              
  <Form.Group className="mb-3" controlId="formBasicEmail">
   
    <Form.Control type="email" name="EmailId" placeholder="Enter Email" value={userState.EmailId} required="required"  onChange={onChangeInput} />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicMobile">
   
   <Form.Control type="mobile" name="MobileNo" placeholder="Enter Mobile No" value={userState.MobileNo} required="required"  onChange={onChangeInput} />
  
 </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="text" name="Name" placeholder="Full Name" value={userState.Name}  required="required" onChange={onChangeInput} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Control type="text" name="UserName" placeholder="Username" value={userState.UserName} required="required" onChange={onChangeInput} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox1">
  <Form.Control type="password" name="Password" placeholder="Password" value={userState.Password} required="required" onChange={onChangeInput} />
  </Form.Group>
  <div class="row">
  <div class="col-md-6"> <button class="btn-lg  button"  type="button" onClick={handleSubmit} style={{width:"100%",fontSize:"20px"}}>Sign up
  </button> </div>

    <div class="col-md-6"> <button  class="btn-lg button"  onClick={handleLogin} style={{width:"100%",fontSize:"20px"}}>Login</button></div>
    
    
   
  </div>
 <br /><br />
      <p style={{fontSize:"18px"}}>By signing up, you agree to our <br /> <b>Terms, Data Policy</b> and <b>Cookies <br /> Policy.</b></p>

            </div>
          </div>
          </div>
          </row>
        </div>
      
        </Form>
    );
}


export default Login;