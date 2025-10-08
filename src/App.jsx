import './App.css'
import Movie from './movies.jsx'

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
          image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jl7e0hLYwIDsMlEQ28Gh30DoJRy.jpg"
        />
        <Movie
          name="Expediente Warren: El último rito"
          description="Los investigadores de lo paranormal Ed y Lorraine Warren se enfrentan a un último caso aterrador en el que están implicadas entidades misteriosas a las que deben enfrentarse."
          image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vrfti9ycF4mlA5WuIyfgCf1LJQG.jpg"
        />
        <Movie
          name="Una batalla tras otra"
          description="Cuando su principal enemigo resurge después de 16 años, una banda de ex revolucionarios se pone de nuevo en contacto para rescatar a la hija de uno de los suyos, encarnado por Leonardo DiCaprio. Adaptación de la novela 'Vineland', de Thomas Pynchon (1990), sobre los movimientos radicales de los años sesenta."
          image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zwxROLIUeEr6eFITwworjcXLAk4.jpg"
        />
      </div>
    </>
  )
}

export default App
