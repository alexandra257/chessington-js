import Piece from './piece';
import Square from '../square';
import Player from '../../engine/player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let square;

        if (this.player == Player.BLACK) {
            square = Square.at(currentSquare.row - 1, currentSquare.col);
        } else {
            square = Square.at(currentSquare.row + 1, currentSquare.col);
        }
        return [ square ];
        // return [ Square.at(6, 7), Square.at(1, 0) ];
    }
}
