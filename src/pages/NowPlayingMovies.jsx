import MovieList from '../MovieList.jsx'

export default function NowPlayingMovies({ searchText }) {
  return <MovieList searchText={searchText} movieType="now_playing" />
}
