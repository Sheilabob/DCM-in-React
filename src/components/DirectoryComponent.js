import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Directory extends Component {

    render() {
        const directory = this.props.rooms.map(room => {
            return (
                <div key={room.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(room.id)}>
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