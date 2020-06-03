import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import List from './List';


const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={List} />
      </Switch>
    </div>
  </Router>
);

export default App;
