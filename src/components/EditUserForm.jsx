import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class EditUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            phone: props.userInfo.phone,
            address: props.userInfo.address,
            type: props.userInfo.type,
            id: props.userInfo.id
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editUser(this.state.id, this.state)
        this.setState({
            name: "",
            phone: "",
            address: "",
            type: ""
        });
        this.props.closeModal();
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" value={this.state.name} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Enter number" name="phone" value={this.state.phone} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="address" placeholder="Enter address" name="address" value={this.state.address} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Family</option>
                        <option>Friend</option>
                        <option>Co-worker</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
  </Button>
            </Form>
        );
    }
}

export default EditUserForm;
