import MovieList from '../MovieList.jsx'

export default function UpcomingMovies({ searchText }) {
  return <MovieList searchText={searchText} movieType="upcoming" />
}
