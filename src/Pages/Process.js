import { Col, Container, Row } from "react-bootstrap";
import "../Styles/Process.css";
import one from "../Images/1.png";
import two from "../Images/2.png";
import three from "../Images/3.png";




function Process(){
    return(
        <>
        <Container fluid className="pro-co">
            <Row className="text-center">
                <Col>
                <p className="pro-h">How it <span style={{color:"#2FD271"}}>Works</span></p>
                </Col>
            </Row>
            <Row className="im-rw">
                <Col>
                <img src={one} alt="" className="img1"/>
                </Col>
                <Col className="img1-t">
                <p className="t1-h">1.Choose a Video</p>
                    <p className="t1-sh">First, select a video file from your Mac, Windows,<br />
                     Android or iPhone. If you want to add music to <br />
                      YouTube video, paste its URL to the appropriate box. <br />
                       You can also choose it from your Google Drive or <br /> Dropbox account.</p>
                </Col>
            </Row>
            <Row className="im-rw2">
               
                <Col className="img2-t">
                <p className="t2-h">2.Select Audio</p>
                    <p className="t2-sh">You can remove the video’s current audio by <br />
                     adjusting the volume slider. Then click ‘Upload’ <br />
                      ‘Upload Audio’, to add your music and sound <br /> effects.</p>
                </Col>
                <Col>
                <img src={two} alt="" className="img2"/>
                </Col>
            </Row>
            <Row className="im-rw3">
                <Col>
                <img src={three} alt="" className="img3"/>
                </Col>
                <Col className="img3-t">
                <p className="t3-h">3.Download and Share</p>
                    <p className="t3-sh">It's done! Now, watch the preview and if you like it, <br />
                    just click "Download" or share on multiple social <br />
                    media platforms in one click (you can also save the <br />
                    result back to Google Drive or Dropbox). Otherwise, <br /> go back to editing.</p>
                </Col>
            </Row>
        </Container>








        {/* <Row className="text-center">
            <Col>
                <p className="pro-t">How it <span style={{color:"#2FD271"}}>Works</span></p>
            </Col>
        </Row>

            <Row className="p1-rw">
                <Col className="p1">
                <img src={one} alt="" className="p1-img"/>
                </Col>
                <Col className="p1-t">
                    <p className="p1-h">1.Choose a Video</p>
                    <p className="p1-sub">First, select a video file from your Mac, Windows,<br />
                     Android or iPhone. If you want to add music to <br />
                      YouTube video, paste its URL to the appropriate box. <br />
                       You can also choose it from your Google Drive or <br /> Dropbox account.</p>
                </Col>
            </Row>
            <Row className="p2-rw">
                
                <Col className="p1-t p2-t">
                    <p className="p1-h">2.Select Audio</p>
                    <p className="p1-sub ">You can remove the video’s current audio by <br />
                     adjusting the volume slider. Then click ‘Upload’ > <br />
                      ‘Upload Audio’, to add your music and sound <br /> effects.</p>
                </Col>
                <Col className="p1">
                <img src={two} alt="" className="p1-img p2-img"/>
                </Col>
            </Row>
            <Row className="p3-rw">
                <Col className="p1">
                <img src={three} alt="" className="p1-img"/>
                </Col>
                <Col className="p1-t">
                    <p className="p1-h">3.Download and Share</p>
                    <p className="p1-sub">It's done! Now, watch the preview and if you like it, <br />
                    just click "Download" or share on multiple social <br />
                    media platforms in one click (you can also save the <br />
                    result back to Google Drive or Dropbox). Otherwise, <br /> go back to editing.</p>
                </Col>
            </Row> */}
        </>
    );
}

export default Process;