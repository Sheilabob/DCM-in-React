import React, { useState } from 'react';
import { Card, CardImg, CardTitle, Row, Col } from 'reactstrap';
import Keyboard from './keyboardComponent';
import { NOTECARDS } from '../shared/notecards.js';


export default function GamePage() {
    
    const [noteCards, setNoteCards] = useState([ {
        id: 0,
        name: "C",
        image: "/assets/images/cCard.jpg",
    },
    {
        id: 1,
        name: "D",
        image: "/assets/images/dCard.jpg",
    },{
        id: 2,
        name: "E",
        image: "/assets/images/eCard.jpg",
    },{
        id: 3,
        name: "F",
        image: "/assets/images/fCard.jpg",
    },{
        id: 4,
        name: "G",
        image: "/assets/images/gCard.jpg",
    },{
        id: 5,
        name: "A",
        image: "/assets/images/aCard.jpg",
    },{
        id: 6,
        name: "B",
        image: "/assets/images/bCard.jpg",
    }
])

    const cardC = noteCards.filter(thecard => thecard.name === "C")[0];

    return (
        <div>
            <Row>
                <Col>
        <Keyboard />
        </Col>
        
        

        <Col>
            {noteCards.map((card) => (
                <Card key={card.id}>
                    <CardImg width="75" src={card.image} className="noteNameCard"/>
                    <CardTitle>{card.name}</CardTitle>
                </Card>
            ))}
            </Col>
        </Row>

        
        </div>
    )
}