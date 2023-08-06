import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PokemonDetail () {
    const {id} = useParams();
    const [pokemon,setPokemon] = useState({});
    async function downloadpokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
         setPokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            hight:response.data.hight,
            types:response.data.types.map((t)=>t.type.name)
         })
        
    }
    useEffect(()=>{
     downloadpokemon();
    },[])
    return (<div className="pokemon-detail">
           <div className="pokemon-name" > name:{pokemon.name}</div>
           <img className="pokemon-image" src={pokemon.image} />
           <div className="pokemon-weight" > weight:{pokemon.weight}</div>
           <div className="pokemon-hight" > hight:{pokemon.hight}</div>
           <div className="pokemon-type">
            { pokemon.types &&  pokemon.types.map((t)=> <div key={t}>{t}</div>)}
           </div>
    </div>);
}
export default PokemonDetail;