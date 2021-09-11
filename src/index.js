import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Todo from './pages/Todo';
import About from './pages/About'
import Home from './pages/Home';
import Header from './components/Header';

import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/todo"  component={Todo} exact />
        <Route path="/about"  component={About} exact/>
        <Route path="/"  component={Home} exact />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

