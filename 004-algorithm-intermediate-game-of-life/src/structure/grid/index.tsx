import Row from "../row";
import Cell from "../cell";

/**
 * Our grid is a square meaning that the width = height.
 */
export default class Grid {

    private readonly rows: Row[];
    private lastIndex: number;

    constructor(rows: Row[]) {
        this.rows = rows;
        this.lastIndex = this.rows.length - 1;
    }

    add(row: Row): void {
        throw new Error("Not implemented yet.");
    }

    getRows(): Row[] {
        throw new Error("Not implemented yet.");
    }

    isInTheGrid(rowIndex: number, colIndex: number): boolean {
        throw new Error("Not implemented yet.");
    }

    /**
     * Considering that our gird is 2-dimensions based, a cell has 3 to 8 neighbors (dead or alive).
     * Quantum physics excluded : our cell can either be dead or alive, not both at the same time (ha ha ha ha ha, #privateNerdJoke).
     */
    numberOfLivingNeighbors(cell: Cell): number {
        throw new Error("Not implemented yet.");
    }

    /**
     * Any live cell with fewer than two living neighbours dies, as if caused by underpopulation.
     */
    static shouldDieByUnderpopulation(cell: Cell, numberOfLivingNeighbors: number): boolean {
        throw new Error("Not implemented yet.");
    }

    /**
     * Any live cell with two or three living neighbours lives on to the next generation.
     */
    static shouldContinueToLive(cell: Cell, numberOfLivingNeighbors: number): boolean {
        throw new Error("Not implemented yet.");
    }

    /**
     * Any live cell with more than three living neighbours dies, as if by overcrowding.
     */
    static shouldDieByOvercrowding(cell: Cell, numberOfLivingNeighbors: number): boolean {
        throw new Error("Not implemented yet.");
    }

    /**
     * Any dead cell with exactly three living neighbours becomes a live cell.
     */
    static shouldEmergeFromLivingNeighbors(cell: Cell, numberOfLivingNeighbors: number): boolean {
        throw new Error("Not implemented yet.");
    }

    static determineNextGeneration(cell: Cell, numberOfLivingNeighbors: number) {
        throw new Error("Not implemented yet.");
    }

    next(): Grid {
        throw new Error("Not implemented yet.");
    }

}