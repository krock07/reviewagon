import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding:100px 100px 10px 100px;
`
const H1 = styled.p`
  font-size:42px;
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
  padding: 20px;
`

const Header = () => {
    return (
      
        <Wrapper>
            <H1>Reviewagon</H1>
            <Subheader>Your safe place in an unsafe world. Share your experience</Subheader>
        </Wrapper>
      
    );
};

export default Header;