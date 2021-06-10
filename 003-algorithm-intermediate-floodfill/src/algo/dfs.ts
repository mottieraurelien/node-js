import Filler from "./filler";
import Cell from "../structure/cell";

export default class DepthFirstSearchFiller extends Filler {

    fillFrom(root: Cell): string[][] {

        this.fillRecursively(root);

        return this.rows;

    }

    fillRecursively(cell: Cell | undefined): void {

        if (cell === undefined) return;

        const rowIndex: number = cell.getRowIndex();
        const colIndex: number = cell.getColIndex();

        // Fills the current cell :
        if (cell.getValue() === "white") this.rows[rowIndex][colIndex] = "light-blue";

        // Takes a look at the neighbors if they need to be filled too :
        this.fillRecursively(this.getTheLeftCellIfStillInTheGridAndWhite(rowIndex, colIndex));
        this.fillRecursively(this.getTheTopCellIfStillInTheGridAndWhite(rowIndex, colIndex));
        this.fillRecursively(this.getTheRightCellIfStillInTheGridAndWhite(rowIndex, colIndex));
        this.fillRecursively(this.getTheBottomCellIfStillInTheGridAndWhite(rowIndex, colIndex));

    }

    getTheLeftCellIfStillInTheGridAndWhite(rowIndex: number, colIndex: number): Cell | undefined {

        const leftCellRowIndex: number = rowIndex;
        const leftCellColIndex: number = colIndex - 1;

        if (leftCellRowIndex >= 0 && this.rows[leftCellRowIndex][leftCellColIndex] === "white") {
            return new Cell(this.rows[leftCellRowIndex][leftCellColIndex], leftCellRowIndex, leftCellColIndex);
        }

        return undefined;

    }

    getTheTopCellIfStillInTheGridAndWhite(rowIndex: number, colIndex: number): Cell | undefined {

        const topCellRowIndex: number = rowIndex - 1;
        const topCellColIndex: number = colIndex;

        if (topCellRowIndex >= 0 && this.rows[topCellRowIndex][topCellColIndex] === "white") {
            return new Cell(this.rows[topCellRowIndex][topCellColIndex], topCellRowIndex, topCellColIndex);
        }

        return undefined;

    }

    getTheRightCellIfStillInTheGridAndWhite(rowIndex: number, colIndex: number): Cell | undefined {

        const rightCellRowIndex: number = rowIndex;
        const rightCellColIndex: number = colIndex + 1;

        if (rightCellRowIndex <= this.lastColIndex && this.rows[rightCellRowIndex][rightCellColIndex] === "white") {
            return new Cell(this.rows[rightCellRowIndex][rightCellColIndex], rightCellRowIndex, rightCellColIndex);
        }

        return undefined;

    }

    getTheBottomCellIfStillInTheGridAndWhite(rowIndex: number, colIndex: number): Cell | undefined {

        const bottomCellRowIndex: number = rowIndex + 1;
        const bottomCellColIndex: number = colIndex;

        if (bottomCellRowIndex <= this.lastRowIndex && this.rows[bottomCellRowIndex][bottomCellColIndex] === "white") {
            return new Cell(this.rows[bottomCellRowIndex][bottomCellColIndex], bottomCellRowIndex, bottomCellColIndex);
        }

        return undefined;

    }

}