
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Stroller from './Stroller';
import styled from 'styled-components';
import Header from './Header'

const Home = styled.div`
    text-align:center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;

    > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
}
`



const Strollers = () => {
  const [strollers, setStrollers] = React.useState([]);
  const [load, setLoad] = React.useState(false);
  const [error, setError] = React.useState('');

  useEffect( () => {
    axios.get('http://localhost:3000/api/v1/strollers.json')
    // .then((response) => response.json() )
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

//    if (load) {
//     return (<ul>
//         {error ? 
//         <li>{error.message}</li> 
//         : strollers.map((item, index) => 
//         <li key={index}>{item.attributes.name}</li>)}
//     </ul>);
// } else {
//     return (
//         <div>
//             Loading...
//         </div>
//     );
// }

  const grid = strollers.map( (item, index) => { 
    return (
      <Stroller 
        key={index}
        name={item.attributes.name}
        image_url={item.attributes.image_url}
        slug={item.attributes.slug}
        avg_score={item.attributes.avg_score}
      />
    )
  })


  return (
    <Home>
      <Header/>
      <Grid>
        {grid}
      </Grid>
    </Home>
  );
};

export default Strollers;
