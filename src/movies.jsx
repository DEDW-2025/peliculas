import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import { Favorite, FavoriteBorder } from "@mui/icons-material"
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
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        maxWidth: '100%'
      }}
    >
      <CardMedia
        sx={{
          aspectRatio: '2/3',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        image={image}
        title={name}
      />
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            mb: 1,
            fontSize: '1rem',
            fontWeight: 600,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            fontSize: '0.875rem',
            lineHeight: 1.5
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ pt: 0, px: 2, pb: 2 }}>
        <Button
          size="small"
          onClick={onClick}
          variant={isFavorite ? "contained" : "outlined"}
          color="primary"
          fullWidth
          startIcon={isFavorite ? <Favorite /> : <FavoriteBorder />}
        >
          {isFavorite ? "Favorito" : "Agregar a favorito"}
        </Button>
      </CardActions>
    </Card>
  )
}
