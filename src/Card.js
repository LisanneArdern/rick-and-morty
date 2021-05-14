import './Card.css'

export default function Card({ name, image, status, species, gender }) {
  return (
    <section className="Card">
      <h2 className="Card__name">{name}</h2>
      <img className="Card__image" src={image} alt="" />
      <dl className="Card__list">
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Species:</dt>
        <dd>{species}</dd>
        <dt>Gender:</dt>
        <dd>{gender}</dd>
      </dl>
    </section>
  )
}
