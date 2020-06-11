import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.scss';
import List from './List';
import Item from './Item';
import Layout from './Layout';

const App = () => (
  <Layout>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  </Layout>
);

export default App;
