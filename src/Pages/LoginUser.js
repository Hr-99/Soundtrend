import { Button, Col, Container, Row,Form} from "react-bootstrap";
import  "react-bootstrap";
import { withAlert } from "react-alert";
import  "bootstrap";
import "../Styles/Login.css";
import  im1 from "../Images/mobilebg.png";
import axios from "axios";
import { AlertContainer, alert } from 'react-custom-alert';
import 'react-custom-alert'; 
import { useState } from "react";
import { ApiUrl } from "../utils/ApiURL.js";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


  


function LoginUser(){
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

          axios.post(ApiUrl + 'Login', userState)
                .then(res => {
if(res.data.includes("User Authenticated.."))
{localStorage.setItem("UserName", res.data);
                  navigate('/Upload');}
                  else
                  {
                    
 
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: res.data,
                        showConfirmButton: false,
                        timer: 2500,
                        footer: ''
                      })
               //   alert(res.data);
               
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

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUserState({ ...userState, [name]: value })

}
    return(
        <>
               <Form>
        <div className="Container-fluid Conta">
        <Row>
        <Col  md={3}></Col>
            <Col  md={3} style={{display:"flex",width:"16%",marginLeft:"100px"}}>
            <Form.Group className="backgroundimage" >
            
            
        
            <p className="pstyle1">Sound<b><span style={{color:"#2FD271"}}>Trend.</span></b></p>
            </Form.Group>
            </Col>
            <Col md={3}>
            <Col md={18} className="panelborder" >
                <br></br>
            <p style={{fontSize:"25px"}} >Sound<b><span style={{color:"#2FD271"}}>Trend.</span></b></p>
            <hr>
            </hr>
            <br></br>
                <Row>
                <Col md={2}></Col>
                    <Col md={8}>
            <Form.Control type="text" name="UserName" placeholder="Username" value={userState.UserName} required="required" onChange={onChangeInput} />
                </Col>
                </Row>
                <br></br>
                <Row > <Col md={2}></Col><Col md={8}>
            <Form.Control type="password" name="Password" placeholder="Password" value={userState.Password} required="required" onChange={onChangeInput} />
                
                </Col></Row>
                <br></br>
                <Row><Col md={3}></Col>
                    <Col md={6}>
                    <button className="btn-lg  button" type="button" onClick={handleSubmit} style={{width:"100%",fontSize:"20px"}}>
    
    LOGIN
  </button>
                        </Col></Row>
                        <br></br>
                <Row><Col> <p style={{fontSize:"18px"}}>By signing up, you agree to our <br /> <b>Terms, Data Policy</b> and <b>Cookies <br /> Policy.</b></p></Col></Row>
               
            </Col>
            </Col>
            </Row></div>
            </Form>
        {/* <Container fluid className="l-co">
        <Row className="text-center">
            <Col className="l-c1">
            <img src={im1} alt="" className="c-img"/>
            <p className="c1-t">Sound<b><span style={{color:"#2FD271"}}>Trend.</span></b></p>
            </Col>
            <Col md={{span:4}} className="l-c2">
            <div className="b">
                <p style={{fontSize:"30px"}}>Sound<b>Trend.</b></p>
               
         
  
  

            </div>
            </Col>
        </Row>
        </Container> */}
        </>
    );
}


export default LoginUser;