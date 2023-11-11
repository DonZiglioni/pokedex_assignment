import '../src/Pokecard.css'

//  Starts a mini dice battle between 2 pokemon
import { startFight } from './helpers'

//  Base URL for images
const imgSource = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const Pokecard = (props) => {
    return (
        <div className="pokecard" onClick={startFight}>
            <h4 className="pokecard-name">{props.info.name}</h4>
            <img src={`${imgSource}${props.info.id}.png`} alt="Poke" />
            <h5>Type: {props.info.type}</h5>
            <h5>EXP: {props.info.base_experience}</h5>
        </div>
    )
}

export default Pokecard;