import FizzBuzz from "../src/fizzbuzz";

/**
 * Made from https://codingdojo.org/kata/FizzBuzz/.
 */
describe("Technical requirements to fulfill in order to implement the most famous kata.", () => {

    test('01 - Should throw an error when trying to implement the fizzbuzz kata with wrong inputs (stage 1).', () => {

        // [Arrange]
        const fizzbuzz: FizzBuzz = new FizzBuzz(6, 5);

        // [Act / Assert]
        expect(() => fizzbuzz.computes()).toThrow("The max must be greater than the min.");

    });

    test("02 - Should return the right numbers when implementing the FizzBuzz kata (stage 1).", () => {

        // [Arrange]
        const fizzbuzz: FizzBuzz = new FizzBuzz(1, 20);

        // [Act]
        const actual: string[] = fizzbuzz.computes();

        // [Assert]
        const expected: string[] = ["1", "2", "Fizz", "4", "Buzz",
            "Fizz", "7", "8", "Fizz", "Buzz",
            "11", "Fizz", "13", "14", "FizzBuzz",
            "16", "17", "Fizz", "19", "Buzz"];
        expect(actual).toStrictEqual(expected);

    });

    test('03 - Should throw an error when trying to implement the fizzbuzz kata with wrong inputs (stage 2).', () => {

        // [Arrange]
        const fizzbuzz: FizzBuzz = new FizzBuzz(6, 5);

        // [Act / Assert]
        expect(() => fizzbuzz.computesDifferently()).toThrow("The max must be greater than the min.");

    });

    test("04 - Should return the right numbers when implementing the FizzBuzz kata (stage 2).", () => {

        // [Arrange]
        const fizzbuzz: FizzBuzz = new FizzBuzz(1, 20);

        // [Act]
        const actual: string[] = fizzbuzz.computesDifferently();

        // [Assert]
        const expected: string[] = ["1", "2", "Fizz", "4", "Buzz",
            "Fizz", "7", "8", "Fizz", "Buzz",
            "11", "Fizz", "Fizz", "14", "FizzBuzz",
            "16", "17", "Fizz", "19", "Buzz"];
        expect(actual).toStrictEqual(expected);

    });

});