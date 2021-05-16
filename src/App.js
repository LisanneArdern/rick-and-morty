import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './Header'
import Card from './Card'

export default function App() {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
  const [characters, setCharacters] = useState([])
  const [nextPage, setNextPage] = useState(
    '"https://rickandmortyapi.com/api/character?page=2"'
  )
  const [prevPage, setPrevPage] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setCharacters(res.results)
        setNextPage(res.info.next)
        setPrevPage(res.info.prev)
      })
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
      <button className="App__button" onClick={() => setUrl(prevPage)}>
        Previous Page
      </button>
      <button className="App__button" onClick={() => setUrl(nextPage)}>
        Next Page
      </button>
    </div>
  )
}
