import React from 'react'
import characters from './data.json'
import Card from './Card'
import './App.css'

export default function App() {
  return (
    <div className="App">
      {characters.map(character => {
        const { id, name } = character
        return <Card key={id} name={name} />
      })}
    </div>
  )
}
