import React from "react";
import "../Styles/Hero.css";
import hero from "../Images/Group 39.png";
import {Button, Col, Container, Row} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
function Hero() {
    const navigate = useNavigate();
    const handleSubmit = async () => {

        try {
                    navigate('/Login');
              
        }
        catch (error) {
  
  
        }
    };
    const handlelogin = async () => {

        try {
                    navigate('/LoginUser');
              
        }
        catch (error) {
  
  
        }
    };
    return (
        <>
            <Container fluid className="h-c">
                <img src={hero} alt="" style={{backgroundColor:"white"}}/>
                <Row className="rw">
                    <Col md={{span:2,offset:1}}>
                    <p className="logo">Sound<b>Trend.</b></p>
                    </Col>
                    <Col md={{span:2,offset:2}} className="log">
                    <Button variant="dark"  onClick={handlelogin} style={{borderRadius:"20px",width:"55%",height:"35px"}}>Login</Button>
                    </Col>
                    <Col md={{span:2,offset:2}} className="start">
                    <Button variant=""  onClick={handleSubmit} style={{borderRadius:"20px",border:"1px solid #2FD271",backgroundColor:"transparent",color:"#2FD271",fontWeight:"600",width:"75%",height:"35px"}}>Get Started</Button>
                    </Col>
                </Row>
                  <Row className="title">
                    <Col>
                    <p className="t-h"><span style={{color:"#2FD271"}}>THE COOLEST</span> MARKETING <br /> TOOL OF 2021</p>
                    <p className="s-t">Combine your video with the latest trending songs</p>
                    
                    <Button variant="" className="try-btn">Try it For Free</Button>
                    </Col>
                </Row>
                
            </Container>
            


           
            



        </>


    );
}

export default Hero;