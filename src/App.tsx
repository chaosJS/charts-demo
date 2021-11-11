import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Race from './Race';
import Chart from './Chart';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            {/* <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/race">Race</Link>
              </li>
              <li>
                <Link to="/chart">chart</Link>
              </li>
            </ul> */}
          </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/chart">
              <Chart />
            </Route>
            <Route path="/race">
              <Race />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
