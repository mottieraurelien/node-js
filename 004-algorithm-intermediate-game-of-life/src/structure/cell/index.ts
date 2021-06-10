export default class Cell {

    private readonly alive: boolean;
    private readonly rowIndex: number;
    private readonly colIndex: number;

    constructor(alive: boolean, rowIndex: number, colIndex: number) {
        this.alive = alive;
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
    }

    isAlive(): boolean {
        return this.alive;
    }

    isDead(): boolean {
        return !this.alive;
    }

    getRowIndex(): number {
        return this.rowIndex;
    }

    getColIndex(): number {
        return this.colIndex;
    }

}