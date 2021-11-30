import { render } from '@testing-library/react';
import React from 'react';
import { Card, CardImg, CardTitle, CardBody, Button } from 'reactstrap';
import Calendar from './CalendarComponent.jsx';
import { Link } from 'react-router-dom';




function CalendarConnect() {

    return (
        <div className="col-md-6">
        <Card className="m-1">
            <Link to='/calendar'>
                <CardImg src="/assets/images/pianoConcert.jpeg" height="350" alt="kids on concert stage" className="img-fluid rounded topStockPhotos" />
                <CardBody className="col text-left">
                    <CardTitle>
                        <h2>Events</h2>
                    </CardTitle>
                </CardBody>
            </Link>
        </Card>
        </div>
    );
}

export default CalendarConnect;