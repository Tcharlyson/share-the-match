import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Navbar, NavItem, Nav, MenuItem, NavDropdown} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Home from './Home.js'
import Profile from './Profile.js'
import '../stylesheets/App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" label="Share the match">Home</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Devenir hote</NavItem>
                <NavItem eventKey={2} href="#">Link</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Link Right</NavItem>
                <LinkContainer to="/users/edit">
                  <NavItem eventKey={2} href="#">Profile</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/users/edit" component={Profile} />
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
