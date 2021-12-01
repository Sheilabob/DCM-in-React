import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Card } from 'reactstrap';

class SignUp extends Component {

    constructor(props) {
        super(props);


        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Parent Name: ${this.parentname.value} Student Name: ${this.studentname.value} Student Age: ${this.studentage.value} Taken lessons: ${this.takenlessons.checked} Earliest time: ${this.earliesttime.value} Latest time: ${this.latesttime.value}`);
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="col-12">
                    <Card>
                        <Button className="btn-info btn-lg" outline onClick={this.toggleModal}>
                        Lesson Sign Up
                        </Button>
                    </Card>
                </div>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Lesson Request</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <div className="container">
                                <div className="row">
                            <FormGroup className="col-6">
                                <Label htlmFor="parentname">Parent Name</Label>
                                <Input type="text" id="parentname" name="parentname" innerRef={input => this.parentname = input} />
                            </FormGroup>
                            <FormGroup className="col-6">
                                <Label htlmFor="studentname">Student Name</Label>
                                <Input type="text" id="studentname" name="studentname" innerRef={input => this.studentname = input} />
                            </FormGroup>
                            </div>
                            <div className="row">
                                <FormGroup className="col-6">
                                <Label htlmFor="studentage">Age of Student</Label>
                                <Input type="select" id="studentage" name="studentage" innerRef={input => this.studentage = input}>
                                    <option>Select...</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10+</option>
                                    </Input>
                            </FormGroup>
                            <FormGroup className="col-6">
                            <Label check>
                                    <Input type="checkbox" name="takenlessons" innerRef={input => this.takenlessons = input} />
                                    Check here if student has previously had lessons:
                                </Label>
                            </FormGroup>
                            </div>
                            <div className="row">
                                <FormGroup className="col-6">
                                <Label htlmFor="earliesttime">Earliest Lesson Time Availability</Label>
                                <Input type="select" id="earliesttime" name="earliesttime" innerRef={input => this.earliesttime = input}>
                                    <option>Select...</option>
                                    <option>4:00pm</option>
                                    <option>4:30pm</option>
                                    <option>5:00pm</option>
                                    <option>5:30pm</option>
                                    </Input>
                            </FormGroup>
                            <FormGroup className="col-6">
                                <Label htlmFor="earliesttime">Earliest Lesson Time Availability</Label>
                                <Input type="select" id="earliesttime" name="earliesttime" innerRef={input => this.earliesttime = input}>
                                    <option>Select...</option>
                                    <option>4:30pm</option>
                                    <option>5:00pm</option>
                                    <option>5:30pm</option>
                                    <option>6:00pm</option>
                                    </Input>
                            </FormGroup>
                            </div>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default SignUp;