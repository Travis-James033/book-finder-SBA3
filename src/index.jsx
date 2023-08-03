import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Home from './Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
