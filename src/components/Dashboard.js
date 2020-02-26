import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";
import Modallogin from "./Modallogin";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Datakucing from "../data/datakucing.json";
import Deck from "./Deck";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <Row>
            {/* kiri */}
            <Col md={4}>
              <div className="kiri-Dashboard">
                <div>
                  <Link to="/Profile">
                    <img
                      className="image-profile-setting"
                      src={require("./Image/kucing3.jpg")}
                    />
                  </Link>
                </div>
                <span>Jojon</span>
                <p style={{ transform: "rotate(270deg)" }}>
                  <svg
                    width="27"
                    height="41"
                    viewBox="0 0 27 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="31.6598"
                      height="4.87084"
                      rx="2.43542"
                      transform="matrix(-0.791024 0.611785 0.395796 0.918338 25.0437 0)"
                      fill="white"
                    />
                    <rect
                      width="31.6598"
                      height="4.87084"
                      rx="2.43542"
                      transform="matrix(-0.791024 -0.611786 -0.395797 0.918338 26.981 36.4551)"
                      fill="white"
                    />
                  </svg>
                </p>
              </div>

              <div className="header">
                <p>Match</p>
              </div>
              <div style={{ width: "100%", overflow: "hidden" }}>
                <div
                  style={{
                    height: "472px",
                    width: "104%",
                    overflow: "scroll"
                  }}
                >
                  <Row
                    style={{
                      padding: "25px",
                      height: "50px !important",
                      overFlow: "hidden"
                    }}
                  >
                    {Datakucing.map(m => (
                      <Col sm={4} className="mt-5">
                        <Card className="Gambar">
                          <img src={m.image} />
                          <p>{m.name}</p>
                        </Card>
                      </Col>
                    ))}
                    {/* <Col sm={4}>
                    <Card className="Gambar">
                      <img src={require("./Image/kucing5.jpg")} />
                      <p>Jarwo</p>
                    </Card>
                  </Col>
                  <Col sm={4}>
                    <Card className="Gambar">
                      <img src={require("./Image/kucing6.jpg")} />
                      <p>Suep</p>
                    </Card>
                  </Col> */}
                  </Row>
                </div>
              </div>
            </Col>
            {/* end kiri */}
            {/* kanan */}
            <Col md={8}>
              <div className="Dashboard-Background">
                <div className="kanan-dashboard">
                  <div
                    className="rootCard"
                    style={{ left: "20%", marginTop: "-105px" }}
                  >
                    <div className="wrapperCardSwipe">
                      <Deck />
                    </div>
                  </div>
                  {/* <Col md={4}>
                    <Card className="kanan-Gambar">
                      <img
                        style={{
                          width: "400px",
                          height: "450px",
                          borderRadius: "1%"
                        }}
                        src={require("./Image/singa.jpg")}
                      />
                      <img
                        className="icon"
                        src={require("./Image/gambar2.png")}
                      />
                      <p>Mansur</p>
                      <span style={{ paddingTop: "10px" }}>
                        {" "}
                        Breeder : Jainudin
                      </span>
                      <img
                        style={{
                          position: "absolute",
                          bottom: "0",
                          paddingBottom: "20px"
                        }}
                        src={require("./Image/map.png")}
                      />
                      <span style={{ padding: "20px", right: "185px" }}>
                        10 Kilometer lagi
                      </span>
                      <img
                        className="foward"
                        src={require("./Image/arrow.png")}
                      />
                      
                    </Card>
                  </Col> */}
                </div>
                <div style={{ marginTop: "550px" }}>
                  <Row>
                    <Col sm={3}>
                      <div className="icon-reload">
                        <img src={require("./Image/reload.png")} />
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="icon-silang">
                        <img src={require("./Image/silang.png")} />
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="icon-love">
                        <img src={require("./Image/love.png")} />
                      </div>
                    </Col>
                    <Col sm={3}>
                      <div className="icon-petir">
                        <img src={require("./Image/petir.png")} />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div style={{ marginTop: "50px" }}>
                  <div className="hide">
                    <p>HIDE</p>
                  </div>
                  <div className="no">
                    <img src={require("./Image/arrow_bawah.png")} />
                    <p>NO</p>
                  </div>
                  <div className="yes">
                    <img src={require("./Image/arrow_bawah.png")} />
                    <p>YES</p>
                  </div>
                  <div className="openprofile">
                    <img src={require("./Image/arrow_bawah.png")} />
                    <p>OPEN PROFILE</p>
                  </div>
                  <div className="closeprofile">
                    <img src={require("./Image/arrow_bawah.png")} />
                    <p>CLOSE PROFILE</p>
                  </div>
                  <div className="nextphoto">
                    <input
                      className="text-input"
                      type="text"
                      placeholder="isi pet nya coy"
                    />
                    <p>NEXT PROFILE</p>
                  </div>
                </div>
              </div>
            </Col>
            {/* end kanan */}
          </Row>
        </div>
      </div>
    );
  }
}

export default Dashboard;
