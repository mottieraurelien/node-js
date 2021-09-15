export default function fillUsingBfs(rows: string[][], rowIndex: number, colIndex: number): string[][] {

    // Checks if the current grid is empty or not :
    if (rows.length === 0) return [];

    // Clones the original array so that React renders the new array after filling our cells :
    const newRows = [...rows];

    // Gets the dimensions of the grid since it could be useful to not cross them in our algo later on :
    const lastRowIndex = newRows.length - 1;
    const lastColIndex = newRows[0].length - 1;

    // TODO : Here starts the implementation of BFS.

    // Hint 01 : implementing BFS means using a queue (you have one ready-to-use in Queue.tsx).

    // Hint 02 : how to fill a cell ?
    newRows[rowIndex][colIndex] = "light-blue";

    // TODO : Here ends the implementation of BFS.

    return newRows;

}