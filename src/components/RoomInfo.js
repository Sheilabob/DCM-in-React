import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



class RoomInfo extends Component {
    renderRoom(room) {
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={room.image} alt={room.name} />
                    <CardBody>
                        <CardTitle>{room.name}</CardTitle>
                        <CardText>{room.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    renderComments(comments) {
        if (comments) {
            return(
                <div className="col-5 m-1">
                    <h4>Reviews</h4>
                    {comments.map(comment => <div>
                        <p>{comment.text}<br/>
                        {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>)}
                </div>
            )
        }
        return (
            <div />
        )
    }
    render() {
        if (this.props.room) {
            return (
                <div className="container">
                    <div className="row">
                    {this.renderRoom(this.props.room)}
                    {this.renderComments(this.props.room.comments)}
                    </div>
                </div>
            )
        }
        return(
            <div />
        )
    }
}

export default RoomInfo;