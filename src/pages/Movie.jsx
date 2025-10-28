import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function MoviePage() {
    const { id } = useParams()
    const [movie, setMovie] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`).then((r) => r.json()).then((m) => {
            console.log(m)
            setMovie(m)
        })
    }, [id])


    if (!movie) {
        return "Cargando..."
    }

    return (
        <h1>{movie.title}</h1>
    )
}