import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:20px;
  img {
    margin-right: 10px;
    height: 250px;
    width: 250px;
    margin-bottom: -8px;
    h1{
      font-size: 3rem;
      font-weight: bold;
    }
  }
`

const TotalReviews = styled.div`
  font-size: 18px;
  padding:10px 0;
`

const TotalOutOf = styled.div`
  padding-top: 12px;
  font-size: 18px;
  font-weight: bold;
`

const Header = (props) => {
  const { image_url, name,  avg_score } = props.attributes
  const reviewCount = props.reviews ? props.reviews.length : 0


  return (
    <Wrapper>
      <h1><img src={image_url} alt={name} /> {name}</h1>
      <div>
        <TotalReviews><span className="review-count">{reviewCount}</span> user reviews</TotalReviews>
        {/* <Rating score={average} /> */}
        <TotalOutOf>{avg_score.toFixed(1)} out of 5 stars</TotalOutOf>       
      </div>
    </Wrapper> 
  )
}

export default Header