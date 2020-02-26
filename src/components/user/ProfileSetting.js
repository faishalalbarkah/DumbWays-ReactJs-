import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProfileSetting extends Component {
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
      <>
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
            Maximum Distance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
      </>
    );
  }
}

export default ProfileSetting;
