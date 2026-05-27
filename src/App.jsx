import Cards from "./components/Cards";
import peliculas from "./data/peliculas";
import logo from "./assets/logo.png";

import "./index.css";

function App() {
  return (
    <>
      <div className="header-wrapper">
        <header className="header">
          <div className="header__logo">
            <img
              src={logo}
              alt="Cine Calidad"
              className="header__logo__img"
            />
          </div>

          <div className="header__acciones">
            <div className="buscador">
              <input type="text" placeholder="Buscar película" />
            </div>

            <button className="buscador__btn">
              Buscar
            </button>
          </div>
        </header>
      </div>

      <main className="main">
        <div className="grid">
          {peliculas.map((pelicula) => (
            <Cards
              key={pelicula.id}
              titulo={pelicula.titulo}
              genero={pelicula.genero}
              descripcion={pelicula.descripcion}
              imagen={pelicula.imagen}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;