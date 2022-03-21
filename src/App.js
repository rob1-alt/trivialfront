import './App.css';
import Accueil from './components/Accueil'
import Cycling from './components/Cycling'
import Produit from './components/Produit.js'
// import Ranking from './components/Ranking'
import Navigation from './components/Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>

        <Link to="/Produit">Product</Link>

        <Switch>
          <Route exact path="/Produit" component={Produit} />
        </Switch>
    </Router>
    </div>
    
  );
}


    

export default App;
