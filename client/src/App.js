import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Pages/Homepage';
import Posts from './components/Pages/Posts';
import Login from './components/Pages/Login'
import About from './components/Pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/Homepage" exact component={Homepage} />
          <Route exact path="/Posts" component={Posts} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
