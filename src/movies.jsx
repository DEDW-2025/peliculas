import { useState } from "react"
import styles from './movies.module.css'

export default function Movie({ name, description, image }) {
  // "lógica del componente"
  const [isFavorite, setIsFavorite] = useState(false)

  const onClick = () => {
    if (isFavorite) {
      setIsFavorite(false)
    } else {
      setIsFavorite(true)
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
