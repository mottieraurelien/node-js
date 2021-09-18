import Grid from "../structure/grid";
import Row from "../structure/row";
import Cell from "../structure/cell";

export function generateThreeByThreeWithDeadCellInTheMiddle([...states]: boolean[]): Grid {
    const firstRow: Row = new Row([new Cell(states[0], 0, 0), new Cell(states[1], 0, 1), new Cell(states[2], 0, 2)], 0);
    const secondRow: Row = new Row([new Cell(states[3], 1, 0), new Cell(false, 1, 1), new Cell(states[4], 1, 2)], 1);
    const thirdRow: Row = new Row([new Cell(states[5], 2, 0), new Cell(states[6], 2, 1), new Cell(states[7], 2, 2)], 2);
    const rows: Row[] = [firstRow, secondRow, thirdRow];
    return new Grid(rows);
}

export function generateFiveByFive([...states]: boolean[]): Grid {
    const firstRow: Row = new Row([new Cell(states[0], 0, 0), new Cell(states[1], 0, 1), new Cell(states[2], 0, 2), new Cell(states[3], 0, 3), new Cell(states[4], 0, 4)], 0);
    const secondRow: Row = new Row([new Cell(states[5], 1, 0), new Cell(states[6], 1, 1), new Cell(states[7], 1, 2), new Cell(states[8], 1, 3), new Cell(states[9], 1, 4)], 1);
    const thirdRow: Row = new Row([new Cell(states[10], 2, 0), new Cell(states[11], 2, 1), new Cell(states[12], 2, 2), new Cell(states[13], 2, 3), new Cell(states[14], 2, 4)], 2);
    const fourthRow: Row = new Row([new Cell(states[15], 3, 0), new Cell(states[16], 3, 1), new Cell(states[17], 3, 2), new Cell(states[18], 3, 3), new Cell(states[19], 3, 4)], 3);
    const fifthRow: Row = new Row([new Cell(states[20], 4, 0), new Cell(states[21], 4, 1), new Cell(states[22], 4, 2), new Cell(states[23], 4, 3), new Cell(states[24], 4, 4)], 4);
    const rows: Row[] = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];
    return new Grid(rows);
}

export function assertFiveByFive(grid: Grid, actualGrid: Grid, [...expectedStates]: boolean[]) {

    // First, we check that their instance is different :
    expect(actualGrid).not.toBe(grid);

    // Then we check the content of the actual grid :
    for (let i: number = 0; i < 5; i++) {
        const actualRow: Row = actualGrid.getRows()[i];
        for (let j: number = 0; j < 5; j++) {
            const actualCell: Cell = actualRow.getCells()[j];
            const expected: boolean = expectedStates[i * 5 + j];
            expect(actualCell.isAlive()).toStrictEqual(expected);
        }
    }

}