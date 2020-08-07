import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import './Main.css';

export default function Main(props) {
    return(
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/portfolio' component={Portfolio}></Route>
            <Route path='/contact' component={Contact}></Route>
        </Switch>
    );
}