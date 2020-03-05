import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StyledApp from './styled/StyledApp';
import Nav from './Nav';
import Home from './Home';
import FetchExample from './FetchExample';
import Counter from './Counter';
import Form from './Form';

const App = () => (
  <Router>
    <Nav />
    <StyledApp>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/fetch-example">
          <FetchExample />
        </Route>
        <Route path="/counter">
          <Counter initialCount={0} />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </StyledApp>
  </Router>
);

export default App;
