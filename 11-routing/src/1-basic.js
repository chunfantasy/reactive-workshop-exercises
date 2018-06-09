import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// prettier-ignore
const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/user/123">User 123</Link></li>
        <li><Link to="/user/456">User 456</Link></li>
      </ul>
      <Route path="/" component={() => <div>This is Home.</div>} />
      <Route exact path="/" component={() => <div>This is exact Home.</div>} />
      <Route path="/about" component={() => <div>This is About.</div>} />
      <Route
        path="/user/:id"
        component={({ match }) => (
          <div>This is User with id: {match.params.id}</div>
        )}
      />
    </div>
  </Router>
);

render(<App />, document.getElementById('root-1'));
