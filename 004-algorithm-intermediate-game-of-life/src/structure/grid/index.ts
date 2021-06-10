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
        this.rows.push(row);
        this.lastIndex++;
    }

    getRows(): Row[] {
        return this.rows;
    }

    isInTheGrid(rowIndex: number, colIndex: number): boolean {
        return rowIndex >= 0 && rowIndex <= this.lastIndex
            && colIndex >= 0 && colIndex <= this.lastIndex;
    }

    /**
     * Considering that our gird is 2-dimensions based, a cell has 3 to 8 neighbors (dead or alive).
     * Quantum physics excluded : our cell can either be dead or alive, not both at the same time (ha ha ha ha ha, #privateNerdJoke).
     */
    numberOfLivingNeighbors(cell: Cell): number {

        const rowIndex: number = cell.getRowIndex();
        const colIndex: number = cell.getColIndex();

        // We need to look over its eight neighbors to count the ones that are alive :
        let totalNumberOfLivingNeighbors: number = 0;

        // Top Left neighbor :
        if (this.isInTheGrid(rowIndex - 1, colIndex - 1)) {
            const neighbor: Cell = this.rows[rowIndex - 1].getCells()[colIndex - 1];
            if (neighbor && neighbor.isAlive()) totalNumberOfLivingNeighbors += 1;
        }

        // Top neighbor :
        if (this.isInTheGrid(rowIndex - 1, colIndex)) {
            const neighbor: Cell = this.rows[rowIndex - 1].getCells()[colIndex];
            if (neighbor && neighbor.isAlive()) totalNumberOfLivingNeighbors += 1;
        }

        // Top Right neighbor :
        if (this.isInTheGrid(rowIndex - 1, colIndex + 1)) {
            const neighbor: Cell = this.rows[rowIndex - 1].getCells()[colIndex + 1];
            if (neighbor && neighbor.isAlive()) totalNumberOfLivingNeighbors += 1;
        }

        // Right neighbor :
        if (this.isInTheGrid(rowIndex, colIndex + 1)) {
            const neighbor: Cell = this.rows[rowIndex].getCells()[colIndex + 1];
            if (neighbor && neighbor.isAlive()) totalNumberOfLivingNeighbors += 1;
        }

        // Bottom Right neighbor :
        if (this.isInTheGrid(rowIndex + 1, colIndex + 1)) {
            const neighbor: Cell = this.rows[rowIndex + 1].getCells()[colIndex + 1];
            if (neighbor && neighbor.isAlive()) totalNumberOfLivingNeighbors += 1;
        }

        // Bottom neighbor :
        if (this.isInTheGrid(rowIndex + 1, colIndex)) {
            const neighbor: Cell = this.rows[rowIndex + 1].getCells()[colIndex];
            if (neighbor && neighbor.isAlive()) totalNumberOfLivingNeighbors += 1;
        }

        // Bottom Left neighbor :
        if (this.isInTheGrid(rowIndex + 1, colIndex - 1)) {
            const neighbor: Cell = this.rows[rowIndex + 1].getCells()[colIndex - 1];
            if (neighbor && neighbor.isAlive()) totalNumberOfLivingNeighbors += 1;
        }

        // Left neighbor :
        if (this.isInTheGrid(rowIndex, colIndex - 1)) {
            const neighbor: Cell = this.rows[rowIndex].getCells()[colIndex - 1];
            if (neighbor && neighbor.isAlive()) totalNumberOfLivingNeighbors += 1;
        }

        return totalNumberOfLivingNeighbors;
    }

    /**
     * Any live cell with fewer than two living neighbours dies, as if caused by underpopulation.
     */
    static shouldDieByUnderpopulation(cell: Cell, numberOfLivingNeighbors: number): boolean {
        return cell.isAlive() && numberOfLivingNeighbors < 2;
    }

    /**
     * Any live cell with two or three living neighbours lives on to the next generation.
     */
    static shouldContinueToLive(cell: Cell, numberOfLivingNeighbors: number): boolean {
        return cell.isAlive() && (numberOfLivingNeighbors === 2 || numberOfLivingNeighbors === 3);
    }

    /**
     * Any live cell with more than three living neighbours dies, as if by overcrowding.
     */
    static shouldDieByOvercrowding(cell: Cell, numberOfLivingNeighbors: number): boolean {
        return cell.isAlive() && numberOfLivingNeighbors > 3;
    }

    /**
     * Any dead cell with exactly three living neighbours becomes a live cell.
     */
    static shouldEmergeFromLivingNeighbors(cell: Cell, numberOfLivingNeighbors: number): boolean {
        return cell.isDead() && numberOfLivingNeighbors === 3;
    }

    static determineNextGeneration(cell: Cell, numberOfLivingNeighbors: number) {

        if (Grid.shouldDieByUnderpopulation(cell, numberOfLivingNeighbors))
            return new Cell(false, cell.getRowIndex(), cell.getColIndex());

        if (Grid.shouldContinueToLive(cell, numberOfLivingNeighbors))
            return new Cell(true, cell.getRowIndex(), cell.getColIndex());

        if (Grid.shouldDieByOvercrowding(cell, numberOfLivingNeighbors))
            return new Cell(false, cell.getRowIndex(), cell.getColIndex());

        if (Grid.shouldEmergeFromLivingNeighbors(cell, numberOfLivingNeighbors))
            return new Cell(true, cell.getRowIndex(), cell.getColIndex());

        return new Cell(false, cell.getRowIndex(), cell.getColIndex());

    }

    next(): Grid {

        // We must not update the current grid since it will cause issues when processing the second cell,
        // considering that the first may have changed... Plus React will want a new instance of Grid to re-render.
        const newGrid: Grid = new Grid([]);

        this.rows.forEach((row: Row) => {

            const newRow: Row = new Row([], row.getRowIndex());

            row.getCells().forEach((cell: Cell) => {

                // Number of living neighbors :
                const numberOfLivingNeighbors: number = this.numberOfLivingNeighbors(cell);

                // Next cell generation depending on its current state and its neighbors :
                const newCell: Cell = Grid.determineNextGeneration(cell, numberOfLivingNeighbors);

                newRow.add(newCell);

            })

            newGrid.add(newRow);

        });

        return newGrid;
    }

}