import Row from "../structure/row";
import Grid from "../structure/grid";

describe("Technical requirements to fulfill in order to implement the Game Of Life, second part.", () => {

    test("01 - Should return false when the row index is lower than zero.", () => {

        // [Arrange]
        const firstRow: Row = new Row([], 0);
        const secondRow: Row = new Row([], 1);
        const thirdRow: Row = new Row([], 2);
        const grid: Grid = new Grid([firstRow, secondRow, thirdRow]);

        // [Act]
        const actual: boolean = grid.isInTheGrid(-1, 0);

        // [Assert]
        expect(actual).toBeFalsy();

    });

    test("02 - Should return false when the row index is greater than the last index.", () => {

        // [Arrange]
        const firstRow: Row = new Row([], 0);
        const secondRow: Row = new Row([], 1);
        const thirdRow: Row = new Row([], 2);
        const grid: Grid = new Grid([firstRow, secondRow, thirdRow]);

        // [Act]
        const actual: boolean = grid.isInTheGrid(3, 0);

        // [Assert]
        expect(actual).toBeFalsy();

    });

    test("03 - Should return false when the column index is lower than zero.", () => {

        // [Arrange]
        const firstRow: Row = new Row([], 0);
        const secondRow: Row = new Row([], 1);
        const thirdRow: Row = new Row([], 2);
        const grid: Grid = new Grid([firstRow, secondRow, thirdRow]);

        // [Act]
        const actual: boolean = grid.isInTheGrid(0, -1);

        // [Assert]
        expect(actual).toBeFalsy();

    });

    test("04 - Should return false when the row index is greater than the last index.", () => {

        // [Arrange]
        const firstRow: Row = new Row([], 0);
        const secondRow: Row = new Row([], 1);
        const thirdRow: Row = new Row([], 2);
        const grid: Grid = new Grid([firstRow, secondRow, thirdRow]);

        // [Act]
        const actual: boolean = grid.isInTheGrid(0, 3);

        // [Assert]
        expect(actual).toBeFalsy();

    });

    test("05 - Should return true when both indexes fits.", () => {

        // [Arrange]
        const firstRow: Row = new Row([], 0);
        const secondRow: Row = new Row([], 1);
        const thirdRow: Row = new Row([], 2);
        const grid: Grid = new Grid([firstRow, secondRow, thirdRow]);

        // [Act / Assert]
        expect(grid.isInTheGrid(0, 0)).toBeTruthy();
        expect(grid.isInTheGrid(0, 1)).toBeTruthy();
        expect(grid.isInTheGrid(0, 2)).toBeTruthy();
        expect(grid.isInTheGrid(1, 0)).toBeTruthy();
        expect(grid.isInTheGrid(1, 1)).toBeTruthy();
        expect(grid.isInTheGrid(1, 2)).toBeTruthy();
        expect(grid.isInTheGrid(2, 0)).toBeTruthy();
        expect(grid.isInTheGrid(2, 1)).toBeTruthy();
        expect(grid.isInTheGrid(2, 2)).toBeTruthy();

    });

});