import Pokelist from './Pokelist';

// Initialize Players

let player1;
let player2;

const getPlayer1 = (e) => {
    if (e.target.toString() === '[object HTMLImageElement]') {
        player1 = e.target.parentElement.children[0].innerText;
    } else {
        player1 = e.target.children[0].innerText;
    }
    return player1;
}

const getEnemy = (pokelist) => {
    let rand = Math.floor(Math.random() * pokelist.length + 1);
    player2 = pokelist[rand].name;
    return player2;
}

//  Roll Dice Function

const rollDice = () => {
    return Math.floor(Math.random() * 6);
}

//  Minigame battle logic

const startFight = (e) => {
    let p1Roll;
    let p2Roll;

    getPlayer1(e);
    getEnemy(Pokelist);
    console.log(`You have chosen to battle with ${player1}`);
    setTimeout(() => {
        console.log(`You must battle ${player2} this round!`);
    }, 2000);
    setTimeout(() => {
        p1Roll = rollDice() + 1;
        console.log(`${player1} rolls a ${p1Roll}...`);
    }, 3000);
    setTimeout(() => {
        p2Roll = rollDice() + 1;
        console.log(`${player2} gets ready to roll...`);
    }, 4000);
    setTimeout(() => {
        if (p1Roll > p2Roll) {
            console.log(`${player2} rolls a ${p2Roll}...`);
            console.log(`You Win!  ${player1} destroyed ${player2} with a ${p1Roll}`);
        } else if (p2Roll > p1Roll) {
            console.log(`${player2} rolls a ${p2Roll}...`);
            console.log(`You Lose! ${player2} destroyed ${player1} with a ${p2Roll}`);
        } else {
            console.log(`${player2} rolls a ${p2Roll}...`);
            console.log(`It's a tie!  Both players rolled a ${p1Roll}`);
        }
    }, 6000);
}

export { startFight };