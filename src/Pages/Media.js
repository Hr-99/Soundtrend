import { Button, Card, Col, Container, Row, ListGroup } from "react-bootstrap";
import "../Styles/Media.css";

import peach from "../Images/peaches.png";
import wg from "../Images/DL.png";
import Btr from "../Images/BTS.png";
import g4u from "../Images/OR.png";
import Kmf from "../Images/DC.png";
import { FaPlay } from "react-icons/fa";
import { AiFillPauseCircle } from "react-icons/ai";
import { ImVolumeMedium } from "react-icons/im";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiUrl } from "../utils/ApiURL.js";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Media() {
  const [pageReload, setPageReload] = useState(false);
  const [ClientBrief, setClientBrief] = useState({
    MusicMasterId: 0,
    MusicCode: "",
    MusicName: "",
    MusicArtists: "",
    FileLink: "",
  });
  const [VideoProcess, setVideoProcess] = useState({
    MusicID: "",
    MusicLink: "",
    VideoTempFileLink: "",
    Username: "",
    Isactive: true,
  });

  const [Videofinalshare, setVideofinalshare] = useState({
    VideoTempId: "",
    FileLink: "",
    RegisterID: "",
  });

  const [ClientBriefDetails, setClientBriefDetails] = useState([]);
  const [TempVideoDetails, setTempVideoDetails] = useState([]);
  var [VideoData, setVideoData] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const changeState = () => {
    setPageReload(pageReload === true ? false : true);
  };
  const GetProjectBriefByID = () => {
    console.log("hii");
    axios.get(ApiUrl + "MusicMaster").then((res) => {
      console.log(res.data);
      setClientBriefDetails(res.data);
    });

    axios
      .get(ApiUrl + "VideoUpload?id=" + localStorage.getItem("UserName"))
      .then((res) => {
        console.log(res.data);
        document.getElementById("myvid").src = res.data[0].videoLink;
        //VideoData=res.data[0].videoLink;
      });

    VideoProcess.Username = localStorage.getItem("UserName");
    VideoProcess.type = "Select";
    //setVideoProcess({ ...ClientBrief, ProjectBriefId: ProjectBriefIds, Title: Titles, Description: Descriptions })
    console.log(VideoProcess);
    axios.post(ApiUrl + "VideoAudio", VideoProcess).then((res) => {
      console.log(res.data);
      setTempVideoDetails(res.data);
    });
  };
  useEffect(() => {
    GetProjectBriefByID();
    var ppbutton = document.getElementById("vidbutton");
    var ppbutton1 = document.getElementById("vidbutton1");
    ppbutton.addEventListener("click", playPause);
    ppbutton1.addEventListener("click", playPause1);
    var myVideo = document.getElementById("myvid");
    function playPause() {
      if (myVideo.paused) {
        myVideo.play();
        // ppbutton.innerHTML = "Pause";
      }
    }

    function playPause1() {
      if (myVideo.play) {
        myVideo.pause();
      }
    }
    var audio_element = document.getElementById("cs_audio");
    audio_element.addEventListener("click", audio);
    function audio() {
      document.onkeydown = function (event) {
        switch (event.key) {
          case 38:
            event.preventDefault();
            var audio_vol = audio_element.volume;
            if (audio_vol != 1) {
              try {
                audio_element.volume = audio_vol + 0.02;
              } catch (err) {
                audio_element.volume = 1;
              }
            }

            break;
          case 40:
            event.preventDefault();
            audio_vol = audio_element.volume;
            if (audio_vol != 0) {
              try {
                audio_element.volume = audio_vol - 0.02;
              } catch (err) {
                audio_element.volume = 0;
              }
            }

            break;
        }
      };
    }
  }, [pageReload]);

  const handleShow = (
    musicMasterId,
    musicCode,
    musicName,
    musicArtists,
    fileLink
  ) => {
    axios
      .get(ApiUrl + "VideoUpload?id=" + localStorage.getItem("UserName"))
      .then((res) => {
        console.log(res.data);
        document.getElementById("myvid").src = res.data[0].videoLink;
        //VideoData=res.data[0].videoLink;
      });

    VideoProcess.MusicID = musicMasterId.toString();
    VideoProcess.musicLink = fileLink;

    VideoProcess.videoTempFileLink = document.getElementById("myvid").src;
    VideoProcess.Username = localStorage.getItem("UserName");
    VideoProcess.type = "Video";
    //setVideoProcess({ ...ClientBrief, ProjectBriefId: ProjectBriefIds, Title: Titles, Description: Descriptions })
    console.log(VideoProcess);
    axios.post(ApiUrl + "VideoAudio", VideoProcess).then((res) => {
      if (res.data.length > 0) {
        document.getElementById("myvid").src = res.data[0].videoTempFileLink;

        console.log(res.data);
        setTempVideoDetails(res.data);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error",
          showConfirmButton: false,
          timer: 2500,
          footer: "",
        });
        //   alert('Error');
      }
    });
  };
  const downloadData = () => {
    fetch(document.getElementById("myvid").src).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "Video.mp4";
        a.click();
      });
      //window.location.href = response.url;
    });
  };

  const FinalShare = () => {
    Videofinalshare.RegisterID = localStorage.getItem("UserName");
    axios.post(ApiUrl + "VideoFinalShare", Videofinalshare).then((res) => {
      if (res.data == "Share Video") {
        navigate("/EnS");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error",
          showConfirmButton: false,
          timer: 2500,
          footer: "",
        });
      }
    });
  };

  const VideoShow = (VideoTempFileLink, VideoTempId) => {
    Videofinalshare.VideoTempId = VideoTempId.toString();
    Videofinalshare.FileLink = VideoTempFileLink;

    document.getElementById("myvid").src = VideoTempFileLink;
  };
  const NewProject = async () => {
    try {
      navigate("/Upload");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error",
        showConfirmButton: false,
        timer: 2500,
        footer: "",
      });
    }
  };
  return (
    <>
    <p className="media-logo">Sound<b>Trend.</b></p>
      <Container fluid className="main-rw">
        <Row className="text-center rw-11">
          <Col className="m-c1">
            <div className="card-bg">
              <Card className="bg-dark vid">
                <video className="vid-s" id="myvid" src={VideoData}></video>
              </Card>
            </div>
            <div className="m-btn">
              <button className="play" id="vidbutton"><FaPlay fontSize={25} color="#2FD271" /></button>
              <button className="stop" id="vidbutton1"><AiFillPauseCircle fontSize={25} color="#2FD271" /></button>
              <button className="vol" id='cs_audio'><ImVolumeMedium fontSize={25} color="#2FD271" /></button>
            </div>
            <div className="sh-btn">
              <Button variant="" className="share" onClick={() => {
                FinalShare()
                Swal.fire({
                  icon: "success",
                  title: "Video Uploaded",
                  text: "Successfully",
                  showConfirmButton: false,
                  timer: 2000
                });
              }}>Share</Button>
            </div>
          </Col>
          <Col md={{ offset: 1 }}>
            <div className="list">
              <Button variant="dark" className="new-btn" onClick={NewProject}>New Project +</Button>
              <Button variant="" className="exp-btn" key="1swedqwe" style={{ backgroundColor: "#2FD271" }} onClick={downloadData}>Export</Button>
              <ListGroup style={{ marginTop: "6%", marginLeft: "4%" }}>
                {ClientBriefDetails.map((ClientBriefDetail, index) => (<>

                  {

                    <a href="#" style={{ textDecoration: "none" }} >
                      <ListGroup.Item className="d-flex justify-content-between align-items-start li-item list-itms"   >
                        <img src={peach} alt="peaches" width={60} height={60} key={ClientBriefDetail.musicMasterId} />
                        <div className="ms-2 me-auto" style={{ width: "40%" }} onClick={() => handleShow(ClientBriefDetail.musicMasterId, ClientBriefDetail.musicCode, ClientBriefDetail.musicName, ClientBriefDetail.musicArtists, ClientBriefDetail.fileLink)}>
                          <div className="fw-bold" >{ClientBriefDetail.musicName}</div>
                          <p style={{ marginLeft: "22px" }}>{ClientBriefDetail.musicArtists}</p>
                        </div>
                      </ListGroup.Item>
                    </a>


                  }
                </>))
                }
              </ListGroup>
            </div>
          </Col>
        </Row>


      </Container>
      <Row className="t-rw">

        {TempVideoDetails.map((TempVideoData, index) => (
          <>
            {
              <Col md={{ span: 3 }}>
                <Card className="bg-dark tile">
                  <video
                    id="myvid"
                    key={TempVideoData.videoTempId}
                    onClick={() =>
                      VideoShow(
                        TempVideoData.videoTempFileLink,
                        TempVideoData.videoTempId
                      )
                    }
                    style={{ height: "161px" }}
                    src={TempVideoData.videoTempFileLink}
                  ></video>
                </Card>
              </Col>
            }
          </>
        ))}

      </Row>
    </>
  );
}

export default Media;