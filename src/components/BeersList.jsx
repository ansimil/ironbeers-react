import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'

const BeersList = () => {
    const [beers, setBeers] = useState([]);
   
    useEffect(() => {
      console.log("useEffect - Initial render (Mounting)");
      axios.get(apiURL).then((response) => {
        console.log(response.data)
              setBeers(response.data);
      }).catch(err => console.log(err));
    }, []);

    return (
    beers.map((beer) => {
        return (<div>
        <h3>Name: {beer.name}</h3>
        <img src={beer.image_url} alt="pic" width="100px"/>
        <p>Description: {beer.description}</p>
        </div>)
      
  })  

  )
}

export default BeersList