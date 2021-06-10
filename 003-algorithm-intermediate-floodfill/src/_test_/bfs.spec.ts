import Cell from "../structure/cell";
import Queue from "../structure/data/queue";
import {generateThreeByThree} from "./tools";
import BreadthFirstSearchFiller from "../algo/bfs";

describe("Technical requirements to fulfill in order to implement Breadth-First-Search algorithm.", () => {

    test("01 - Should add the left cell to the queue when this cell is still in the grid and white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "white", "white", "grey",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheLeftCellIsStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeFalsy();
        const actualAddedCell: Cell = queue.dequeue();
        expect(actualAddedCell).toStrictEqual(new Cell("white", 1, 0));

    });

    test("02 - Should not add the left cell to the queue when this cell is still in the grid but not white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheLeftCellIsStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeTruthy();

    });

    test("03 - Should not add the left cell to the queue when this cell is not in the grid anymore.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "white", "grey", "grey",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheLeftCellIsStillInTheGridAndWhite(1, 0);

        // [Assert]
        expect(queue.isEmpty()).toBeTruthy();

    });

    test("04 - Should add the top cell to the queue when this cell is still in the grid and white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "white", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheTopCellIsStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeFalsy();
        const actualAddedCell: Cell = queue.dequeue();
        expect(actualAddedCell).toStrictEqual(new Cell("white", 0, 1));

    });

    test("05 - Should not add the top cell to the queue when this cell is still in the grid but not white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheTopCellIsStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeTruthy();

    });

    test("06 - Should not add the top cell to the queue when this cell is not in the grid anymore.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "white", "white",
            "grey", "grey", "grey",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheTopCellIsStillInTheGridAndWhite(0, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeTruthy();

    });

    test("07 - Should add the right cell to the queue when this cell is still in the grid and white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "white",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheRightCellIsStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeFalsy();
        const actualAddedCell: Cell = queue.dequeue();
        expect(actualAddedCell).toStrictEqual(new Cell("white", 1, 2));

    });

    test("08 - Should not add the right cell to the queue when this cell is still in the grid but not white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheRightCellIsStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeTruthy();

    });

    test("09 - Should not add the right cell to the queue when this cell is not in the grid anymore.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "grey", "white",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheRightCellIsStillInTheGridAndWhite(1, 2);

        // [Assert]
        expect(queue.isEmpty()).toBeTruthy();

    });


    test("10 - Should add the bottom cell to the queue when this cell is still in the grid and white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "white", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheBottomCellIsStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeFalsy();
        const actualAddedCell: Cell = queue.dequeue();
        expect(actualAddedCell).toStrictEqual(new Cell("white", 2, 1));

    });

    test("11 - Should not add the bottom cell to the queue when this cell is still in the grid but not white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheBottomCellIsStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeTruthy();

    });

    test("12 - Should not add the bottom cell to the queue when this cell is not in the grid anymore.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "grey", "grey",
            "white", "white", "white"
        ]);
        const queue: Queue<Cell> = new Queue();
        const filler: BreadthFirstSearchFiller = new BreadthFirstSearchFiller(rows, queue);

        // [Act]
        filler.enqueueTheBottomCellIsStillInTheGridAndWhite(2, 1);

        // [Assert]
        expect(queue.isEmpty()).toBeTruthy();

    });

});