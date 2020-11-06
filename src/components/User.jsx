import React, { useState } from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';


const User = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteUser(props.userInfo.id);
    };
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditUserForm userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} />
                </Modal.Body>

            </Modal>

            <Col md="4" style={{ marginBottom: "1rem" }}>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">My Contacts</Card.Subtitle>
                        <Card.Title>{props.userInfo.name}</Card.Title>
                        <Card.Text>
                            <p>Phone: {props.userInfo.phone}</p>
                            <p>Address: {props.userInfo.address}</p>
                            <p>Type: {props.userInfo.type}</p>
                        </Card.Text>
                        <Card.Link href="#">
                            <Button variant="primary" size="sm" onClick={handleShow}>Edit</Button></Card.Link>

                        <Card.Link href="#">
                            <Button variant="danger" size="sm" onClick={handleDelete}>Delete</Button></Card.Link>
                    </Card.Body>
                </Card>
            </Col >
        </>
    );
}

export default User;
