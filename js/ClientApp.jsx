import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOrFour = () => <h1>404 it is</h1>;
const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={FourOrFour} />        
      </Switch>
    </div>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'));