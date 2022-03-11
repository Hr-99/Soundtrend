import { Col, Container, Row, Card, Button, Modal } from "react-bootstrap";
import "../Styles/EnS.css";
import { BsLink45Deg, BsShareFill, BsYoutube, BsGlobe, BsThreeDots } from "react-icons/bs";
import { AiFillInstagram, AiOutlineDownload } from "react-icons/ai";
import { FaFacebook, FaRegEdit, FaTiktok } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ApiUrl, InstaApiUrl } from "../utils/ApiURL.js";
import Swal from "sweetalert2";
import * as cors from "cors";

function EnS() {
    const [pageReload, setPageReload] = useState(false);
    const [isInsta, setIsInsta] = useState(false);
    const openModal = () => this.setState({ isOpen: true });
    const closeModal = () => this.setState({ isOpen: false });
    const [VideoLog, setVideoLog] = useState({
        MusicID: '',
        MusicLink: '',
        VideoTempFileLink: '',
        Username: '',
        Isactive: true
    })

    const [accessToken, setaccessToken] = useState({
        Client_key: 'awo04bgjkocna8ul',
        Client_secret: 'c5d3fd59cc47d4728294a6cf32741ecc',
        Code: '',
        Grant_type: 'authorization_code'
    })

    const changeState = () => {

        setPageReload(pageReload === true ? false : true);

    }

    const youtube = async () => {
        var RegID = localStorage.getItem("UserName").split('-')[0];
        var VideoID = localStorage.getItem("FinalShare");
        console.log(RegID);
        axios.get(ApiUrl + 'MediaShare/ShareYoutube?RegID=' + RegID + '&VideoID=' + VideoID)
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Video Shared Successfully On YouTube',
                    text: '',
                    showConfirmButton: false,
                    timer: 2500,
                    footer: ''
                })
            })
    }

    // const instashare = async () => {
    //     var RegID = localStorage.getItem("UserName").split('-')[0];
    //     console.log(RegID);
    //     axios.post(ApiUrl + 'MediaShare/ShareYoutube?RegID=' + RegID)
    //         .then(res => {
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Video Shared Successfully On YouTube',
    //                 text: '',
    //                 showConfirmButton: false,
    //                 timer: 2500,
    //                 footer: ''
    //             })


    //         })
    // }


    const instashare = async () => {

        var RegID = localStorage.getItem("UserName").split('-')[0];
        var VideoID = localStorage.getItem("FinalShare");
        console.log(RegID);
        axios.post(ApiUrl + 'MediaShare/ShareInstaClip?RegID=' + RegID + '&VideoID=' + VideoID)
            .then(res => {

                console.log(res.data.username)
                let fdata = new FormData();
                fdata.append('username', res.data.username);
                fdata.append('password', res.data.password);
                const requestOptions = {
                    method: "POST",
                    // headers: { 'Content-Type': 'application/json' },
                    body: fdata,
                };

                // Instagram("50813467538%3ASGVBu8q9mj00hG%3A7")
                fetch(InstaApiUrl + "auth/login", requestOptions)
                    .then((response) => response.json())
                    .then((jsonData) => {
                        // jsonData is parsed json object received from url
                        console.log(jsonData);
                        let abc = jsonData;
                        Instagram(abc)
                    })
                    .catch((error) => {
                        // handle your errors here
                        console.error(error);
                    });

            })
    };


    const Instagram = async (id) => {

        var url = document.getElementById("myvid").src;
        console.log('main ' + url)
        var formdata = new FormData();
        formdata.append("sessionid", id);
        formdata.append("file", url);
        formdata.append("caption", "fdf");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch(InstaApiUrl + "clip/upload", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }


    const [state, setstate] = useState({ isOpen: false });
    const copy = async () => {
        var url = document.getElementById("myvid").src;
        await navigator.clipboard.writeText(url);
        Swal.fire({
            icon: 'success',
            title: 'Text Copied',
            text: '',
            showConfirmButton: false,
            timer: 2500,
            footer: ''
        })
    }
    const Getdata = () => {
        VideoLog.RegisterID = localStorage.getItem("UserName");
        VideoLog.type = 'Select';
        axios.post(ApiUrl + 'MediaShare', VideoLog)
            .then(res => {
                console.log(res.data);
                var val = res.data.split('||')[1];
                var link = res.data.split('||')[0];
                localStorage.setItem("FinalShare", val);
                document.getElementById("myvid").src = link;
                //VideoData=res.data[0].videoLink;
            })







    }


    const openInNewTab = (code3) => {

        if (code3 == 'Ok') {
            const url = "https://open-api.tiktok.com/platform/oauth/connect/?client_key=awo04bgjkocna8ul&scope=user.info.basic,video.list,video.upload&response_type=code&redirect_uri=http://soundtrend.skyindya.co/TiktokRedirect&state=eydylt"
            const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
            if (newWindow) newWindow.opener = null

        }
        else {
            setaccessToken({ ...accessToken, Code: code3.replace('*', '%2A') })
            var code1 = code3;
            code1 = code1.replace('*', '%2A');
            axios.post(ApiUrl + 'MediaShare/GetTiktokAuth?code=' + code1)
                .then(res => {
                    if (res.data != null) {
                        var newdata = res.data;
                        console.log('newdata', newdata)
                        createFile(newdata)
                    }
                })
        }
    }

    async function createFile(objdata) {
        console.log('datafetch' + objdata);
        var url = document.getElementById("myvid").src;
        console.log('fileurl ' + url);
        var AuthDetails = objdata.data;

        var RegID = localStorage.getItem("UserName").split('-')[0];
        var VideoID = localStorage.getItem("FinalShare");


        console.log(RegID);
        axios.post(ApiUrl + 'MediaShare/ShareTiktokClip?open_id=' + AuthDetails.open_id + '&access_token=' + AuthDetails.access_token + '&RegID=' + RegID + '&VideoID=' + VideoID + '')
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Video Shared Successfully On Tiktok',
                    text: '',
                    showConfirmButton: false,
                    timer: 2500,
                    footer: ''
                })
            })


        // const file = await getFileFromUrl(url, 'TIKTOK.mp4');
        // console.log(file);
        // var formdata = new FormData();
        // formdata.append("video", file, "TIKTOK.mp4");
        // var requestOptions = {
        //     method: 'POST',
        //     body: formdata,
        //     redirect: 'follow'
        // };
        // fetch("https://open-api.tiktok.com/share/video/upload/?open_id=" + AuthDetails.open_id + "&access_token=" + AuthDetails.access_token + "", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));




        // var formdata = new FormData();
        // formdata.append("video", "C:\Users\XYZ\Downloads\1.mp4", "TIKTOK.mp4");

        // fetch("https://open-api.tiktok.com/share/video/upload/?open_id=" + AuthDetails.open_id + "&access_token=" + AuthDetails.access_token + "", requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
        // axios.post("https://open-api.tiktok.com/share/video/upload/?open_id=" + AuthDetails.open_id + "&access_token=" + AuthDetails.access_token + "", requestOptions)
        //     .then(res => {
        //         if (res.data != null) {
        //             var newdata = res.data;
        //             console.log('final data', newdata)
        //         }
        //     })


        // axios({
        //     method: "post",
        //     url: "https://open-api.tiktok.com/share/video/upload/?open_id=" + AuthDetails.open_id + "&access_token=" + AuthDetails.access_token + "",
        //     data: formdata,
        //     headers: { "Content-Type": "multipart/form-data" },
        // })
        //     .then(function (response) {
        //         //handle success
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         //handle error
        //         console.log(response);
        //     });

    }
    // async function getFileFromUrl(url, name, defaultType = 'video/mp4') {
    //     const response = await fetch(url);
    //     const data = await response.blob();
    //     return new File([data], name, {
    //         type: defaultType,
    //     });
    // }


    useEffect(() => {
        Getdata();
        const params = new URLSearchParams(window.location.search);
        var code = params.get('code')
        if (code != null) {


            openInNewTab(code)
        }
        else {
            console.log('nothing')
        }


    }, [pageReload])
    return (
        <>

            <Modal show={state.isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Container fluid className="ens">
                <p className="ens-logo">Sound<b>Trend.</b></p>
                <Row className='ens-rw'>
                    <Col className="ens-col1" style={{ marginTop: "5%" }}>
                        <div className="card-b">
                            <Card className="bg-dark e-s">
                                <video className="es-vid"
                                    id="myvid"



                                ></video>
                            </Card>
                        </div>
                        <Row className="pro-rw">
                            <Col className="round">
                                <div className="prof">
                                    <p className="prof-t">KE</p>
                                </div>
                            </Col>
                            <Col className="name">
                                <p>Keshav Narayan</p>
                                <p>July 18th, 2021 </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{ offset: 1 }} className="c2 text-center">
                        <p className="title">Edit & Share</p>

                        <Row className="tgl-rw">
                            <Col>
                                <div className="pv">
                                    <p className="cp-title">Public Video</p>
                                </div>
                            </Col>
                            <Col>
                                <div class="form-check form-switch tgl">
                                    <input class="form-check-input ck" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                </div>
                            </Col>
                            <p className='copy-t'>Anyone with the link can watch your video</p>
                            <Button variant="" onClick={copy} className="c-l">Copy Link <BsLink45Deg className="cp-l" /></Button>
                        </Row>


                        <Row className="sh-rw">
                            <Col>
                                <Button variant="dark" className="share-b">Share Directly on <BsShareFill className="share-l" /></Button>
                            </Col>
                            <Row className="sm">
                                <Col className="sm-btn  sm-1">
                                    <button style={{ border: "none", backgroundColor: "transparent" }} onClick={youtube}><BsYoutube fontSize={30} className="sm-c" /></button>
                                    <p>Youtube</p>
                                </Col>
                                <Col className="sm-btn  sm-2">
                                    <button style={{ border: "none", backgroundColor: "transparent" }} onClick={instashare}><AiFillInstagram fontSize={30} className="sm-c" /></button>
                                    <p>Instagram</p>
                                </Col>
                                <Col className="sm-btn sm-3">
                                    <button style={{ border: "none", backgroundColor: "transparent" }} onClick={() => openInNewTab('Ok')}><FaTiktok fontSize={30} className="sm-c sm-3" /></button>
                                    <p className='sm-3-t'>Tiktok</p>
                                </Col>
                                {/* <Row className="sm2">
                                <Col className="sm2-1 sm-btn">
                                <button style={{border:"none",backgroundColor:"transparent"}}><BsGlobe fontSize={30} className="sm-c"/></button>
                                <p>Website</p>
                                </Col>
                                <Col className="sm2-2 sm-btn">
                                <button style={{border:"none",backgroundColor:"transparent"}}><BsThreeDots fontSize={30} className="sm-c"/></button>
                                <p>Other</p>
                                </Col>
                            </Row> */}
                            </Row>
                        </Row>


                        <Row className="ed-rw">
                            <Col className="ed">
                                <button style={{ border: "none", backgroundColor: "transparent" }}><FaRegEdit fontSize={30} className="sm-c" /></button>
                                <p>Edit Video</p>
                            </Col>
                            <Col><IoRemoveOutline fontSize={80} className="io" /></Col>
                            <Col className="dl">
                                <button style={{ border: "none", backgroundColor: "transparent" }}><AiOutlineDownload fontSize={30} className="sm-c" /></button>
                                <p>Download MP4</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default EnS;