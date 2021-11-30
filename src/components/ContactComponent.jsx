import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

function Contact(props) {
    return (
        <div className="col-md-6">
        <Card className='m-1'>
            <CardImg src="/assets/images/maskedProfile.jpg" height="350" alt="Ms. Sheila in mask" />
            <CardBody className="col text-left">
                <CardTitle>
                    <h2>Contact</h2>
                </CardTitle>
            </CardBody>
        </Card>
        </div>
    );
}

export default Contact;