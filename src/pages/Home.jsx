import { useEffect, useState } from "react";
import { getDogs } from "../services/api";
import Card from "../components/Card";

function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtro, setFiltro] = useState("");

  const cargarPerros = async () => {
    setLoading(true);
    const data = await getDogs();
    setDogs(data);
    setLoading(false);
  };

  useEffect(() => {
    cargarPerros();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="Buscar imagen..."
        onChange={(e) => setFiltro(e.target.value)}
        className="buscador"
      />

      {loading ? (
        <p className="loading">Cargando...</p>
      ) : (
        <div className="container">
          {dogs
            .filter((dog) => dog.includes(filtro))
            .map((dog, index) => (
              <Card key={index} image={dog} />
            ))}
        </div>
      )}

      <button onClick={cargarPerros}>
        Cargar más perros
      </button>
    </>
  );
}

export default Home;