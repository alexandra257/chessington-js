import Piece from './piece';
import Square from '../square';
import Player from '../../engine/player';
import GameSettings from '../gameSettings';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
        this.boardSize = GameSettings.BOARD_SIZE;
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let currentColumn = currentSquare.col;
        let currentRow = currentSquare.row;
        let arrayOfMoves = [];

        for (let i = 0; i < this.boardSize; i++) {
            if(i !== currentColumn)
                arrayOfMoves.push(Square.at(currentRow, i));
        }

        for (let i = 0; i < this.boardSize; i++) {
            if(i !== currentRow)
                arrayOfMoves.push(Square.at(i, currentColumn));
        }
        return arrayOfMoves;
    }

}
