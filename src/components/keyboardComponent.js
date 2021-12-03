import React, { Component } from 'react';


function playCNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/C.mp3";
    cNote.play();
}

function playDNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/D.mp3";
    cNote.play();
}

function playENote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/E.mp3";
    cNote.play();
}

function playFNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/F.mp3";
    cNote.play();
}

function playGNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/G.mp3";
    cNote.play();
}

function playANote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/A.mp3";
    cNote.play();
}

function playBNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/B.mp3";
    cNote.play();
}

function playCSharpNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/CSharp.mp3";
    cNote.play();
}

function playDSharpNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/DSharp.mp3";
    cNote.play();
}

function playFSharpNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/FSharp.mp3";
    cNote.play();
}

function playGSharpNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/GSharp.mp3";
    cNote.play();
}

function playASharpNote() {
    var cNote = new Audio();
    cNote.src = "/assets/sound/ASharp.mp3";
    cNote.play();
}

// Can an object include a function?  If so, can I map through the keys to create the event listeners?

class Keyboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

// if i made a transparent box under the Keyboard, would that hold the space for it in the app?

    render() {
        return (
            <div className="container">
                <div className="row">
                        
                            <button className="blackGameNote cSharp" id="cSharpNote" onClick={playCSharpNote}></button>
                            <button className="blackGameNote dSharp" id="dSharpNote" onClick={playDSharpNote}></button>
                            <button className="blackGameNote fSharp" id="fSharpNote" onClick={playFSharpNote}></button>
                            <button className="blackGameNote gSharp" id="gSharpNote" onClick={playGSharpNote}></button>
                            <button className="blackGameNote aSharp" id="aSharpNote" onClick={playASharpNote}></button>

                            <button className="whiteGameNote cNote" id = "cNote" onClick={playCNote}></button>
                            <button className="whiteGameNote dNote" id = "dNote" onClick={playDNote}></button>
                            <button className="whiteGameNote eNote" id = "eNote" onClick={playENote}></button>
                            <button className="whiteGameNote fNote" id = "fNote" onClick={playFNote}></button>
                            <button className="whiteGameNote gNote" id = "gNote" onClick={playGNote}></button>
                            <button className="whiteGameNote aNote" id = "aNote" onClick={playANote}></button>
                            <button className="whiteGameNote bNote" id = "bNote" onClick={playBNote}></button>
                     
                </div>
            </div>
        );
    }
}

export default Keyboard;