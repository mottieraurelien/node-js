import TwoSum from "../src/twosum";

describe("Technical requirements to fulfill.", () => {

    test('01 - Should return an array with 4 and 5 when targeting the sum that equals to 9.', () => {

        // [Arrange]
        const twoSum: TwoSum = new TwoSum([1, 3, 4, 5, 7, 10, 11]);
        const sum: number = 9;

        // [Act]
        const actual: number[] = twoSum.target(sum);

        // [Assert]
        const expected: number[] = [4, 5];
        expect(actual).toStrictEqual(expected);

    });

});