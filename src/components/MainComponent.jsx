import { Component} from 'react';
import Directory from './DirectoryComponent';
import { ROOMS } from '../shared/rentalRooms.js';
import Keyboard from './keyboardComponent';
import KeyboardMenu from './KeyboardMenuComponent';
import Trying from './testingSoundComponent';
import RoomInfo from './RoomInfo.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS,
            selectedRoom: null
            };
        };

    onRoomSelect(roomId) {
        this.setState({selectedRoom: roomId});
    }

  render() {
      return (
          <div>
              <Header />
              {/* <Keyboard /> */}
              <div className="container">
                  <div className="row">
                    <KeyboardMenu />
                    <div className="col-1">
                    </div>
                    <div className="col-2">
                    <Trying />
                    </div>
                    <div className="col-6">
                    <Directory  rooms={this.state.rooms} onClick={roomId => this.onRoomSelect(roomId)}/>
                    <RoomInfo room={this.state.rooms.filter(room => room.id === this.state.selectedRoom)[0]}/>
                    </div>
                  </div>
              </div>
              <Footer />
          </div>
      );
  }
}

export default Main;