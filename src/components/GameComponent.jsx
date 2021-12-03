import React, { Component } from 'react';
import { Card, CardImg, CardTitle, Row, Col, Button } from 'reactstrap';
import Keyboard from './keyboardComponent';
import { NOTECARDS } from '../shared/notecards.js';
import { render } from '@testing-library/react';


class GameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteCards: NOTECARDS,
            currentCard: null
        }
    }



    onGameStart(notecard) {
        this.setState({currentCard: notecard});
    }

    renderCurrentCard(notecard) {
        if (notecard) {
            return(
                <Card>
                    <CardImg src={notecard.image} />
                </Card>
            )
        }
    }

    // let letterNameArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

    // // let randomNumber = 0;
    // // {noteCards.map((card) => ({card.image}))};
    // function getRandomNumber() {
   
    // let currentCard = noteCards.filter(thecard => thecard.name === letterNameArray[randomNumber])[0];
    //     return (
    //         <Card>
    //         <CardImg src={currentCard.image} />
    //         </Card>
    //     )
    
    // };

render() {

    let randomNumber = Math.floor(Math.random() * (this.state.noteCards.length-1));

    return (
        <div>
            <Row>
                <Col>
                    <Keyboard />
                </Col>
                <Col>
                    <Card>
                        <Button onClick={() => this.onGameStart(this.state.noteCards[randomNumber])}>Start Game</Button>
                    </Card>
                    
                        {this.renderCurrentCard(this.state.currentCard)}
                    
                    {/* <Card>
                        <CardImg src={currentCard.image} />
                        </Card> */}
                    {/* {this.state.noteCards.map((notecard) => (
                        <Card key={notecard.id}>
                            <CardImg width="75" src={notecard.image} className="noteNameCard"/>
                            <CardTitle>{notecard.name}</CardTitle>
                        </Card>
                    ))} */}
                </Col>
            </Row>

        
        </div>
    )
}}

export default GameComponent;