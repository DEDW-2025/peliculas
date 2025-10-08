import styles from './movies.module.css'

export default function Movie({ name, description, image }) {
  return (
    <div className={styles.movie}>
      <img src={image} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
