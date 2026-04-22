import { useEffect, useState } from "react";
import { getDogs } from "../services/api";
import Card from "../components/Card";

function Home() {
  const [dogs, setDogs] = useState([]);

  
  const cargarPerros = async () => {
    const data = await getDogs();
    setDogs(data);
  };

  
  useEffect(() => {
    cargarPerros();
  }, []);

  return (
    <>
      <div className="container">
        {dogs.map((dog, index) => (
          <Card key={index} image={dog} />
        ))}
      </div>

      <button onClick={cargarPerros}>
        Cargar más perros
      </button>
    </>
  );
}

export default Home;