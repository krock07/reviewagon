import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Header from './Header';
import Review from './Review';
import Form from './Form';
// import GetNested from '../../Helpers/GetNested'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
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
    const [loaded, setLoaded] = React.useState(false);
    // const [error, setError] = useState('')

    useEffect(()=> {
        const slug = props.match.params.slug
        // const url = `api/v1/strollers/${slug}.json`

        axios.get(`http://localhost:3000/api/v1/strollers/${slug}.json`)
        .then(response => {
          setStroller(response.data)
          setLoaded(true)
        } )
        .catch( resp => console.log(resp) )
         
        // .then ( resp => {setStroller(resp.data)
        //   setLoad(true);})
        //   .catch( err => {
        //     setError(err.message);
        //               setLoaded(true)
        //   })
         } , [])

  const handleChange = (event) => {
    event.preventDefault()

    setReview(Object.assign({}, review, {[event.target.name]: event.target.value}))
    console.log("name:", event.target.name, "value:", event.target.value)
    console.log("review:", review)
  }

  

  const handleSubmit = (event) => {
    event.preventDefault()

// update default headers
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
  

    const stroller_id = stroller.data.id
    axios.post('http://localhost:3000/api/v1/reviews.json', {review, stroller_id})
    .then(resp => {
      // debugger
      
        const included = [ ...stroller.included, resp.data.data ]
        setStroller({ ...stroller, included })
        console.log(included)
        setReview({title: '', description: '', score: 0})
        setError('')
    })
    .catch(resp => {})
}

const resetStroller = () => {
  const slug = props.match.params.slug

        axios.get(`http://localhost:3000/api/v1/strollers/${slug}.json`)
        .then(response => {
          setStroller(response.data)
          setLoaded(true)
        } )
        .catch( resp => console.log(resp) )
}

// update a review

const handleUpdate = (id, event) => {
  event.preventDefault()
  axios.put(`http://localhost:3000/api/v1/reviews/${id}`, {
  })
  .then(response => {
    setReview(Object.assign({}, review, {[event.target.name]: event.target.value}))
    console.log(response);
  })
  .catch(error => {
    console.log(err);
  });

}


 // Destroy a review
 const handleDestroy = (id, event) => {
  event.preventDefault()
  let review_id = review_id
  axios.delete(`http://localhost:3000/api/v1/reviews/${id}`, {review, id})
  // .then( resp => {console.log(resp)
  //   return resp
  // })
  .then( (resp) => {
    // let reviews = [...stroller.reviews]
    // const index = reviews.findIndex( (data) => data.id == id )
    // reviews.splice(index, 1)

    // setStroller(stroller)
    resetStroller();
  })
  .catch( data => console.log('Error', data) )
}


  



const setRating  = (score, event) => {
    event.preventDefault()
    // debugger

    setReview({...review, score})

  }

  // const name = GetNested(stroller, 'name')
  // const image_url = GetNested(stroller, 'imageUrl')


  // let total, average = 0
  // let strollerReviews

  // if (stroller.reviews && stroller.reviews.length > 0) {
  // total = strollers.reviews.reduce( (total, review) => total + review.score, 0)
  // average = total > 0 ? (parseFloat(total) / parseFloat(stroller.reviews.length)) : 0

  // strollerReviews = stroller.reviews.map( (review, index) => {
  //     return (
  //       <Review 
  //         key={index} 
  //         id={review.id} 
  //         attributes={review}
  //       />
  //     )
  //   })
  // }
// let strollers
  let reviews
  if (loaded && stroller.included) {
    reviews = stroller.included.map( (review, index) => {
      console.log(review)
      
      return (
        <Review 
          key={index} 
          attributes={review.attributes}
          handleDestroy={handleDestroy}
          review={review}
          handleUpdate={handleUpdate}
          // title={review.attributes.title} 
          // description={review.attributes.description} 
          // score={review.attributes.score} 
        />
      )
    })
  }


    return (
    <Wrapper>
     
        { loaded &&
        <Fragment>
         <Column>
         <Main>
        <Header
        attributes= {stroller.data.attributes}
        reviews={stroller.included}
        />
      
        {reviews}
      </Main>
      </Column>
      <Column>
        <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setRating={setRating}
        attributes={stroller.data.attributes}
        review={review}
        

        />
      </Column>
      </Fragment>
        }
    </Wrapper>
     
        // <Wrapper>
        //   {
        //     loaded &&
        //     <Fragment>
        //     <Column>
        //     <Main>
        //         <Header
        //         attributes={stroller.data.attributes}
        //         reviews={stroller.included}
        //         image_url={image_url}
        //         name={name}
        //         reviews={stroller.reviews}
        //         average={average}
        //         />
        //          {reviews}
        //     </Main>
        //     </Column>
        //     <Column>
        //     <Form
        //     name={name}
        //     review={review}
        //     handleChange = {handleChange}
        //     handleSubmit={handleSubmit}
        //     setRating={setRating}
        //     error={error}
        //   />
        //     </Column>
        //     </Fragment>
        //   }
        // </Wrapper>
    );
};


export default Stroller;