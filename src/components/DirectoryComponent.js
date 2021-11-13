import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import RoomInfo from './RoomInfo.js';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRoom: null
        };
    }

    onRoomSelect(room) {
        this.setState({selectedRoom: room});
    }

    // renderSelectedRoom(room) {
    //     if (room) {
    //         return (
    //             <Card>
    //                 <CardImg top src={room.image} alt={room.name} />
    //                 <CardBody>
    //                     <CardTitle>{room.name}</CardTitle>
    //                     <CardText>{room.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }

    render() {
        const directory = this.props.rooms.map(room => {
            return (
                <div key={room.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onRoomSelect(room)}>
                        <CardImg width="100%" className="photo" src={room.image} alt={room.name} />
                        <CardImgOverlay>
                            <CardTitle>{room.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <RoomInfo room={this.state.selectedRoom}/>
                {/* <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedRoom(this.state.selectedRoom)}
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Directory;