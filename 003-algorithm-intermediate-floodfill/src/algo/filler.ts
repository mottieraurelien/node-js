import Cell from "../structure/cell";

export default abstract class Filler {

    protected readonly rows: string[][];
    protected readonly lastRowIndex: number;
    protected readonly lastColIndex: number;

    constructor(rows: string[][]) {
        if (!rows || rows.length === 0) throw Error("The solution requires at least one row.");
        this.rows = [...rows];
        this.lastRowIndex = this.rows.length - 1;
        this.lastColIndex = this.rows[0].length - 1;
    }

    abstract fillFrom(cell: Cell): string[][];

}