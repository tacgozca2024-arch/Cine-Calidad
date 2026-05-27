import Button from "./Button";

const Cards = ({ titulo, genero, descripcion, imagen }) => {
  return (
    <article className="card">
      <img
        src={imagen}
        alt={titulo}
        className="card__imagen"
      />

      <div className="card__info">
        <h3>{titulo}</h3>

        <p>
          <strong>Género:</strong> {genero}
        </p>

        <p>
          <strong>Descripción:</strong> {descripcion}
        </p>

        <Button />
      </div>
    </article>
  );
};

export default Cards;