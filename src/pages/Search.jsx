import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTER_LOCATIONS = gql`
    query GetCharacterLocations($location: String) {
        characters(filter:{ name: $location }) {
            results {
                location {
                    name
                }
            }
        }
    }
`;

export default function Search() {

    const [name, setName] = useState('');
    const [ getLocations, { loading, data, error, called, refetch }] = useLazyQuery(GET_CHARACTER_LOCATIONS, { variables: { name } });

    console.log({
        loading,
        data,
        error,
        called
    });

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()}>Search</button>

            { loading && <div>Spinner</div> }
            { error && <div>Something Went wrong!</div>}
            { data && 
                data.characters.results.map((r, index) => <div key={index}>{r.location.name}</div>)
            }
        </div>
    );
}