import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Card from './Card'

export default function App() {
  const url = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => setCharacters(res.results))
      .catch(error => console.error(error))
  }, [url])
  return (
    <div className="App">
      <Header />
      <div className="App__card-container">
        {characters.map(character => {
          const { id, name, image, status, species, gender } = character
          return (
            <Card
              key={id}
              name={name}
              image={image}
              status={status}
              species={species}
              gender={gender}
            />
          )
        })}
      </div>
    </div>
  )
}
