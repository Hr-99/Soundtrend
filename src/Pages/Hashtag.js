import { Col, Container, Row,Button } from "react-bootstrap";
import "../Styles/Hashtag.css";
import htag from "../Images/sound.png";
import tagbg from "../Images/Rectangle 59.png";


function Hashtag(){
    return(
        <>
        <Container fluid className="hash-cont">
            <Row className="tag-rw">
                <img src={tagbg} className="rw-im"/>
            <Col>
            <img src={htag} alt="" className="tag-img"/>
            </Col>
            <Col className="tag-t">
            <p className="tag-h">Sound is a New <span style={{color:"#2FD271"}}>Hashtag</span></p>
                <p className="tag-s">Add music to videos on both Windows and Mac. Our online video editor works right <br />
                 in your browser, so you can edit everywhere - on iPhone and android devices too! <br />
                  Once you’ve added your audio files and video files together you can resize them to <br />
                   fit any social media platform - TikTok, YouTube, Snapchat, Instagram, Twitter, <br /> LinkedIn and more.</p>
                   <Button variant="" className="tag-btn">Try For Free</Button>
            </Col>
            </Row>
        </Container>




        </>
    );
}

export default Hashtag;