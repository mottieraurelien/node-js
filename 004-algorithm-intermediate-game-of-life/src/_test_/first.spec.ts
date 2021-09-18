import Row from "../structure/row";
import Grid from "../structure/grid";

describe("Technical requirements to fulfill in order to implement the Game Of Life, first part.", () => {

    test("01 - Should increment the index to zero when adding the first row to the empty grid.", () => {

        // [Arrange]
        const grid: Grid = new Grid([]);
        const row: Row = new Row([], 0);

        // [Act]
        grid.add(row);

        // [Assert]
        const anArrayThatNowContainsTheRow: Row[] = [row];
        expect(grid.getRows()).toStrictEqual(anArrayThatNowContainsTheRow);

    });

    test("02 - Should increment the index to one when adding the second row to the empty grid.", () => {

        // [Arrange]
        const firstRow: Row = new Row([], 0);
        const grid: Grid = new Grid([firstRow]);
        const secondRow: Row = new Row([], 1);

        // [Act]
        grid.add(secondRow);

        // [Assert]
        const anArrayThatNowContainsTheRow: Row[] = [firstRow, secondRow];
        expect(grid.getRows()).toStrictEqual(anArrayThatNowContainsTheRow);

    });

});