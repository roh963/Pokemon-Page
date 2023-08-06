import {Routes,Route  } from "react-router-dom";
import Pokedex from "../component/Pokedex/Pokedex";
import PokemonDetail from "../component/PokemonDetail/POkemonDetail";
function CoustomRoutes() {
    return (<Routes>
        <Route path="/" element={<Pokedex/>}  />
        <Route path="/pokemon/:id" element={<PokemonDetail/>}  />

        
    </Routes>
    )
    
}
export default CoustomRoutes;