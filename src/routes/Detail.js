import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    const getCharactor = async () => {
        const json = await (
            await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?id=${id}`)
        ).json();
        setDetails(json.data.results[0]);
        setLoading(false);
    };
    useEffect(() => {
        getCharactor();
    }, []);
    console.log(details);
    return (
        <div>
            {
                loading
                ? <h2>Detail loading...</h2>
                : (
                    <div> 
                            <h3>
                                {details.name}
                            </h3>
                            <img src={details.thumbnail.path + "." + details.thumbnail.extension} alt={details.name} />
                            <p>{details.description}</p>
                            <ul>
                            {details.series.items.map((g) => (
                                <li key={g.resourceURI}>{g.name}</li>
                            ))}
                            </ul>
                        
                    </div>
                )
            }
        </div>);
}
export default Detail;