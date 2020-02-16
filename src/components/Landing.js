import React, { Component } from "react";
import { ButtonToolbar, Button, Modal } from "react-bootstrap";
import "./Landing.css";
import Modallogin from "./Modallogin";
import Register from "./Register";
// import Footer from './Footer';

class Landing extends Component {
  render() {
    return (
      <div className="background">
        <div>
          <p className="breednder">Biro Jodoh</p>
          <ButtonToolbar>
            {/* <Button variant="outline-light" className="login" onClick={this.Modallogin.handleShow}>Login</Button> */}
            <Modallogin />
          </ButtonToolbar>
        </div>

        <div>
          <ButtonToolbar>
            {/* <Button variant="outline-warning" className="register" onClick="">Register</Button> */}
            <Register />
          </ButtonToolbar>
          <p className="text">Swipe right.</p>
          <p className="text2">Make your pet happy</p>
        </div>

        <div className="Footer">
          <p className="textfooter">FIND YOUR PET'S MATCH</p>
        </div>
      </div>
    );
  }
}

export default Landing;
