import { useState } from "react"

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
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={onClick}>
        {isFavorite ? "❤️ Favorito" : "Agregar a favorito"}
      </button>
    </div>
  )
}
