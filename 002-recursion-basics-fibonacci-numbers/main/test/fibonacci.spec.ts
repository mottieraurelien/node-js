import Fibonacci from "../src/fibonacci";

describe('Technical requirements to fulfill in order to compute the Fibonacci numbers.', () => {

    test('01 - Should return an error with a message when the maximum number that is provided is not positive.', () => {

        // [Arrange]
        const incorrectInputMaximum: number = -1;
        const fibonacci: Fibonacci = new Fibonacci(incorrectInputMaximum);

        // [Act / Assert]
        expect(() => fibonacci.generate()).toThrow("The maximum number must be positive.");

    });

    test('02 - Should return an empty array when the maximum number is zero.', () => {

        // [Arrange]
        const inputMaximum: number = 0;
        const fibonacci: Fibonacci = new Fibonacci(inputMaximum);

        // [Act]
        const actual: number[] = fibonacci.generate();

        // [Assert]
        const anEmptyArray: number[] = [];
        expect(actual).toStrictEqual(anEmptyArray);

    });

    test('03 - Should return an array that contains only 1 when the maximum number is 1.', () => {

        // [Arrange]
        const inputMaximum: number = 1;
        const fibonacci: Fibonacci = new Fibonacci(inputMaximum);

        // [Act]
        const actual: number[] = fibonacci.generate();

        // [Assert]
        expect(actual).toHaveLength(1);
        expect(actual).toStrictEqual([1]);

    });

    test('04 - Should return an array that contains only 1, 2, 3, 5 when the maximum number is 5.', () => {

        // [Arrange]
        const inputMaximum: number = 5;
        const fibonacci: Fibonacci = new Fibonacci(inputMaximum);

        // [Act]
        const actual: number[] = fibonacci.generate();

        // [Assert]
        expect(actual).toHaveLength(4);
        expect(actual).toStrictEqual([1, 2, 3, 5]);

    });

    test('05 - Should return an array that contains only 1, 2, 3, 5, 8, 13 when the maximum number is 20.', () => {

        // [Arrange]
        const inputMaximum: number = 20;
        const fibonacci: Fibonacci = new Fibonacci(inputMaximum);

        // [Act]
        const actual: number[] = fibonacci.generate();

        // [Assert]
        expect(actual).toHaveLength(6);
        expect(actual).toStrictEqual([1, 2, 3, 5, 8, 13]);

    });

});