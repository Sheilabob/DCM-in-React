import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

function Contact(props) {
    return (
        <Card>
            <CardImg src="/assets/images/maskedProfile.jpg" height="350" alt="Ms. Sheila in mask" />
            <CardBody className="col text-left">
                <CardTitle>
                    <h1>Contact</h1>
                </CardTitle>
            </CardBody>
        </Card>
    );
}

export default Contact;