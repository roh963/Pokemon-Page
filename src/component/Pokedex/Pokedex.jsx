

import PokedexList from "../PokedexList/PokedexList.jsx";
import Search from "../Search/Search.jsx";
import './Pokedex.css'
function Pokedex() {
    return(<div className="pokedex-wrap">
    
     
        <Search/>
        <PokedexList/>
      
      
    </div>);
}
export default Pokedex;