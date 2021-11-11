import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [
                {
                    id: 0,
                    name: 'Treble Concert Hall',
                    location: 'Upstairs, East Wing',
                    size: '30ft x 60ft',
                    hourlyRate: 25,
                    image: 'assets/images/TrebleConcertHall.webp',
                    description: "This is our largest room, with a capacity of 110 people, a stage with a piano, and access to folding chairs and tables.  It is ideal for concerts and recitals."
                },
                {
                    id: 1,
                    name: 'Bass Dance Hall',
                    location: 'Upstairs, West Wing',
                    size: '30ft x 60ft',
                    hourlyRate: 25,
                    image: 'assets/images/bassDanceRoom.webp',
                    description: "This is a spacious, open room, with a capacity of 110 people, mirrors along one wall, and access to folding chairs and tables.  It is ideal for community dances."
                },
                {
                    id: 2,
                    name: 'Major Classroom',
                    location: 'Downstairs, East Wing',
                    size: '15ft x 20ft',
                    hourlyRate: 15,
                    image: 'assets/images/largeRoom.jpeg',
                    description: "Our larger classroom area downstairs, this room accommodates up to 30 people and has access to folding chairs and tables.  Great for small group classes that need some movement space."
                },
                {
                    id: 3,
                    name: 'Minor Classroom',
                    location: 'Downstairs, West Wing',
                    size: '15ft x 15ft',
                    hourlyRate: 15,
                    image: 'assets/images/smallRoom.webp',
                    description: "Our smaller classroom area downstairs, this room accommodates up to 20 people and has access to folding chairs and tables.  Great for small group classes."
                }
            ]
        };
    }

    render() {
        const directory = this.state.rooms.map(room => {
            return (
                <div className="col">
                    <img src={room.image} alt={room.name} />
                    <h2>{room.name}</h2>
                    <p>{room.description}</p>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;