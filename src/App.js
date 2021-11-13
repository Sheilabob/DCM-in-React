import { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';
import { ROOMS } from './shared/rentalRooms.js';
import Keyboard from './components/keyboardComponent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS
        };
    }
  render() {
      return (
          <div className="App">
              <Keyboard />
              <Navbar dark color="info">
              <div className="container">
                  <NavbarBrand href="/">Desert Child Music</NavbarBrand>
              </div>
              </Navbar>
              <Directory  rooms={this.state.rooms} />
          </div>
      );
  }
}

export default App;
