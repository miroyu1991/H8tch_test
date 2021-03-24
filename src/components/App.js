import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from "react-redux";

import Home from './Home/Home';
import NoMatch from './NotFound/NoMatch';
import './App.scss'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;