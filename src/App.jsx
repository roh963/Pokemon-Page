
import { Link } from 'react-router-dom';
import './App.css';


import CoustomRoutes from './routes/CoustomRoutes';
function App() {
 

  return (
    <div>
      <Link to={"/"} >  <div className="pnb"> <h1 id="pokedex-heading">Pokedex</h1> </div>  </Link>
     <CoustomRoutes/>
    </div>
  )
}

export default App
