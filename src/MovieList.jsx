import { Container, Grid } from '@mui/material'
import Movie from './movies.jsx'
import { useMovies } from './hooks.js'

export default function MovieList({ searchText, movieType }) {
  const movies = useMovies(movieType)

  const filterMovie = (movie) => {
    if (searchText.length == 0) {
      return true
    }

    if (movie.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())) {
      return true
    }

    return false
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {movies.filter(filterMovie).map(movie => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={movie.id}>
            <Movie
              id={movie.id}
              name={movie.title}
              description={movie.overview}
              image={movie.poster_path}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
