import React, { Component } from 'react';

class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col col-sm-6 m-1">
                        <div className="card" id="keyboardCard">
                            <button className="blackNote dSharp" id="dSharpNote"></button>
                            <button className="blackNote cSharp" id="cSharpNote"></button>
                            <button className="blackNote fSharp" id="fSharpNote"></button>
                            <button className="blackNote gSharp" id="gSharpNote"></button>
                            <button className="blackNote aSharp" id="aSharpNote"></button>

                            <button className="whiteNote cNote" id = "cNote"></button>
                            <button className="whiteNote dNote" id = "dNote"></button>
                            <button className="whiteNote eNote" id = "eNote"></button>
                            <button className="whiteNote fNote" id = "fNote"></button>
                            <button className="whiteNote gNote" id = "gNote"></button>
                            <button className="whiteNote aNote" id = "aNote"></button>
                            <button className="whiteNote bNote" id = "bNote"></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Keyboard;