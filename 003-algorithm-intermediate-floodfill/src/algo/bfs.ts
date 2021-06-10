import Queue from "../structure/data/queue";
import Cell from "../structure/cell";
import Filler from "./filler";

export default class BreadthFirstSearchFiller extends Filler {

    protected readonly queue: Queue<Cell>;

    constructor(rows: string[][], queue: Queue<Cell>) {
        super(rows);
        this.queue = queue;
    }

    fillFrom(root: Cell): string[][] {

        // TODO : Here starts the implementation of BFS.

        // Hint 01 : implementing BFS means using a queue (you have one ready-to-use in Queue.tsx).

        // Hint 02 : how to fill a cell ?
        // this.rows[rowIndex][colIndex] = "light-blue";

        throw Error("Not implemented yet.");

        // TODO : Here ends the implementation of BFS.

    }

    enqueueTheLeftCellIsStillInTheGridAndWhite(rowIndex: number, colIndex: number): void {
        throw Error("Not implemented yet.");
    }

    enqueueTheTopCellIsStillInTheGridAndWhite(rowIndex: number, colIndex: number): void {
        throw Error("Not implemented yet.");
    }

    enqueueTheRightCellIsStillInTheGridAndWhite(rowIndex: number, colIndex: number): void {
        throw Error("Not implemented yet.");
    }

    enqueueTheBottomCellIsStillInTheGridAndWhite(rowIndex: number, colIndex: number): void {
        throw Error("Not implemented yet.");
    }

}