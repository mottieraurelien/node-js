import Grid from "../structure/grid";
import {assertFiveByFive, generateFiveByFive} from "./common";

/**
 * Made from the first/second/third patterns of https://www.geogebra.org/m/aH9VvNTT#chapter/273217.
 */
describe("Technical requirements to fulfill in order to implement the Game Of Life, last part.", () => {

    test("01 - Should end by an empty grid when starting from a first triomino pattern.", () => {

        // [Arrange]
        const grid: Grid = generateFiveByFive([
            false, false, false, false, false,
            false, false, false, true, false,
            false, false, true, false, false,
            false, false, true, false, false,
            false, false, false, false, false
        ]);

        // [Act / Assert] Let's generate its next generation :
        const actualNextGeneration: Grid = grid.next();
        const expectedStatesNextGeneration: boolean[] = [
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, true, true, false,
            false, false, false, false, false,
            false, false, false, false, false
        ];
        assertFiveByFive(grid, actualNextGeneration, expectedStatesNextGeneration);

        // [Act / Assert] Let's generate its last generation :
        const actualLastGeneration: Grid = actualNextGeneration.next();
        const expectedStatesLastGeneration: boolean[] = [
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, false, false, false,
            false, false, false, false, false
        ];
        assertFiveByFive(actualNextGeneration, actualLastGeneration, expectedStatesLastGeneration);

    });

    test("02 - Should repeat the same patterns when starting from a second triomino pattern.", () => {

        // [Arrange]
        const grid: Grid = generateFiveByFive([
            false, false, false, false, false,
            false, false, true, false, false,
            false, false, true, false, false,
            false, false, true, false, false,
            false, false, false, false, false
        ]);

        // [Act / Assert] Let's generate its next generation :
        const actualNextGeneration: Grid = grid.next();
        const expectedStatesNextGeneration: boolean[] = [
            false, false, false, false, false,
            false, false, false, false, false,
            false, true, true, true, false,
            false, false, false, false, false,
            false, false, false, false, false
        ];
        assertFiveByFive(grid, actualNextGeneration, expectedStatesNextGeneration);

        // [Act / Assert] Let's generate its last generation :
        const actualRepeatedGeneration: Grid = actualNextGeneration.next();
        const expectedStatesRepeatedGeneration: boolean[] = [
            false, false, false, false, false,
            false, false, true, false, false,
            false, false, true, false, false,
            false, false, true, false, false,
            false, false, false, false, false
        ];
        assertFiveByFive(actualNextGeneration, actualRepeatedGeneration, expectedStatesRepeatedGeneration);

    });

    test("03 - Should generate a stable grid when starting from a third triomino pattern.", () => {

        // [Arrange]
        const grid: Grid = generateFiveByFive([
            false, false, false, false, false,
            false, false, true, true, false,
            false, false, true, false, false,
            false, false, false, false, false,
            false, false, false, false, false
        ]);

        // [Act / Assert] Let's generate its next generation :
        const actualNextGeneration: Grid = grid.next();
        const expectedStatesStableGeneration: boolean[] = [
            false, false, false, false, false,
            false, false, true, true, false,
            false, false, true, true, false,
            false, false, false, false, false,
            false, false, false, false, false
        ];
        assertFiveByFive(grid, actualNextGeneration, expectedStatesStableGeneration);

        // [Act / Assert] Let's generate its last generation :
        const actualRepeatedGeneration: Grid = actualNextGeneration.next();
        assertFiveByFive(actualNextGeneration, actualRepeatedGeneration, expectedStatesStableGeneration);

    });

});