import {generateThreeByThree} from "./tools";
import Cell from "../structure/cell";
import DepthFirstSearchFiller from "../algo/dfs";

describe("Technical requirements to fulfill in order to implement the Game Of Life, first part.", () => {

    test("01 - Should return the left cell when this cell is still in the grid and white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "white", "white", "grey",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualLeftCell: Cell | undefined = filler.getTheLeftCellIfStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(actualLeftCell).toStrictEqual(new Cell("white", 1, 0));

    });

    test("02 - Should return undefined when the left cell is still in the grid but not white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualLeftCell: Cell | undefined = filler.getTheLeftCellIfStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(actualLeftCell).toBeUndefined();

    });

    test("03 - Should return undefined when the left cell is not in the grid anymore.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "white", "grey", "grey",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualLeftCell: Cell | undefined = filler.getTheLeftCellIfStillInTheGridAndWhite(1, 0);

        // [Assert]
        expect(actualLeftCell).toBeUndefined();

    });

    test("04 - Should return the top cell when this cell is still in the grid and white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "white", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualTopCell: Cell | undefined = filler.getTheTopCellIfStillInTheGridAndWhite(1, 1);

        // [Assert]

        expect(actualTopCell).toStrictEqual(new Cell("white", 0, 1));

    });

    test("05 - Should return undefined when the top cell is still in the grid but not white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualTopCell: Cell | undefined = filler.getTheTopCellIfStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(actualTopCell).toBeUndefined();

    });

    test("06 - Should return undefined when the top cell is not in the grid anymore.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "white", "white",
            "grey", "grey", "grey",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualTopCell: Cell | undefined = filler.getTheTopCellIfStillInTheGridAndWhite(0, 1);

        // [Assert]
        expect(actualTopCell).toBeUndefined();

    });

    test("07 - Should return the right cell when this cell is still in the grid and white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "white",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualRightCell: Cell | undefined = filler.getTheRightCellIfStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(actualRightCell).toStrictEqual(new Cell("white", 1, 2));

    });

    test("08 - Should return undefined when the right cell is still in the grid but not white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualRightCell: Cell | undefined = filler.getTheRightCellIfStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(actualRightCell).toBeUndefined();

    });

    test("09 - Should return undefined when the right cell is not in the grid anymore.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "grey", "white",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualRightCell: Cell | undefined = filler.getTheRightCellIfStillInTheGridAndWhite(1, 2);

        // [Assert]
        expect(actualRightCell).toBeUndefined();

    });


    test("10 - Should return the bottom cell when this cell is still in the grid and white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "white", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualBottomCell: Cell | undefined = filler.getTheBottomCellIfStillInTheGridAndWhite(1, 1);

        // [Assert];
        expect(actualBottomCell).toStrictEqual(new Cell("white", 2, 1));

    });

    test("11 - Should return undefined when the bottom cell is still in the grid but not white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "white", "grey",
            "white", "grey", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualBottomCell: Cell | undefined = filler.getTheBottomCellIfStillInTheGridAndWhite(1, 1);

        // [Assert]
        expect(actualBottomCell).toBeUndefined();

    });

    test("12 - Should return undefined when the bottom cell is not in the grid anymore.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "white", "grey", "white",
            "grey", "grey", "grey",
            "white", "white", "white"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);

        // [Act]
        const actualBottomCell: Cell | undefined = filler.getTheBottomCellIfStillInTheGridAndWhite(2, 1);

        // [Assert]
        expect(actualBottomCell).toBeUndefined();

    });

    test("13 - Should only fill the cell when it has not any neighbors to fill.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "grey", "grey", "grey",
            "grey", "white", "grey",
            "grey", "grey", "grey"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);
        const root: Cell = new Cell("white", 1, 1);

        // [Act]
        const actualRows: string[][] = filler.fillFrom(root);

        // [Assert]
        const expectedRows: string[][] = [
            ["grey", "grey", "grey"],
            ["grey", "light-blue", "grey"],
            ["grey", "grey", "grey"]
        ]
        expect(actualRows).toStrictEqual(expectedRows);

    });

    test("14 - Should fill the cell and all its neighbours when they are white.", () => {

        // [Arrange]
        const rows: string[][] = generateThreeByThree([
            "grey", "white", "grey",
            "white", "white", "white",
            "grey", "white", "grey"
        ]);
        const filler: DepthFirstSearchFiller = new DepthFirstSearchFiller(rows);
        const root: Cell = new Cell("white", 1, 1);

        // [Act]
        const actualRows: string[][] = filler.fillFrom(root);

        // [Assert]
        const expectedRows: string[][] = [
            ["grey", "light-blue", "grey"],
            ["light-blue", "light-blue", "light-blue"],
            ["grey", "light-blue", "grey"]
        ]
        expect(actualRows).toStrictEqual(expectedRows);

    });

});