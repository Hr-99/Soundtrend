import { Col, Container, Row,Button} from "react-bootstrap";
import "../Styles/Ad.css";



function Ad(){
    return(
        <>
        <Container fluid className="ad-co">
        <Row className="text-center">
            <Col>
            <p className="ad-h">Have a Perfect Song For a Perfect Moment <br /> Captured In <span style={{color:"#2FD271"}}>a Video?</span> </p>
            <p className="ad-s">With Soundtrend, you can easily combine them into a memorable clip!</p>
            <Button variant="" className="ad-b">Try it For Free</Button>
            </Col>
        </Row>

        </Container>
        
        
        
        
        
        
{/*         
        <Row className="text-center ad-rw">
            <Col>
            <p className="ad-t">Have a Perfect Song For a Perfect Moment <br /> Captured In <span style={{color:"#2FD271"}}>a Video?</span> </p>
            <p className="ad-s">With Soundtrend, you can easily combine them into a memorable clip!</p>
            <Button variant="" className="ad-btn">Try it For</Button>
            </Col>
            </Row>
         */}
        </>
        
    );
}

export default Ad;  