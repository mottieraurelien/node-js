import {generateFiveByFive} from "./tools";
import BreadthFirstSearchFiller from "../algo/bfs";
import DepthFirstSearchFiller from "../algo/dfs";
import Cell from "../structure/cell";
import Filler from "../algo/filler";
import Queue from "../structure/data/queue";

/**
 * Our input will be identical to test both BFS and DFS approaches.
 */
const inputRows: string[][] = generateFiveByFive([
    "white", "white", "grey", "white", "white",
    "grey", "white", "white", "white", "grey",
    "grey", "grey", "white", "grey", "grey",
    "grey", "white", "white", "white", "grey",
    "white", "white", "grey", "white", "white"
]);

/**
 * Since both approaches must lead to the same result, we will use the same expected array.
 */
const expectedRows: string[][] = [
    ["light-blue", "light-blue", "grey", "light-blue", "light-blue"],
    ["grey", "light-blue", "light-blue", "light-blue", "grey"],
    ["grey", "grey", "light-blue", "grey", "grey"],
    ["grey", "light-blue", "light-blue", "light-blue", "grey"],
    ["light-blue", "light-blue", "grey", "light-blue", "light-blue"]
];

/**
 * We will imagine that the user clicked in the middle of the grid.
 */
const cellInTheMiddle: Cell = new Cell("white", 2, 2);

describe("Technical requirements to fulfill in order to implement the Floodfill exercise.", () => {

    test("01 - Should fill the right area when using the BFS approach.", () => {

        // [Arrange]
        const filler: Filler = new BreadthFirstSearchFiller(inputRows, new Queue());

        // [Act]
        const actualRows: string[][] = filler.fillFrom(cellInTheMiddle);

        // [Assert]
        expect(actualRows).toStrictEqual(expectedRows);

    });

    test("02 - Should fill the right area when using the DFS approach.", () => {

        // [Arrange]
        const filler: Filler = new DepthFirstSearchFiller(inputRows);

        // [Act]
        const actualRows: string[][] = filler.fillFrom(cellInTheMiddle);

        // [Assert]
        expect(actualRows).toStrictEqual(expectedRows);

    });

});