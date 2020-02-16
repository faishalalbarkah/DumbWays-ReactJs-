import React, { Component, useState } from "react";
import { Modal } from "react-bootstrap";
import Payment from "./Payment";

function Alertkonfrim(props) {
  //   const [show, setShow] = useState(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={props.show}
        // onHide={props.action.handleShowAlCon}
        onHide={props.action}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <p style={{ textAlign: "center" }}>
            Terimakasih Silahkan Tunggu Konfirmasi Pembayaran
          </p>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Alertkonfrim;
