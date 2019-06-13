import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

ReactDOM.render(
    <Router>
        <App />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
    </Router>, 
    document.getElementById('root')
);
