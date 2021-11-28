import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

function Resources(props) {
    return (
        <Card>
            <CardImg src="/assets/images/overhead.jpeg" height="350" alt="overhead piano" />
            <CardBody className="col text-left">
                <CardTitle>
                    <h1>Resources for Students</h1>
                </CardTitle>
            </CardBody>
        </Card>
    );
}

export default Resources;