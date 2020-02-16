import React, { Component, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./Payment.css";
import { Link } from "react-router-dom";

function Payment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
            <button className="btn-payment" onClick={handleClose}>
              <p>Save Changes</p>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default Payment;
