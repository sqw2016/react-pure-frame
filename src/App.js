import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BasicLayout from './layout/BasicLayout';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Route path="/home/house" component={House}/>
    </div>
  );
}

function House() {
  return <div>House</div>
}

function About() {
  return <div>About</div>
}


function App() {
  return (
    <Router>
      <Route path="/" component={BasicLayout} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
