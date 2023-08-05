import "./PokedexList.css";
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";
import Pokemon from "../pokemon/pokemon";
const poked_url = "https://pokeapi.co/api/v2/pokemon";
function PokedexList() {
    const [pokemonList ,setPokemonList]= useState([]);
    const [isloading,setIsloading]= useState(true);
    async function downloadpokemon(){
        const response = await axios.get(poked_url);  // this download list of pokemon


        const pokemonResult = response.data.results;  // we get the array of list  pokemon list

        console.log(response.data);

       // iterating  over the array of pokemon , and using their url , to create an array  of promises
       // that will be download  20 pokemon list 
       const pokemonPrimise =  pokemonResult.map( (pokemon) => axios.get(pokemon.url));


       // paasing the promise the in  axios.all 
       const pokemondata = await axios.all(pokemonPrimise); // array of 20 pokemon list detailed data 

       console.log(pokemondata);
        // now itrate on data of each pokemon  and extract id , name , image and type
        const res =(pokemondata.map((pokeData)=>{
        const pokemon = pokeData.data;
         return { id:pokemon.id,
             name: pokemon.name , 
            image:pokemon.sprites.other.dream_world.front_default,
          types:pokemon.types}

            
        }));
        console.log(res);
         
        setPokemonList(res);
        setIsloading(false);
    }
    useEffect (()=>{
        downloadpokemon();
    },[]);
    return(
     <div className="pokemon-list-wrap" >
           
           <h1 className="pokemon-name">Pokemon List</h1>  
           <div className="pokemon-wrap">
           
           {
            (isloading)?"loading" :pokemonList.map((p)=><Pokemon name={p.name}  image={p.image} key={p.id} />)
        }
           </div>

     </div>
    );
}
export default PokedexList;