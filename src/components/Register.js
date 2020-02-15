import React, {Component,useState} from 'react';
import {Modal,Form,Button} from 'react-bootstrap';
import Landing from './Landing';
import './Register.css';

function Register() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShoww = () => setShow(true);
  
    return (
      <>
        <Button className="register" variant="outline-danger" onClick={handleShoww}>
          Register
        </Button>
        
        <div>
            <Modal show={show} onHide={handleClose}>
                <div>
                    <Modal.Title className="formlogin">Resgistrasi</Modal.Title>
                    <p className="ModalX" onClick={handleClose}>&#10060;</p>
                </div>
                <div>
                <Form className="form-modal">
                    <Form.Group controlId="formBasicBreeder">
                        <Form.Label>Breeder</Form.Label>
                        <Form.Control type="text" placeholder="Breeder" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Phone Breeder</Form.Label>
                        <Form.Control type="number" placeholder="Phone Breeder" />
                    </Form.Group>
                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Address Breder" />
                    </Form.Group>
                    <Form.Group controlId="formBasicNamePet">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Name Pet" />
                    </Form.Group>
                    <Form.Group controlId="formBasicGender">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" placeholder="Gender Pet" />
                    </Form.Group>
                    <Form.Group controlId="formGridState">
                        <Form.Label>Spesies Pet</Form.Label>
                        <Form.Control as="select" placeholder="Spesies Pet" value="Choose...">
                            <option>Kucing</option>
                            <option>Kambing</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Age Pet</Form.Label>
                        <Form.Control type="text" placeholder="Age Pet" />
                    </Form.Group>
                </Form>
                </div>
                <div className="Footer-btn">
                    {/* <Button className="Footer" onClick={handleClose}>
                    Login
                    </Button> */}
                    <button className="footers">Register</button>
                </div>
            </Modal>
        </div>
      </>
    );
  }
  

export default Register;