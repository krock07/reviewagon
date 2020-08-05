import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
  border-radius: 4px;
  border: 1px solid #E6E6E6;
  padding: 20px;
  margin: 0px 20px 20px 0px;
`

const Title = styled.div`
  padding: 20px 0px;
  font-weight: bold;
`

const Description = styled.div`
  padding: 0 0 20px 0;
`

const Container =styled.div`
  display: flex;
  flex-direction: row:
`

const Options = styled.div`
position:absolute;
right :15px;
top: 15px;
display: flex;
flex-direction: columns;
`


const Icon = styled.button`
  box-shadow: none;
  border-radius: 4px;
  margin: 0 4px;
  cursor: pointer;

  i {
    font-size: 18px;
  }
`

const Review = (props) => {
  const {score, description, title} = props.attributes
  return (
    <Card>
      <Container>
        <Rating
        score={score}
        />
      </Container>
      <Title>
        {title}
      </Title>
      <Description>
        {description}
      </Description>
      <div>
        {/* <h1 onClick={props.handleDestroy.bind(this, props.id)}>DELETE</h1> */}
        <Icon onClick={props.handleDestroy.bind(this, props.id)}> <i className="fa fa-trash"></i></Icon>
        <Icon> <i className="fa fa-pencil"></i></Icon>
      </div>
    
    </Card>
  )
}

export default Review