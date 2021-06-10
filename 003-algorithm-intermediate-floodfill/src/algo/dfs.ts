import Filler from "./filler";
import Cell from "../structure/cell";

export default class DepthFirstSearchFiller extends Filler {

    fillFrom(root: Cell): string[][] {

        // TODO : Here starts the implementation of DFS.

        // Hint 01 : implementing DFS means recursion...

        // Hint 02 : how to fill a cell ?
        //this.rows[rowIndex][colIndex] = "light-blue";

        throw Error("Not implemented yet.");

        // TODO : Here ends the implementation of DFS.

    }

    fillRecursively(cell: Cell | undefined): void {
        throw Error("Not implemented yet.");
    }

    getTheLeftCellIfStillInTheGridAndWhite(rowIndex: number, colIndex: number): Cell | undefined {
        throw Error("Not implemented yet.");
    }

    getTheTopCellIfStillInTheGridAndWhite(rowIndex: number, colIndex: number): Cell | undefined {
        throw Error("Not implemented yet.");
    }

    getTheRightCellIfStillInTheGridAndWhite(rowIndex: number, colIndex: number): Cell | undefined {
        throw Error("Not implemented yet.");
    }

    getTheBottomCellIfStillInTheGridAndWhite(rowIndex: number, colIndex: number): Cell | undefined {
        throw Error("Not implemented yet.");
    }

}