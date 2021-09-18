import Grid from "../structure/grid";
import Cell from "../structure/cell";

describe("Technical requirements to fulfill in order to implement the Game Of Life, fourth part.", () => {

    test("01 - Should die by underpopulation when the cell is alive with fewer than two living neighbours.", () => {

        // [Arrange]
        const livingCell: Cell = new Cell(true, 0, 0);
        const deadCell: Cell = new Cell(false, 0, 0);

        // [Assert / Act] When the cell is alive :
        expect(Grid.shouldDieByUnderpopulation(livingCell, 0)).toBeTruthy();
        expect(Grid.shouldDieByUnderpopulation(livingCell, 1)).toBeTruthy();
        expect(Grid.shouldDieByUnderpopulation(livingCell, 2)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(livingCell, 3)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(livingCell, 4)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(livingCell, 5)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(livingCell, 6)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(livingCell, 7)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(livingCell, 8)).toBeFalsy();

        // [Assert / Act] When the cell is dead :
        expect(Grid.shouldDieByUnderpopulation(deadCell, 0)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(deadCell, 1)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(deadCell, 2)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(deadCell, 3)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(deadCell, 4)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(deadCell, 5)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(deadCell, 6)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(deadCell, 7)).toBeFalsy();
        expect(Grid.shouldDieByUnderpopulation(deadCell, 8)).toBeFalsy();

    });

    test("02 - Should continue to live when the cell is alive with exactly with two or three living neighbours.", () => {

        // [Arrange]
        const livingCell: Cell = new Cell(true, 0, 0);
        const deadCell: Cell = new Cell(false, 0, 0);

        // [Assert / Act] When the cell is alive :
        expect(Grid.shouldContinueToLive(livingCell, 0)).toBeFalsy();
        expect(Grid.shouldContinueToLive(livingCell, 1)).toBeFalsy();
        expect(Grid.shouldContinueToLive(livingCell, 2)).toBeTruthy();
        expect(Grid.shouldContinueToLive(livingCell, 3)).toBeTruthy();
        expect(Grid.shouldContinueToLive(livingCell, 4)).toBeFalsy();
        expect(Grid.shouldContinueToLive(livingCell, 5)).toBeFalsy();
        expect(Grid.shouldContinueToLive(livingCell, 6)).toBeFalsy();
        expect(Grid.shouldContinueToLive(livingCell, 7)).toBeFalsy();
        expect(Grid.shouldContinueToLive(livingCell, 8)).toBeFalsy();

        // [Assert / Act] When the cell is dead :
        expect(Grid.shouldContinueToLive(deadCell, 0)).toBeFalsy();
        expect(Grid.shouldContinueToLive(deadCell, 1)).toBeFalsy();
        expect(Grid.shouldContinueToLive(deadCell, 2)).toBeFalsy();
        expect(Grid.shouldContinueToLive(deadCell, 3)).toBeFalsy();
        expect(Grid.shouldContinueToLive(deadCell, 4)).toBeFalsy();
        expect(Grid.shouldContinueToLive(deadCell, 5)).toBeFalsy();
        expect(Grid.shouldContinueToLive(deadCell, 6)).toBeFalsy();
        expect(Grid.shouldContinueToLive(deadCell, 7)).toBeFalsy();
        expect(Grid.shouldContinueToLive(deadCell, 8)).toBeFalsy();

    });

    test("03 - Should die by overcrowding when the cell is alive with more than three living neighbours.", () => {

        // [Arrange]
        const livingCell: Cell = new Cell(true, 0, 0);
        const deadCell: Cell = new Cell(false, 0, 0);

        // [Assert / Act] When the cell is alive :
        expect(Grid.shouldDieByOvercrowding(livingCell, 0)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(livingCell, 1)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(livingCell, 2)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(livingCell, 3)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(livingCell, 4)).toBeTruthy();
        expect(Grid.shouldDieByOvercrowding(livingCell, 5)).toBeTruthy();
        expect(Grid.shouldDieByOvercrowding(livingCell, 6)).toBeTruthy();
        expect(Grid.shouldDieByOvercrowding(livingCell, 7)).toBeTruthy();
        expect(Grid.shouldDieByOvercrowding(livingCell, 8)).toBeTruthy();

        // [Assert / Act] When the cell is dead :
        expect(Grid.shouldDieByOvercrowding(deadCell, 0)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(deadCell, 1)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(deadCell, 2)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(deadCell, 3)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(deadCell, 4)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(deadCell, 5)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(deadCell, 6)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(deadCell, 7)).toBeFalsy();
        expect(Grid.shouldDieByOvercrowding(deadCell, 8)).toBeFalsy();

    });

    test("04 - Should emerge when the cell is dead but surrounded by exactly three living neighbours.", () => {

        // [Arrange]
        const livingCell: Cell = new Cell(true, 0, 0);
        const deadCell: Cell = new Cell(false, 0, 0);

        // [Assert / Act] When the cell is alive :
        expect(Grid.shouldEmergeFromLivingNeighbors(livingCell, 0)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(livingCell, 1)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(livingCell, 2)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(livingCell, 3)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(livingCell, 4)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(livingCell, 5)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(livingCell, 6)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(livingCell, 7)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(livingCell, 8)).toBeFalsy();

        // [Assert / Act] When the cell is dead :
        expect(Grid.shouldEmergeFromLivingNeighbors(deadCell, 0)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(deadCell, 1)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(deadCell, 2)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(deadCell, 3)).toBeTruthy();
        expect(Grid.shouldEmergeFromLivingNeighbors(deadCell, 4)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(deadCell, 5)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(deadCell, 6)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(deadCell, 7)).toBeFalsy();
        expect(Grid.shouldEmergeFromLivingNeighbors(deadCell, 8)).toBeFalsy();

    });

    test("05 - Should return a dying cell when the cell dies by underpopulation.", () => {

        // [Arrange]
        const cell: Cell = new Cell(true, 0, 0);

        // [Assert]
        const newCell: Cell = Grid.determineNextGeneration(cell, 0);

        // [Assert]
        const dyingCell = new Cell(false, 0, 0);
        expect(newCell).toStrictEqual(dyingCell);

    });

    test("06 - Should keep the cell alive when the cell is alive and enough neighbours to survive.", () => {

        // [Arrange]
        const cell: Cell = new Cell(true, 0, 0);

        // [Assert]
        const newCell: Cell = Grid.determineNextGeneration(cell, 2);

        // [Assert]
        const cellStayingAlive = new Cell(true, 0, 0);
        expect(newCell).toStrictEqual(cellStayingAlive);

    });

    test("07 - Should return a dying cell when the cell dies by overcrowding.", () => {

        // [Arrange]
        const cell: Cell = new Cell(true, 0, 0);

        // [Assert]
        const newCell: Cell = Grid.determineNextGeneration(cell, 4);

        // [Assert]
        const dyingCell = new Cell(false, 0, 0);
        expect(newCell).toStrictEqual(dyingCell);

    });

    test("08 - Should emerge a living cell when the cell is dead but surrounded by exactly three living neighbours.", () => {

        // [Arrange]
        const cell: Cell = new Cell(false, 0, 0);

        // [Assert]
        const newCell: Cell = Grid.determineNextGeneration(cell, 3);

        // [Assert]
        const cellNowLiving = new Cell(true, 0, 0);
        expect(newCell).toStrictEqual(cellNowLiving);

    });

    test("09 - Should let the cell dead when the cell is already dead and not surrounded by enough living neighbours to reborn.", () => {

        // [Arrange]
        const cell: Cell = new Cell(false, 0, 0);

        // [Assert]
        const newCell: Cell = Grid.determineNextGeneration(cell, 2);

        // [Assert]
        const cellStayingDead = new Cell(false, 0, 0);
        expect(newCell).toStrictEqual(cellStayingDead);

    });

});