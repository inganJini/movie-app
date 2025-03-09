import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const getMovies = async () => {
      const response = await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
      const json = await response.json();
      setCharacters(json.data.results)
      setLoading(false);
    }
    useEffect(() => {
      getMovies();
    }, []);
    //console.log(characters);
    return (
      <div>
        {loading 
        ? <h1>Loading...</h1> 
        : (
          <div>
            {characters.map((character) => (
              <Movie
                key={character.id}
                id={character.id}
                thumbnail={character.thumbnail.path + "." + character.thumbnail.extension}
                name={character.name}
                series={character.series.items}
                description={character.description}
              />
            ))}
          </div>
        )}
      </div>
    );
}

export default Home;