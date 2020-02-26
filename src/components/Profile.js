import React, { Component } from "react";
import { Row, Col, Form, Card, ButtonToolbar, Button } from "react-bootstrap";
import "./Profile.css";
import { Link } from "react-router-dom";
import Payment from "./Payment";
import EditPet from "./EditProfile";
import Landing from "./Landing";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <div className="kiri-Profile">
              <Link to="/Dashboard">
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
                <Link to="/EditProfile">
                  <img src={require("./Image/kucing3.jpg")} />
                </Link>
              </div>
              <span>Jojon</span>
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.value}Km.
              </p>
              <input
                className="range"
                type="range"
                maxValue={100}
                minValue={0}
                value={this.state.value}
                onChange={this.handleChange}
              />
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
              <Link to="/Landing">
                <button className="login-btn">Logout</button>
              </Link>
            </div>
          </Col>
          <Col md={8}>
            <div className="Profile-background">
              <div>
                <ButtonToolbar>
                  <Payment />
                </ButtonToolbar>
              </div>
              <div className="Profile-kanan">
                <img src={require("./Image/meong.jpg")} />
                <Card.Body className="card-body">
                  <Card.Title
                    style={{
                      fontFamily: "Avenir",
                      fontFamily: "fantasy",
                      color: "black",
                      fontSize: "30px"
                    }}
                  >
                    Jambrot
                    <span
                      style={{
                        fontSize: "25px",
                        color: "#7e7e7e",
                        marginLeft: "142px",
                        opacity: "0.6"
                      }}
                    >
                      Lion
                    </span>
                  </Card.Title>

                  <div className="orang">
                    <p>Jainudin</p>
                    <img src={require("./Image/orangprofile.png")} />
                  </div>
                  <div className="map">
                    <img src={require("./Image/mapprofile.png")} />
                    <p>12 Kilometer dari sono</p>
                  </div>
                  <div className="gender">
                    <img src={require("./Image/gender.png")} />
                    <p>Male - Audit</p>
                  </div>
                  <div className="phone">
                    <img src={require("./Image/phone.png")} />
                    <p>Phone Breeder : 085678908765</p>
                  </div>
                  <Link to="/EditProfile">
                    <button className="edit-btn">Edit</button>
                  </Link>
                </Card.Body>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
