import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


function Resources(props) {
    return (
        <div className="col-md-6">
        <Card className='m-1'>
            <Link to='/resources'>
            <CardImg src="/assets/images/overhead.jpeg" height="350" alt="overhead piano" />
            <CardBody className="col text-left">
                <CardTitle>
                    <h2>Resources</h2>
                </CardTitle>
            </CardBody>
            </Link>
        </Card>
        </div>
    );
}

export default Resources;