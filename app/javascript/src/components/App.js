import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Strollers from './Strollers/Strollers'
import Stroller from './Stroller/Stroller'
import Navbar from './Navbar'

const App = () => {
    return (
        <div>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Strollers} /> 
            <Route exact path="/strollers/:slug" component={Stroller} />
        </Switch>
        </div>
    );
};

export default App;