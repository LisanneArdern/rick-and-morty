import './Card.css'

export default function Card({ name, status, species, gender }) {
  return (
    <section>
      <h2>{name}</h2>
      <dl>
        <dt>Status</dt>
        <dd>{status}</dd>
        <dt>Species</dt>
        <dd>{species}</dd>
        <dt>Gender</dt>
        <dd>{gender}</dd>
      </dl>
    </section>
  )
}
