import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Homepage = () => <div>Hello World!</div>
const About = () => <div>About us.</div>;
const User = ({match}) => <div>User id: {match.params.id}</div>;
const App = () => <Router>
  <div>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/user/123">User 123</Link></li>
      <li><Link to="/user/456">User 456</Link></li>
      </ul>
    <Route exact path="/" component={Homepage} />
    <Route path="/about" component={About} />
    <Route path="/user/:id" component={User} />
  </div>
</Router>;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
