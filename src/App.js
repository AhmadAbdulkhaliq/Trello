import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './MainPage';



// DON NOT EDIT THIS FILE!!
// Only Edit files in dashboard folder, and MainPage.jsx
class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={MainPage}/> 
          </div>
      </Router>
    );
  }
}

export default App;
