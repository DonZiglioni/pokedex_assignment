import Pokecard from "./Pokecard";
import '../src/Pokedex.css';

const Pokedex = (props) => {
    return (
        <>
            <h1>Pokedex</h1>
            <div className="pokedex">
                {props.pokelist.map(i => <Pokecard info={i} />)}
            </div>
        </>
    )
}

export default Pokedex;