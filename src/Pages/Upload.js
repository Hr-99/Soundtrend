import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import "../Styles/Upload.css";
import { ApiUrl } from "../utils/ApiURL.js";
import Logo from "../Images/soundtrend-logo.png";
import { AiOutlineCloudUpload, AiFillFolderOpen } from "react-icons/ai";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function Upload() {

  const [files1, setFiles1] = useState(false)
  //const history = useHistory();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();

  const [show, setShow] = useState(false);
  const [userState, setUserState] = useState({

    Video: '',
    UserName: ''
  })

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "video/*",
    onDrop: (acceptedFiles) => {
      setFiles1(true
      )
      console.log(acceptedFiles);
      setSelectedFile(acceptedFiles[0]);
    },
  });
  const [video, setVideo] = useState();
  const files = acceptedFiles.map((file) => (
    <div key={file.path}>{file.path}</div>

  ));

  const handleUpload = async (e) => {
    // e.preventDefault();
    //  alert(files);
    try {
      const file = acceptedFiles[0];
      // setpic(URL.createObjectURL(e.target.files[0]));
      if (!file) return Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'File Not Exists...',
        showConfirmButton: false,
        timer: 2500,
        footer: ''
      });

      // if (file.type == "video/mp4")
      //   // 1mb
      //   return alert("File format is incorrect.");
      console.log(localStorage.getItem("UserName"));
      var formData = new FormData();
      formData.append("Video", selectedFile);
      formData.append("UserName", localStorage.getItem("UserName"));
      console.log(formData);
      axios.post(ApiUrl + 'VideoUpload', formData)
        .then(res => {
          if (res.data == "Data Saved Successfully..") {
            navigate('/Media');
          }
          else {
            // alert(res.data);
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
      //alert('Saved');
      // const res = await axios.post("http://192.168.31.212:5000/Uploads/uploadVideo", formData, {
      //   headers: { "content-type": "multipart/form-data" },
      // });
      //  console.log(res.data.path.replace('\\', '/'));
      // history.push({ pathname: '/musicpage', state: `http://192.168.31.212:5000/${res.data.path.replace('\\', '/')}` })
    } catch (err) {
      // alert(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
        showConfirmButton: false,
        timer: 2500,
        footer: ''
      })
    }
  };


  return (
    <>
      <div className="card-body">
        <nav
          className="navbar navbar-expand-lg upload-nav navbar-light bg-transparent"
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "65px",
            paddingRight: "65px",
          }}
        >
          <NavLink className="navbar-brand animated bounce" to="/" id="animated-example">
           <p className="logo-t">Sound<b>Trend.</b></p>
          </NavLink>

        </nav>

        <div
          className="p-5"
          style={{
            maxWidth: "1500px",
            height: "auto",
            margin: "0 auto",
            borderRadius: "20px",
            background: "#F8FFFB",
          }}
        >

          {/* <input type = 'file'  onChange={(e) => handleChangeVideo(e)}></input> */}

          <div className="container-body" style={{ textAlign: "center" }}>
            <div {...getRootProps({ className: "upload-file" })}>
              <input {...getInputProps()} />
              <div className="upload-icon" style={{ cursor: "pointer" }}>
                <AiOutlineCloudUpload fontSize="80px" />
              </div>
              <div className="upload-file-text">Upload a File</div>
              <aside>
                <div
                  className="pt-2 impoet-file"
                >
                  {files}
                </div>
              </aside>
              <div
                className="upload-file-subtext"
                style={{ cursor: "pointer" }}
              >
                Click to<span className="browse-text"> <b>Browse,</b></span> or
                <br />
                drag and drop your file here
              </div>
            </div>
            <br></br>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" >
                  <div className="card-upload-icons">
                    <div className="file-icon">
                      <AiFillFolderOpen fontSize="60px" color="#2FD271" />
                    </div>
                    <div className="icon-text-footer">My Device</div>
                  </div>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" >
                  <div className="card-upload-icons" data-aos="zoom-in"
                    data-aos-duration="1200">
                    <div className="video-icon">
                      <BsCameraVideoFill fontSize="60px" color="#2FD271" />
                    </div>
                    <div className="icon-text-footer">Record</div>
                  </div>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3" >
                  <div className="card-upload-icons" data-aos="zoom-in"
                    data-aos-duration="1200">
                    <div className="ggogle-icon">
                      <FaGoogleDrive fontSize="60px" color="#2FD271" />
                    </div>
                    <div className="icon-text-footer">Google drive</div>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <div className="up-btn" style={{ textAlign: "center" }}>
              <button class="btn-lg button1" type="button" onClick={handleUpload} style={{ width: "25%", fontSize: "20px", align: "left" }}>

                Upload
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}


export default Upload;