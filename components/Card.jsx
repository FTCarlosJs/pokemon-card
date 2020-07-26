import React, {useState, useEffect} from 'react'

const Card = ({name = "bulbasaur"}) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect( () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then(res => res.json())
    .then(res => fetch(res.forms[0].url))
    .then(resp => resp.json())
    .then(resp => setPokemon({
            name: resp.name,
            img: resp.sprites.front_shiny
      })
    )
  },[name])

  return (
    <div className="pokemon__info">
     <div className="pokemon-box">
       {pokemon && <img className="pokemon-img" src={pokemon.img}/>}
     </div>
      {pokemon && <h1 className="pokemon-title">{pokemon.name.toUpperCase()}</h1>}
    </div>
  )
}

export default Card