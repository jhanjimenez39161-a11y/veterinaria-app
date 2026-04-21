import { useEffect, useState } from "react";
import { getDogs } from "../services/api";
import Card from "../components/Card";

function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    getDogs().then(data => setDogs(data));
  }, []);

  return (
    <div className="container">
      {dogs.map((dog, index) => (
        <Card key={index} image={dog} />
      ))}
    </div>
  );
}

export default Home;