import './App.css';
import Pokedex from './Pokedex';
import Pokelist from './Pokelist'

function App() {
  return (
    <div className="App">
      <Pokedex pokelist={Pokelist} />
    </div>
  );
}

export default App;
