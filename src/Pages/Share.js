import { Col, Container, Row } from "react-bootstrap";
import "../Styles/Share.css";
import skii from "../Images/21.png";
import snowm from "../Images/22.png";


function Share(){
    return(
        <>

            <Container fluid className="sh">
            <Row className="text-center srw">
                <Col>
                <p className="s-title">Share Your Video With <span style={{color:"#2FD271"}}>Trending Sound Track</span> On Multiple <br /> Social Media Channels With One Click</p>
                </Col>
            </Row>
            <Row className="img-rw">
                <Col>
                <img src={skii} alt="" className="skii"/>
                <img src={snowm} alt="" className="snowm"/>
                </Col>
                <Col>
               
                </Col>
            </Row>

            </Container>








    
        </>
    );
}

export default Share;