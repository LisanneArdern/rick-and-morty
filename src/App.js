import React, { useState, useEffect } from 'react'
import Card from './Card'
import './App.css'

export default function App() {
  const url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters(resBody.results))
  }, [url])
  return (
    <div className="App">
      {characters.map(character => {
        const { id, name, species, gender } = character
        return <Card key={id} name={name} species={species} gender={gender} />
      })}
    </div>
  )
}
