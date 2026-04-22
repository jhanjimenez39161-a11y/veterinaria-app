import { useState } from "react";

function Card({ image }) {
  const [like, setLike] = useState(false);

  return (
    <div className="card">
      <img src={image} alt="perro" />
      <button onClick={() => setLike(!like)}>
        {like ? "❤️ Favorito" : "🤍 Guardar"}
      </button>
    </div>
  );
}

export default Card;