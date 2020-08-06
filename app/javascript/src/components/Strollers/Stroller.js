import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Rating from '../Rating/Rating'
import styled from 'styled-components'


const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`

const StrollerLogo = styled.div`
  width: 250px;

  img {
    height: 250px;
    width: 250px;
    // border: 1px solid rgba(0,0,0,0.1);
    // border-radius: 100%;
  }
`

const StrollerName = styled.div`
  padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;
  a {
    color: white;
    background-color: #000000;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #000000;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;
    &:hover{
      border-color: #4c4944;
      background: #4c4944;
    }
  }
` 
const Center = styled.div` 
display: flex;
justify-content: center;
align-items: center;
`


const Stroller = (props) => {
  // const { image_url, slug, average_score} = props.attributes
 
    // const avg_score = parseFloat(props.avg_score / 100)

  return (
    <div className="column is-one-third">
      <Center>
        <StrollerLogo><img src={props.image_url} alt={props.name} width="250" height="250" /></StrollerLogo>
      </Center>
      <StrollerName>
        {props.name}
      </StrollerName>
      <Rating score={props.avg_score}/>
      <LinkWrapper>
        <Link to={"/strollers/" + props.slug}>View Stroller</Link>
      </LinkWrapper>
    </div>
  )
}

export default Stroller;