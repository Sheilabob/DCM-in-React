import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

function Calendar() {
    return (
        <>
            <Card className="m-1">
                <CardImg src="/assets/images/pianoRecital.jpeg" height="350" alt="overhead piano" />
                <CardTitle>
                    <h2>Upcoming Events!</h2>
                </CardTitle>
                <CardBody>
                    <h4>Holiday Recital:</h4>
                            <h4 class="float-right">Friday, Dec. 17, 6pm</h4>
                </CardBody>
            </Card>
            <Card className="m-1">
                <CardBody>
                    <iframe className="embed-responsive-item calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FDenver&src=Y2xhc3Nyb29tMTE3MjY4MjU4MDMxODgwNzE0NTQyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23c26401" scrolling="no"></iframe>
                </CardBody>
            </Card>
        </>
    );
}

export default Calendar;