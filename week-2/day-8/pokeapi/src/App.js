import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const fetchPokemonData = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      setPokemonData(response.data);
      setPokemonName(""); // Clear the input field after fetching data
    } catch (error) {
      console.error(error);
      setPokemonData(null);
    }
    
  };

  return (
    <div className="text-center p-5">
      <h1>pokédex</h1>

      <div className="d-flex justify-content-center pt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          style={{ maxWidth: "150px" }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={fetchPokemonData}
          >
            Search
          </button>
        </div>
      </div>

      <div className="pt-3">
        {pokemonData && (
          <>
            <h2>{pokemonData.name}</h2>
            <img
              height="200px"
              width="200px"
              src={pokemonData.sprites.front_default}
              alt={pokemonData.name}
            />
            <p>
              <strong>Pokémon ID:</strong> {pokemonData.id}
            </p>
            <p>
              <strong>Type:</strong>{" "}
              {pokemonData.types.map((type) => type.type.name).join(", ")}
            </p>
            <p>
              <strong>Abilities:</strong>{" "}
              {pokemonData.abilities
                .map((ability) => ability.ability.name)
                .join(", ")}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
