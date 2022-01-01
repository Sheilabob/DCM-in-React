import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';

class  Contact extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            contactType: 'By Phone',
            message: '',
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div className="col-md-6">
            <Card className='m-1' onClick={this.toggleModal}>
                <CardImg src="/assets/images/maskedProfile.jpg" height="350" alt="Ms. Sheila in mask" />
                <CardBody className="col text-left">
                    <CardTitle>
                        <h2>Contact</h2>
                    </CardTitle>
                </CardBody>
            </Card>

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><h2>Contact Form</h2></ModalHeader>
                    <ModalBody>
                    <div className="row">
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange} />
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="select" md={10}>Preferred Method of Response</Label>
                                <Col md={10}>
                                    <Input type="select"  id="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>By Phone</option>
                                        <option>By Text</option>
                                        <option>By Email</option>
                                    </Input>
                                    </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={3}>Questions or Comments</Label>
                                <Col md={9}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value={this.state.message}
                                        onChange={this.handleInputChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                    </ModalBody>
            </Modal>

            </div>
        );
    }   
}

export default Contact;