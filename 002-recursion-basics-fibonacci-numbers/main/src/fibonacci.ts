export default class Fibonacci {

    maximum: number;

    constructor(maximum: number) {
        this.maximum = maximum;
    }

    generate(): number[] {

        if (this.maximum < 0) throw Error("The maximum number must be positive.");

        const numbers: number[] = [];

        if (this.maximum === 0) return numbers;

        this.generateRecursively(numbers, 0, 1);
        return numbers;
    }

    private generateRecursively(numbers: number[], previous: number, current: number): void {
        numbers.push(current);
        const next: number = (previous || 1) + current;
        if (next <= this.maximum) return this.generateRecursively(numbers, current, next);
        return;
    }

}