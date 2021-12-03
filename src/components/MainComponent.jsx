import { Component} from 'react';
import Directory from './DirectoryComponent';
import { ROOMS } from '../shared/rentalRooms.js';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ResourcePage from './ResourcesPageComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import KeyboardMenu from './KeyboardMenuComponent';
import Calendar from './CalendarComponent';
import GamePage from './GameComponent';
import AboutPage from './AboutComponent';
import { NOTECARDS } from '../shared/notecards.js';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS,
            notecards: NOTECARDS
            };
        };

  render() {

    const HomePage = () => {
        return (
            <Home />
        );
        }

    const Aboutpage = () => {
        return (
            <AboutPage />
        )
    }

    const CalendarPage = () => {
        return (
            <Calendar />
        );
    }
    const Resourcepage = () => {
        return (
            <ResourcePage />
        );
        }

    const Gamepage = () => {
        return (
            <GamePage notecard={this.state.notecards.filter(notecard => notecard.id === 1)[0]} />
        )
    }

    // campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}

      return (
          <div>
            <Header />
            <div className="container">
                <div className="row">
                    <KeyboardMenu />
                    <div className="col-1 zDown">
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/directory' render={() => <Directory  rooms={this.state.rooms} />} />
                            <Route path='/about' component={Aboutpage} />
                            <Route path='/calendar' component={CalendarPage} />
                            <Route path='/resources' component={Resourcepage} />
                            <Route path='/game' component={Gamepage} />
                            <Redirect to='/home' />
                        </Switch>
                    </div>
                </div>
            </div>

              {/* <Keyboard /> */}
              {/* <div className="container">
                  <div className="row">
                    <KeyboardMenu />
                    <div className="col-1">
                    </div>
                    <div className="col-2">
                    <Trying />
                    </div>
                    <div className="col-6">
                    <Directory  rooms={this.state.rooms} />
                    </div>
                  </div>
              </div> */}
              <Footer />
          </div>
      );
  }
}

export default Main;