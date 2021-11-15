import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

import Catalog from './catalog.json'

import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>

            <Route exact path="/" component={Home}/>
            <Route />
            <Route path="*" component={NotFound}/>

        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;