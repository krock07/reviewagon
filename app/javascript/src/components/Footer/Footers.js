import React from 'react';
import styled from 'styled-components'

const Footer = styled.div`
display: flex;
flex-flow: row wrap;
padding: 30px 30px 20px 30px;
color: #2f2f2f;
background-color: #fff;
border-top: 1px solid #e5e5e5;
`

const Legal = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: #999;

    div > {
        flex:  1 100%;
    }

    @media screen and (min-width: 24.375em) {
        margin-left: auto;
    }
`

const LegalLink = styled.div`

    display: flex;
    align-items: center;

    @media screen and (min-width: 24.375em) {
        margin-left: auto;
    }
`


const Footers = () => {
    return (
        <Footer>
            <Legal>
                <p>&copy; 2019 Something. All rights reserved.</p>
        
                <LegalLink>
                    <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
                </LegalLink>
            </Legal>
        </Footer>
    )
};

export default Footers;