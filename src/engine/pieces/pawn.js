import Piece from './piece';
import Square from '../square';
import Player from '../../engine/player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let nextMove;
        let arrayOfMoves = [];

        if (this.player == Player.BLACK) {
            nextMove = Square.at(currentSquare.row - 1, currentSquare.col);
            arrayOfMoves.push(nextMove);

            if (currentSquare.row === 6) {
                nextMove = Square.at(currentSquare.row - 2, currentSquare.col);
                arrayOfMoves.push(nextMove);
            }
        }

        else {
            nextMove = Square.at(currentSquare.row + 1, currentSquare.col);
            arrayOfMoves.push(nextMove);

            if (currentSquare.row === 1) {
                nextMove = Square.at(currentSquare.row + 2, currentSquare.col);
                arrayOfMoves.push(nextMove);
            }
        }
        return arrayOfMoves;
    }
}
