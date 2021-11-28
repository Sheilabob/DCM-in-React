import { render } from '@testing-library/react';
import React from 'react';
import { Card, CardImg, CardTitle, CardBody, Button } from 'reactstrap';
import Calendar from './CalendarComponent.jsx';
import { Link } from 'react-router-dom';




function CalendarConnect() {

    return (
        <Card>
            <Link to='/calendar'>
                <CardImg src="/assets/images/pianoConcert.jpeg" height="350" alt="kids on concert stage" />
                <CardBody className="col text-left">
                    <CardTitle>
                        <h1>Future Events!</h1>
                    </CardTitle>
                </CardBody>
            </Link>
        </Card>
    );
}

export default CalendarConnect;