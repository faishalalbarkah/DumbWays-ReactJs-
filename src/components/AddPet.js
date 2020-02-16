import React, { Component } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import "./EditProfile.css";
import { Link } from "react-router-dom";

class AddPet extends Component {
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
                Add Pet
              </span>
            </div>
            <div className="setting">
              <p>Account Setting</p>
            </div>
            <div className="account">
              <p>Email &nbsp; faishalalbarkah@gmail.com</p>
              <hr
                style={{
                  marginLeft: "-20px",
                  marginTop: "-10px",
                  marginBottom: "6px"
                }}
              />
              <p>Phone &nbsp; 085921311291</p>
            </div>
            <div className="discovery">
              <p>Discovery Setting</p>
            </div>
            <div className="paling-bawah">
              <p>
                Maximum Distance
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12Km.
              </p>
              <input className="range" type="range" />
            </div>
            <div>
              <Form.Group className="age-form">
                <Form.Label>Age</Form.Label>
                <Form.Control as="select" value="Choose...">
                  <option>Child</option>
                  <option>Tenager</option>
                  <option>Adult</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="spesies-form">
                <Form.Label>Spesies</Form.Label>
                <Form.Control as="select" value="Choose...">
                  <option>Cat</option>
                  <option>Dog</option>
                  <option>Rabit</option>
                  <option>Bird</option>
                  <option>Sugar Glider</option>
                </Form.Control>
              </Form.Group>
              <button className="login-btn">Login</button>
            </div>
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

export default AddPet;
