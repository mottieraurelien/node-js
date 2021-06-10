export default class Cell {

    private readonly value: string;
    private readonly rowIndex: number;
    private readonly colIndex: number;

    constructor(value: string, rowIndex: number, colIndex: number) {
        this.value = value;
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
    }

    getValue(): string {
        return this.value;
    }

    getRowIndex(): number {
        return this.rowIndex;
    }

    getColIndex(): number {
        return this.colIndex;
    }

}