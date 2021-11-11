import { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';

class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="info" fixed="top">
              <div className="container">
                  <NavbarBrand href="/">Desert Child Music</NavbarBrand>
              </div>
              </Navbar>
              <Directory />
          </div>
      );
  }
}

export default App;
