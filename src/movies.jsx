import { useState } from "react"
import styles from './movies.module.css'

export default function Movie({ id, name, description, image }) {
  // "lógica del componente"
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(`${id}`) === 'true'
  )

  const onClick = () => {
    if (isFavorite) {
      setIsFavorite(false)
      localStorage.removeItem(`${id}`)
    } else {
      setIsFavorite(true)
      localStorage.setItem(`${id}`, 'true')
    }
    // setIsFavorite(!isFavorite)
  }

  // "renderizado" (JSX)
  return (
    <div className={styles.movie}>
      <img src={image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={onClick}>
        {isFavorite ? "❤️ Favorito" : "Agregar a favorito"}
      </button>
    </div>
  )
}
