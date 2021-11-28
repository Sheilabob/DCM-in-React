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


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS,
            };
        };

  render() {

    const HomePage = () => {
        return (
            <Home />
        );
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

      return (
          <div>
            <Header />
            <div className="container">
                <div className="row">
                    <KeyboardMenu />
                    <div className="col">
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/directory' render={() => <Directory  rooms={this.state.rooms} />} />
                            <Route path='/calendar' component={CalendarPage} />
                            <Route path='/resources' component={Resourcepage} />
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