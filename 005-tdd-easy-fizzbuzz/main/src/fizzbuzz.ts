export default class FizzBuzz {

    private readonly min: number;
    private readonly max: number;

    constructor(min: number, max: number) {
        this.min = min;
        this.max = max;
    }

    /**
     * Stage 1 : Write a method (computes) that add the numbers from [min to [max].
     *
     *  BUT :
     * - For multiples of 3, add “Fizz” to the array instead of the number,
     * - For the multiples of 5, add “Buzz” to the array instead of the number,
     * - For numbers which are multiples of both 3 and 5, add “FizzBuzz“ to the array instead of the number,.
     * - Otherwise add the number to the array.
     */
    computes(): string[] {
        throw Error("Not implemented yet.");
    }

    /**
     * Stage 2 : rules change now,
     *
     * - A number is FIZZ if it is divisible by 3 or if it has a 3 in it,
     * - A number is BUZZ if it is divisible by 5 or if it has a 5 in it.
     */
    computesDifferently(): string[] {
        throw Error("Not implemented yet.");
    }

}