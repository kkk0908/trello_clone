import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Boards from './Boards';
import Lists from './components/Lists'
import * as serviceWorker from './serviceWorker';
//import Board from './components/Board';

const routing=(
    <Router>
        <div>
           <Route exact path="/" component={Boards} />
           <Route path="/board/:id" component={Lists}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
