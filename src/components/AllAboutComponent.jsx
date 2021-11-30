import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


function AllAbout(props) {
    return (
        <div className="col-md-6">
        <Card className='m-1'>
        <Link to='/about'>
            <CardImg src="/assets/images/verticalPiano.jpeg" alt="vertical hands playing piano" className="img-fluid rounded topStockPhotos" />
            <CardBody className="col text-left">
                <CardTitle>
                    <h2>More Info</h2>
                </CardTitle>
            </CardBody>
            </Link>
        </Card>
        </div>
    );
}

export default AllAbout;