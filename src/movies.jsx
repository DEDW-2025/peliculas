import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
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
    <Card>
      <CardMedia
        sx={{ height: 700 }}
        image={image}
        title="green iguana"
      />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClick}>
          {isFavorite ? "❤️ Favorito" : "Agregar a favorito"}
        </Button>
      </CardActions>
    </Card>
  )
}
