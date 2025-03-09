import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, thumbnail, name, series, description}) {
    return <div>
        <h3>
          <Link to={`/charactor/${id}`}>{name}</Link>
        </h3>
        <img src={thumbnail} alt={name} />
        <p>{description}</p>
        <ul>
          {series.map((g) => (
            <li key={g.resourceURI}>{g.name}</li>
          ))}
        </ul>
      </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    series: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;