import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Strollers from './Strollers/Strollers'
import Stroller from './Stroller/Stroller'
import Navbar from './Navbar/Navbar'
import { AuthProvider } from './AuthContext'
import LoginRoute from './LoginRoute'
import Login from './Login'
import Register from './Register'
import Footers from './Footer/Footers';
// import SideDrawer from './SideDrawer/SideDrawer'

const App = () => {
    return (
        <AuthProvider>
            <div style={{height:"100%"}}>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Strollers} /> 
                    <Route exact path="/strollers/:slug" component={Stroller} />
                    <LoginRoute exact path="/register" component={Register} />
                    <LoginRoute path="/login" component={Login}/>
                </Switch>
            </div>
            <Footers/>
        </AuthProvider>
    );
};

export default App;