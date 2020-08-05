import React from 'react';
import styled from 'styled-components'

const Button = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    height: 24px;
    width: 66px;
    background: transparent;
    border:none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    &:focus{
        outline:none;
    }
`
const ToggleButton = styled.div`
    width: 30px;
    height: 2px;
    background: #666;

`
const DrawerToggleButton = (props) => {
    return (
        <Button>
            <ToggleButton></ToggleButton> 
            <ToggleButton></ToggleButton> 
            <ToggleButton></ToggleButton> 
        </Button>
    );
};

export default DrawerToggleButton;