import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [text, setText] = useState('')

  return (
    <div className="container">
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"/>
      <div className="card">
       <input className="input" type="text"
             placeholder="Busca un pokemon"
              onChange={ e => setText( e.target.value)}
        />
        {
          text? <Card name={text}/> : <Card/>
        }
      </div>
    </div>
  )
}

export default App