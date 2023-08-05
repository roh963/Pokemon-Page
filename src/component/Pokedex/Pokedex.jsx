
import PokedexList from "../PokedexList/PokedexList.jsx";
import Search from "../Search/Search.jsx";
import './Pokedex.css'
function Pokedex() {
    return(<div className="pokedex-wrap">
        <h1 id="pokedex-heading">Pokedex</h1>
        <Search/>
        <PokedexList/>
    </div>);
}
export default Pokedex;