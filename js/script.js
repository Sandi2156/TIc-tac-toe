import Game from './Game.js';
import GameView from './GameView.js'
console.log('hello');


let game = new Game();
let gameView = new GameView();

let tiles = document.querySelectorAll('.board-tyle');
tiles.forEach((tile)=>{
    tile.addEventListener('click',()=>{
        onTileClicked(tile.dataset.index)
    })
})


function onTileClicked(i) {
    //make a move
    game.makeMove(i);
    //change turn
    gameView.updateBoard(game)
    //update board

}

document.querySelector('.restart').addEventListener('click', ()=> {
    onClickRestart()
})

function onClickRestart(){
    game = new Game();
    gameView.updateBoard(game)
}

gameView.updateBoard(game)