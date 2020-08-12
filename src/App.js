import React from 'react';
import "./App.css"
import {BrowserRouter as Router,Route, Switch} from "react-router-dom"
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/Home" component={Home} />
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
