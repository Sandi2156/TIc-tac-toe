export default class GameView{

    constructor(){
        console.log('init game view');
    }

    updateBoard(game){
        this.updateTurn(game);
        let WinnigCombination = game.findWinnigCombination();
        for(let i=0; i<game.board.length; i++){
            // console.log(game.board[i])
            const tile = document.querySelector(`.board-tyle[data-index='${i}']`);
            // tile.textContent = game.board[i];
            tile.classList.remove('tile-winner');
            let tileType = game.board[i] === 'X' ? 'tile-X' : 'tile-O';
            tile.innerHTML = `<span class=${tileType}>${game.board[i] ? game.board[i] : ""}</span>`

            if(WinnigCombination && WinnigCombination.includes(i)) {
                tile.classList.add('tile-winner');
            }
        }
    }
    updateTurn(game){
        let player_X = document.querySelector('.player-x');
        let player_Y = document.querySelector('.player-o');
        
        player_X.classList.remove('active');
        player_Y.classList.remove('active');
        if(game.turn === 'X'){
            player_X.classList.add('active');
        } else {
            player_Y.classList.add('active')
        }
    }
}