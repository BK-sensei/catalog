import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

// import Catalog from './catalog.json'

import Home from './pages/Home';
// import Movies from './pages/Movies';
import NotFound from './pages/NotFound';

import Movie from './components/Movie'

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>

            <Route exact path="/" component={Home}/>
            <Route path='/movie/:id' component={Movie}/>
            <Route path="*" component={NotFound}/>

        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;