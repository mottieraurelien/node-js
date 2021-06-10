import Grid from "../structure/grid";
import Cell from "../structure/cell";
import {generateThreeByThreeWithDeadCellInTheMiddle} from "./common";

describe("Technical requirements to fulfill in order to implement the Game Of Life, third part.", () => {

    /**
     * All scenarios are based on a 3x3 grid (3 rows, 3 columns, 0-index based).
     * The current cell is always the one in the middle (row index : 1, col index : 1).
     * The current cell can be alive or dead, it does not matter since we count its neighbors only (excluding itself).
     */

    test("01 - Should return one when there is only one living neighbor.", () => {

        // [Arrange]
        const grid: Grid = generateThreeByThreeWithDeadCellInTheMiddle([true, false, false, false, false, false, false, false]);
        const cell: Cell = grid.getRows()[1].getCells()[1];

        // [Act]
        const actual: number = grid.numberOfLivingNeighbors(cell);

        // [Assert]
        expect(actual).toBe(1);

    });

    test("02 - Should return two when there are only two living neighbors.", () => {

        // [Arrange]
        const grid: Grid = generateThreeByThreeWithDeadCellInTheMiddle([true, true, false, false, false, false, false, false]);
        const cell: Cell = grid.getRows()[1].getCells()[1];

        // [Act]
        const actual: number = grid.numberOfLivingNeighbors(cell);

        // [Assert]
        expect(actual).toBe(2);

    });

    test("03 - Should return three when there are only three living neighbors.", () => {

        // [Arrange]
        const grid: Grid = generateThreeByThreeWithDeadCellInTheMiddle([true, true, true, false, false, false, false, false]);
        const cell: Cell = grid.getRows()[1].getCells()[1];

        // [Act]
        const actual: number = grid.numberOfLivingNeighbors(cell);

        // [Assert]
        expect(actual).toBe(3);

    });

    test("04 - Should return four when there are only three living neighbors.", () => {

        // [Arrange]
        const grid: Grid = generateThreeByThreeWithDeadCellInTheMiddle([true, true, true, true, false, false, false, false]);
        const cell: Cell = grid.getRows()[1].getCells()[1];

        // [Act]
        const actual: number = grid.numberOfLivingNeighbors(cell);

        // [Assert]
        expect(actual).toBe(4);

    });

    test("05 - Should return five when there are only five living neighbors.", () => {

        // [Arrange]
        const grid: Grid = generateThreeByThreeWithDeadCellInTheMiddle([true, true, true, true, true, false, false, false]);
        const cell: Cell = grid.getRows()[1].getCells()[1];

        // [Act]
        const actual: number = grid.numberOfLivingNeighbors(cell);

        // [Assert]
        expect(actual).toBe(5);

    });

    test("06 - Should return six when there are only six living neighbors.", () => {

        // [Arrange]
        const grid: Grid = generateThreeByThreeWithDeadCellInTheMiddle([true, true, true, true, true, true, false, false]);
        const cell: Cell = grid.getRows()[1].getCells()[1];

        // [Act]
        const actual: number = grid.numberOfLivingNeighbors(cell);

        // [Assert]
        expect(actual).toBe(6);

    });

    test("07 - Should return seven when there are seven six living neighbors.", () => {

        // [Arrange]
        const grid: Grid = generateThreeByThreeWithDeadCellInTheMiddle([true, true, true, true, true, true, true, false]);
        const cell: Cell = grid.getRows()[1].getCells()[1];

        // [Act]
        const actual: number = grid.numberOfLivingNeighbors(cell);

        // [Assert]
        expect(actual).toBe(7);

    });

    test("07 - Should return eight when all neighbors are living !.", () => {

        // [Arrange]
        const grid: Grid = generateThreeByThreeWithDeadCellInTheMiddle([true, true, true, true, true, true, true, true]);
        const cell: Cell = grid.getRows()[1].getCells()[1];

        // [Act]
        const actual: number = grid.numberOfLivingNeighbors(cell);

        // [Assert]
        expect(actual).toBe(8);

    });

});