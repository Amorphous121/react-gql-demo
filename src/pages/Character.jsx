import { useParams } from "react-router-dom"
import { useCharacter } from "../hooks/useCharacter";
import './Character.css';

export default function Character() {

    const { id } = useParams();
    const { error, data, loading } = useCharacter(id);

    if (loading) return <div>Spinner</div>

    if (error) return <div>Error..</div>

    return(
        <div className="character">
            <img src={data.character.image} alt="" width={750} />
            <div className="character-content">
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <br />
                <br />
                {
                    data.character.episode.map((episode, index) => <div key={index}>{episode.name} - <b>{episode.episode}</b></div>)
                }
            </div>
        </div>
    )
}