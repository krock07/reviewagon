import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios';
// import Header from './Header';
import Review from './Review';
import Form from './Form';
import GetNested from '../../Helpers/GetNested'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Header = styled.div`
  padding: 100px 100px 10px 100px;
  font-size: 30px;
  text-align: center;
`

const Column = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: #ffc114;
    border-top: 1px solid #ffc11480;
  }
`

const Main = styled.div`
  padding-left: 60px;
  `

const Stroller = (props) => {
    const [stroller, setStroller] = useState({})
    const [review, setReview] = useState({})
    const [load, setLoad] = React.useState(false);
    const [error, setError] = useState('')

    useEffect(()=> {
        const slug = props.match.params.slug
        // const url = `api/v1/strollers/${slug}.json`

        axios.get(`http://localhost:3000/api/v1/strollers/${slug}.json`)
        .then((response) => response.data)
        .then( resp => {console.log(resp)
          return resp
        })
        .then ( resp => {setStrollers(resp.data)
          setLoad(true);})
          .catch( err => {
            setError(err.message);
                      setLoad(true)
          })
         } , [])

  const handleChange = (event) => {
    event.preventDefault()

    setReview(Object.assign({}, review, {[event.target.name]: event.target.value}))
    // console.log("name:", event.target.name, "value:", event.target.value)
    console.log("review:", review)
  }

  

  const handleSubmit = (event) => {
    event.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
  

    const strollerId = parseInt(stroller.id)
    axios.post('api/v1/reviews.json', {review, strollerId})
    .then(resp => {
        const reviews = [ ...stroller.reviews, resp.data ]
        setStroller({ ...stroller, reviews })
        setReview({title: '', description: '', score: 0})
        setError('')
    })
    .catch(resp => {})
}



const setRating  = (score, event) => {
    event.preventDefault()

    setReview({...review, score})

  }

  const name = GetNested(stroller, 'name')
  const image_url = GetNested(stroller, 'imageUrl')


  let total, average = 0
  let strollerReviews

  if (stroller.reviews && stroller.reviews.length > 0) {
  total = strollers.reviews.reduce( (total, review) => total + review.score, 0)
  average = total > 0 ? (parseFloat(total) / parseFloat(stroller.reviews.length)) : 0

  strollerReviews = stroller.reviews.map( (review, index) => {
      return (
        <Review 
          key={index} 
          id={review.id} 
          attributes={review}
        />
      )
    })
  }


    return (
     
        <Wrapper>
            <Column>
            <Main>
                <Header>
                image_url={image_url}
                name={name}
                reviews={stroller.reviews}
                average={average}
                </Header>
                 {strollerReviews}
            </Main>
            </Column>
            <Column>
            <Form
            name={name}
            review={review}
            handleChange = {handleChange}
            handleSubmit={handleSubmit}
            setRating={setRating}
            error={error}
          />
            </Column>
        </Wrapper>
    );
};


export default Stroller;