import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/user/123">User 123</Link>
        </li>
        <li>
          <Link to="/user/456">User 456</Link>
        </li>
      </ul>
      <Route exact path="/" component={() => <div>This is Home.</div>} />
      <Route path="/about">
        {() => <div>This is About without guard.</div>}
      </Route>
      <Route path="/about">
        {({ match }) => match && <div>This is About with guard.</div>}
      </Route>
      <Route
        path="/user/:id"
        render={({ match }) => (
          <div>This is User with id: {match.params.id}</div>
        )}
      />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root-2'));
