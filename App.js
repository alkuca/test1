import React, { Component } from 'react';
import './App.css';
import Register from "./Register";
import Login from "./Login"
import Navbar from "./Navbar";
import Content from "./Content";
import {Link} from "react-router-dom"
import {Route} from "react-router-dom"
import KolegijContent from "./Koleg  ijContent.js"



class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path="/" component={Navbar}/>
          <Route exact path="/" component={KolegijContent}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
      </div>
    );
  }
}

export default App;
