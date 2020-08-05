import React from 'react';
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'

const Side = styled.div`
height: 70%;
max-width:400px
background: white;
box-shadow: 2px opx 5px rgba(0,0,0,0.5);
position: fixed;
top: 0;
left:0;
width: 400px;
    
`

const SideDrawer = (props) => {
    return (
        <Side>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            
        </Side>
    );
};

export default SideDrawer;