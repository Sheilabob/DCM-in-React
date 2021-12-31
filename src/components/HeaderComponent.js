import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Link to='/home'>
                            <img src="/assets/images/stockPiano.jpeg" height="120" alt="piano logo"/>
                            </Link>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-6">
                            <Stagger in delay={500}>
                                <Fade in>
                            <h1>Desert Child Music</h1>
                                </Fade>
                                <Fade in>
                            <h2>A Community Music School in Moab, UT</h2>
                                </Fade>
                            </Stagger>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default Header;