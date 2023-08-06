
import PokedexList from "../PokedexList/PokedexList.jsx";
import Search from "../Search/Search.jsx";
import './Pokedex.css'
function Pokedex() {
    return(<div className="pokedex-wrap">
       <div className="pnb"> <h1 id="pokedex-heading">Pokedex</h1> </div> 
        <Search/>
        <PokedexList/>
    </div>);
}
export default Pokedex;