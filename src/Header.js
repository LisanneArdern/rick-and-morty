import './Header.css'
import picture from './Rick_and_Morty_logo.png'

export default function Header() {
  return (
    <header className="Header">
      <h1>
        <img className="Header__image" src={picture} alt="" />
      </h1>
    </header>
  )
}
