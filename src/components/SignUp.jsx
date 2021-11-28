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
        alert(`Parent Name: ${this.parentname.value} Student Name: ${this.studentname.value} Student Age: ${this.studentage.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="col">
                    <Card>
                        <Button className="btn-info btn-lg" outline onClick={this.toggleModal}>
                        Sign Up
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
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10+</option>
                                    </Input>
                            </FormGroup>
                            </div>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
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