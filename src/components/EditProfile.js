import React, { Component } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import "./EditProfile.css";
import { Link } from "react-router-dom";
import ProfileSetting from "./user/ProfileSetting";

class EditProfile extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <div className="kiri-Profile">
              <Link to="/Profile">
                <img
                  style={{
                    marginLeft: "30px",
                    transform: "rotate(180deg)",
                    height: "70px",
                    marginBottom: "-143px"
                  }}
                  src={require("./Image/arrow.png")}
                />
              </Link>
              <div>
                <img src={require("./Image/kucing3.jpg")} />
              </div>
              <span style={{ fontSize: "33px", marginTop: "-64px" }}>
                Edit Profile Pet
              </span>
            </div>
            <ProfileSetting />
          </Col>

          <Col md={8}>
            <div className="Edit-Profile-background">
              <div className="background-dalem">
                <div className="scroll-atas">
                  <Row style={{ margin: "10px", paddingTop: "10px" }}>
                    <Col sm={4} className="mt-2">
                      <Card className="background-lebih-dalem">
                        <img src={require("./Image/buaya.jpg")} />
                      </Card>
                      <div className="X">
                        <p>X</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mt-2">
                      <Card className="background-lebih-dalem">
                        <img src={require("./Image/buaya.jpg")} />
                      </Card>
                      <div className="X">
                        <p>X</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mt-2">
                      <Card className="background-lebih-dalem">
                        <img src={require("./Image/buaya.jpg")} />
                      </Card>
                      <div className="X">
                        <p>X</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mt-2">
                      <Card className="background-lebih-dalem">
                        <img src={require("./Image/buaya.jpg")} />
                      </Card>
                      <div className="X">
                        <p>X</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mt-2">
                      <Card className="background-lebih-dalem">
                        <img src={require("./Image/buaya.jpg")} />
                      </Card>
                      <div className="X">
                        <p>X</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mt-2">
                      <Card className="background-lebih-dalem">
                        <img src={require("./Image/buaya.jpg")} />
                      </Card>
                      <div className="X">
                        <p>X</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mt-2">
                      <Card className="background-lebih-dalem">
                        <img src={require("./Image/buaya.jpg")} />
                      </Card>
                      <div className="X">
                        <p>X</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mt-2">
                      <Card className="background-lebih-dalem">
                        <img src={require("./Image/buaya.jpg")} />
                      </Card>
                      <div className="X">
                        <p>X</p>
                      </div>
                    </Col>
                    <Col sm={4} className="mt-2">
                      <Card className="background-lebih-dalem">
                        <img src={require("./Image/buaya.jpg")} />
                      </Card>
                      <div className="X">
                        <p>X</p>
                      </div>
                    </Col>
                    <div className="scroll-bawah">
                      <p>Nama Pet</p>
                      <input type="text" />
                      <p>Breeder</p>
                      <input type="text" />
                      <p>Gender</p>
                      <input type="text" />
                      <p>Age</p>
                      <input type="text" />
                      <p>About Pet</p>
                      <textarea cols="80"></textarea>
                      <button>Save</button>
                    </div>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditProfile;
