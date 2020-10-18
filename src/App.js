//imports needed
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
//import { Router } from 'react-router-dom';

//had to hard code it -- not sure where I went wrong
//Coomment it out for now
//import {header} from '../src/components';
//import {footer} from '../src/components';
//import {comtent} from '../src/components'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>

          </Navbar>
          <br />
          <Switch>
            {/*Routed page back to app.js since my components arent working*/}
            <Route path='/' component={App} exact></Route>
            <Route path='/create' component={App} exact></Route>
            <Route path='/read' component={App} exact></Route>


          </Switch>




          {/*Calling header -- it giving me error at this point 
      <header></header> */}

          <h1>Hello World</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>

          {/*Calling footer -- it giving me error at this point 
      <footer></footer>*/}


        </div>
      </Router>
    );

  }
}

export default App;
