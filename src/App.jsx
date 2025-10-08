import './App.css'
import Movie from './movies.jsx'
import movie1 from './assets/movie-1.webp'
import movie2 from './assets/movie-2.webp'
import movie3 from './assets/movie-3.webp'

function Header() {
  return (
    <div>
      <h1>Cartelera Comunidad Castillo</h1>
      <h2>Octubre 2025</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <div className="movie-list">
        <Movie
          name="Kimetsu no Yaiba: Fortaleza Infinita"
          description="El Cuerpo de Cazadores de Demonios se enfrenta a los Doce Kizuki restantes antes de enfrentarse a Muzan en el Castillo del Infinito para derrotarlo de una vez por todas."
          image={movie1}
        />
        <Movie
          name="Expediente Warren: El último rito"
          description="Los investigadores de lo paranormal Ed y Lorraine Warren se enfrentan a un último caso aterrador en el que están implicadas entidades misteriosas a las que deben enfrentarse."
          image={movie2}
        />
        <Movie
          name="Una batalla tras otra"
          description="Cuando su principal enemigo resurge después de 16 años, una banda de ex revolucionarios se pone de nuevo en contacto para rescatar a la hija de uno de los suyos, encarnado por Leonardo DiCaprio. Adaptación de la novela 'Vineland', de Thomas Pynchon (1990), sobre los movimientos radicales de los años sesenta."
          image={movie3}
        />
      </div>
    </>
  )
}

export default App
