import { Col, Container, Row } from "react-bootstrap";
import "../Styles/Footer.css";
import{FaFacebook,FaInstagramSquare} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {BiCopyright} from "react-icons/bi";


function Footer(){
    return(
        <>
        <Container fluid className="f-co">
            <Row>
                <Col md={{span:4}} className="cl1">
                <p className="f-h">Sound<b>Trend.</b></p>
            <p className="f-sub">The easy way to add trending music to your video</p>
            <span className="f-sm"><FaInstagramSquare style={{borderRadius:"50%",width:"30px",height:"30px"}}/>  <AiFillTwitterCircle style={{width:"30px",height:"30px"}}/>  <FaFacebook style={{width:"30px",height:"30px"}}/></span>
                </Col>
                <Col md={{span:3,offset:1}}>
                <p className="cp-r"><BiCopyright/> Copyright2021 Soundtrend</p>
                </Col>
                <Col md={{span:2,offset:1}} className="cl3">
                <p className="c-u">Contact Us</p>
            <p className="pri-p">Privacy Policy</p>
                </Col>
            </Row>
        </Container>







        {/* <Row className="f-rw">
            <Col>
            <p className="f-t">Sound<b>Trend.</b></p>
            <p className="f-s">The easy way to add trending music to your video</p>
            <span className="f-sm"><FaInstagramSquare style={{borderRadius:"50%",width:"30px",height:"30px"}}/>  <AiFillTwitterCircle style={{width:"30px",height:"30px"}}/>  <FaFacebook style={{width:"30px",height:"30px"}}/></span>
            </Col>
            <Col className="co">
        <p><BiCopyright/> Copyright2021 Soundtrend</p>
            </Col>
            <Col className="po">
            <p>Contact Us</p>
            <p className="pri">Privacy Policy</p>
            </Col>
        </Row> */}
        </>
    );
}

export default Footer;