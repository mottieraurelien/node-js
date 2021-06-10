import Cell from "../cell";

export default class Row {

    private readonly cells: Cell[];
    private readonly rowIndex: number;

    constructor(cells: Cell[], rowIndex: number) {
        this.cells = cells;
        this.rowIndex = rowIndex;
    }

    add(cell: Cell): void {
        this.cells.push(cell);
    }

    getCells(): Cell[] {
        return this.cells;
    }

    getRowIndex(): number {
        return this.rowIndex;
    }

}