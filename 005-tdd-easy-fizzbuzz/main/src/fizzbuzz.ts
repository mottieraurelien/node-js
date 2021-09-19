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
        if (this.min > this.max) throw Error("The max must be greater than the min.");

        const numbers: string[] = [];
        let i;
        for(i=this.min; i<= this.max; i++) {
            if (i%3 == 0 && i%5 == 0) {
                numbers.push("FizzBuzz");
            } else if(i%3 == 0){
                numbers.push("Fizz");
            } else if (i%5 == 0) {
                numbers.push("Buzz");
            } else {
                numbers.push(i.toString());
            }
        }
        return numbers;
    }

    /**
     * Stage 2 : rules change now,
     *
     * - A number is FIZZ if it is divisible by 3 or if it has a 3 in it,
     * - A number is BUZZ if it is divisible by 5 or if it has a 5 in it.
     */
    computesDifferently(): string[] {
        if (this.min > this.max) throw Error("The max must be greater than the min.")
        const numbers: string[] = [];
        let i;
        for(i=this.min; i<= this.max; i++) {
            if (i%3 == 0 && i%5 == 0) {
                numbers.push("FizzBuzz");
            } else if(i%3 == 0 || i.toString().includes("3")){
                numbers.push("Fizz");
            } else if (i%5 == 0 || i.toString().includes("5")) {
                numbers.push("Buzz");
            } else {
                numbers.push(i.toString());
            }
        }
        return numbers;

    }

}