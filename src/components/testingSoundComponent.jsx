import { render } from '@testing-library/react';
import React from 'react';

function Trying() {

  const playtheSound = new Audio("assets/sound/B.mp3");
  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  // };
 
  return (
    < div >
      <button onClick={ () => {playtheSound.play()}}>Play</button>
    </div >
  );

  // render() {
  //   return (
  //     <button
  //       onClick={ () => this.handleIncrement(product) }>Increment</button>
  //   )
  // }
}



export default Trying;