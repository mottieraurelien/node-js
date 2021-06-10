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

        // Puts the first cell in the queue cause it's white since we could click on it :
        this.queue.enqueue(root);

        // As long as we have cells in our queue :
        while (this.queue.isNotEmpty()) {

            // Removes the node from the queue (first position to ensure O(1)) to process it :
            const cell: Cell = this.queue.dequeue();
            const cellRowIndex = cell.getRowIndex();
            const cellColIndex = cell.getColIndex();

            // Updates the background color of this cell :
            this.rows[cellRowIndex][cellColIndex] = "light-blue";

            // Adds the cell that is on the left side of the current one to the queue if we can fill it :
            this.enqueueTheLeftCellIsStillInTheGridAndWhite(cellRowIndex, cellColIndex);

            // Adds the cell that is on top of the current one to the queue if we can fill it :
            this.enqueueTheTopCellIsStillInTheGridAndWhite(cellRowIndex, cellColIndex);

            // Adds the cell that is on the right side of the current one to the queue if we can fill it :
            this.enqueueTheRightCellIsStillInTheGridAndWhite(cellRowIndex, cellColIndex);

            // Adds the cell that is below the current one to the queue if we can fill it :
            this.enqueueTheBottomCellIsStillInTheGridAndWhite(cellRowIndex, cellColIndex);

        }

        return this.rows;

    }

    enqueueTheLeftCellIsStillInTheGridAndWhite(rowIndex: number, colIndex: number): void {

        const leftCellRowIndex: number = rowIndex;
        const leftCellColIndex: number = colIndex - 1;

        if (leftCellRowIndex >= 0 && this.rows[leftCellRowIndex][leftCellColIndex] === "white") {
            const leftCell: Cell = new Cell(this.rows[leftCellRowIndex][leftCellColIndex], leftCellRowIndex, leftCellColIndex);
            this.queue.enqueue(leftCell);
        }

    }

    enqueueTheTopCellIsStillInTheGridAndWhite(rowIndex: number, colIndex: number): void {

        const topCellRowIndex: number = rowIndex - 1;
        const topCellColIndex: number = colIndex;

        if (topCellRowIndex >= 0 && this.rows[topCellRowIndex][topCellColIndex] === "white") {
            const topCell: Cell = new Cell(this.rows[topCellRowIndex][topCellColIndex], topCellRowIndex, topCellColIndex);
            this.queue.enqueue(topCell);
        }

    }

    enqueueTheRightCellIsStillInTheGridAndWhite(rowIndex: number, colIndex: number): void {

        const rightCellRowIndex: number = rowIndex;
        const rightCellColIndex: number = colIndex + 1;

        if (rightCellRowIndex <= this.lastColIndex && this.rows[rightCellRowIndex][rightCellColIndex] === "white") {
            const rightCell: Cell = new Cell(this.rows[rightCellRowIndex][rightCellColIndex], rightCellRowIndex, rightCellColIndex);
            this.queue.enqueue(rightCell);
        }

    }

    enqueueTheBottomCellIsStillInTheGridAndWhite(rowIndex: number, colIndex: number): void {

        const bottomCellRowIndex: number = rowIndex + 1;
        const bottomCellColIndex: number = colIndex;

        if (bottomCellRowIndex <= this.lastRowIndex && this.rows[bottomCellRowIndex][bottomCellColIndex] === "white") {
            const bottomCell: Cell = new Cell(this.rows[bottomCellRowIndex][bottomCellColIndex], bottomCellRowIndex, bottomCellColIndex);
            this.queue.enqueue(bottomCell);
        }

    }

}