import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Strollers from './Strollers/Strollers'
import Stroller from './Stroller/Stroller'
import Navbar from './Navbar'
import { AuthProvider } from './AuthContext'
import LoginRoute from './LoginRoute'
import Login from './Login'
import Register from './Register'

const App = () => {
    return (
        <AuthProvider>
        <Navbar/>
        <Switch>
            <Route exact path="/" component={Strollers} /> 
            <Route exact path="/strollers/:slug" component={Stroller} />
            <LoginRoute exact path="/register" component={Register} />
            <LoginRoute path="/login" component={Login}/>
        </Switch>
        </AuthProvider>
    );
};

export default App;