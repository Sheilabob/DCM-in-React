import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Card } from 'reactstrap';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            parentname: '',
            studentname: '',
            studentage: 0,
            takenlessons: false,
            tuesday: false,
            thursday: false,
            earliesttime: '4:00pm',
            latesttime: '4:30pm',
            isModalOpen: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
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
                        <Form onSubmit={this.handleSubmit}>
                            <div className="container">
                                <div className="row">
                            <FormGroup className="col-6">
                                <Label htlmFor="parentname">Parent Name</Label>
                                <Input type="text" id="parentname" name="parentname" placeholder="Parent Name" value={this.state.parentname} onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup className="col-6">
                                <Label htlmFor="studentname">Student Name</Label>
                                <Input type="text" id="studentname" name="studentname" placeholder="Student Name" value={this.state.studentname} onChange={this.handleInputChange} />
                            </FormGroup>
                            </div>
                            <div className="row">
                                <FormGroup className="col-6">
                                <Label htlmFor="studentage">Age of Student</Label>
                                <Input type="select" name="studentage" value={this.state.studentage} onChange={this.handleInputChange}>
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
                                    <Input type="checkbox" name="takenlessons" checked={this.state.takenlessons} onChange={this.handleInputChange} />
                                    Check here if student has previously had lessons:
                                </Label>
                            </FormGroup>
                            </div>
                            <div className="row">
                                <FormGroup className="col">
                                    Select which days you are available for lessons: <br />
                                    <Label check className="col-6">
                                        <Input type="checkbox" name="tuesday" ichecked={this.state.tuesday} onChange={this.handleInputChange} />
                                        Tuesday
                                    </Label>
                                    <Label check className="col-6">
                                        <Input type="checkbox" name="thursday" checked={this.state.thursday} onChange={this.handleInputChange}  />
                                        Thursday
                                    </Label>
                                </FormGroup>
                            </div>
                            <div className="row">
                                <FormGroup className="col-6">
                                <Label htlmFor="earliesttime">Earliest Lesson Time Availability</Label>
                                <Input type="select" name="earliesttime" value={this.state.earliesttime} onChange={this.handleInputChange}>
                                    <option>Select...</option>
                                    <option>4:00pm</option>
                                    <option>4:30pm</option>
                                    <option>5:00pm</option>
                                    <option>5:30pm</option>
                                    </Input>
                            </FormGroup>
                            <FormGroup className="col-6">
                                <Label htlmFor="latesttime">Latest Lesson Time Availability</Label>
                                <Input type="select" name="latesttime" value={this.state.latesttime} onChange={this.handleInputChange}>
                                    <option>Select...</option>
                                    <option>4:30pm</option>
                                    <option>5:00pm</option>
                                    <option>5:30pm</option>
                                    <option>6:00pm</option>
                                    </Input>
                            </FormGroup>
                            </div>
                            <Button type="submit" color="primary">Submit</Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default SignUp;