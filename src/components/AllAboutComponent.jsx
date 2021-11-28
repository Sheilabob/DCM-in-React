import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

function AllAbout(props) {
    return (
        <Card>
            <CardImg src="/assets/images/verticalPiano.jpeg" height="350" alt="vertical hands playing piano" />
            <CardBody className="col text-left">
                <CardTitle>
                    <h1>Learn More</h1>
                </CardTitle>
            </CardBody>
        </Card>
    );
}

export default AllAbout;