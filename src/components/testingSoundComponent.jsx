import React from 'react';

function Trying() {
  let audio = new Audio("./sounds/B.mp3")

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start}>Play</button>
    </div >
  );
}

export default Trying;