import React, { Component, useState } from "react";
import { Modal, Form, ButtonToolbar } from "react-bootstrap";
import Alertkonfrim from "./Alertkonfrim";
import { Redirect } from "react-router-dom";
import "./Payment.css";
import { Link } from "react-router-dom";

function Payment() {
  const [show, setShow] = useState(false);
  const [showAlCon, setShowAlCon] = useState(false);
  const [pay, setPay] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowAlCon(true);
    setTimeout(() => {
      setPay(true);
    }, 3000);
  };
  const handleShow = () => setShow(true);

  const handleCloseAlCon = () => {
    setShowAlCon(false);
  };

  const handleShowAlCon = () => setShowAlCon(true);

  return (
    <>
      {pay ? <Redirect to="/AddPet" /> : ""}

      <button
        className="atas-btn"
        variant="outline-danger"
        onClick={handleShow}
      >
        <p>Add Pet</p>
      </button>

      <Modal show={show} onHide={handleClose}>
        <div className="modal-payment">
          <h1>Premium</h1>

          <div className="modal-body-payment">
            <p>Upgrade Breednder mu dan nikmati</p>
            <p>
              fitur - fitur
              <strong> PRO</strong>
            </p>
            <h4>Breednder : 098131323</h4>
            <div className="justify-content-center d-flex">
              <input
                className="input-payment"
                placeholder=" Masukan No.Rek"
                text="text"
              />
            </div>
            <img className="img-payment" src={require("./Image/img.PNG")} />
          </div>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <div>
            {/* <button className="btn-payment" onClick={handleClose}>
              <p>Save Changes</p>
            </button> */}
            <ButtonToolbar>
              {/* <Button variant="outline-light" className="login" onClick={this.Modallogin.handleShow}>Login</Button> */}
              <button className="btn-payment" onClick={handleClose}>
                <p>Save Changes</p>
              </button>
            </ButtonToolbar>
          </div>
        </div>
      </Modal>
      <Alertkonfrim action={handleCloseAlCon} show={showAlCon} />
    </>
  );
}
export default Payment;
