import { Link } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import './CharacterList.css';

export default function CharacterList(props) {
    
    const { data, loading, error } = useCharacters();

    if (loading) return <div>Spinner</div>

    if (error) return <div>Error..</div>

    return(
        <div className='character-list'>
            {
                data.characters.results.map((char, index) => (
                    <div key={index}>
                        <img src={char.image} alt="" />
                        <Link to={`/${char.id}`} ><h2>{char.name}</h2></Link>
                    </div>
                ))
            }
        </div>
    );
}