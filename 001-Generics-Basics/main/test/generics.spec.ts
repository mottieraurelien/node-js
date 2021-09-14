import Cat from "../src/cat";
import List from "../src/list";
import Laptop from "../src/laptop";

describe('Technical requirements to fulfill in order to implement a list that exploits generics.', () => {

    test('01 - Should increment the size of the list when pushing a new cat.', () => {

        // [Arrange]
        const indie: Cat = new Cat("Indie", "Didie");
        const cats: List<Cat> = new List();

        // [Act]
        cats.add(indie);

        // [Assert]
        const actual: number = cats.size();
        expect(actual).toBe(1);

    });

    test('02 - Should increment the size of the list when pushing a new laptop.', () => {

        // [Arrange]
        const asus: Laptop = new Laptop("Asus", "GL553");
        const acer: Laptop = new Laptop("Acer", "Nitro");
        const laptops: List<Laptop> = new List(asus, acer);

        // [Act]
        const dell: Laptop = new Laptop("Dell", "XPS");
        laptops.add(dell);

        // [Assert]
        const actual: number = laptops.size();
        expect(actual).toBe(3);

    });

    test('03 - Should throw an error when trying to get the cat at a index that is negative.', () => {

        // [Arrange]
        const indie: Cat = new Cat("Indie", "Didie");
        const kira: Cat = new Cat("Kira", "Kiki");
        const letty: Cat = new Cat("Letty", "Letty");
        const cats: List<Cat> = new List(indie, kira, letty);

        // [Act / Assert]
        const indexThatIsNegative: number = -1;
        expect(() => cats.get(indexThatIsNegative)).toThrow("The index must be positive.");

    });

    test('04 - Should throw an error when trying to get the cat at an index that is too high.', () => {

        // [Arrange]
        const indie: Cat = new Cat("Indie", "Didie");
        const kira: Cat = new Cat("Kira", "Kiki");
        const letty: Cat = new Cat("Letty", "Letty");
        const cats: List<Cat> = new List(indie, kira, letty);

        // [Act / Assert]
        const indexThatIsTooHigh: number = 3;
        expect(() => cats.get(indexThatIsTooHigh)).toThrow("The index must be between 0 and 2.");

    });

    test('05 - Should throw an error when trying to get a cat from an empty list.', () => {

        // [Arrange]
        const laptops: List<Laptop> = new List();

        // [Act / Assert]
        expect(() => laptops.get(0)).toThrow("The list is empty and must be filled first.");

    });

    test('06 - Should return the right laptop that matches the provided index when the list is not empty.', () => {

        // [Arrange]
        const dell: Laptop = new Laptop("Dell", "XPS");
        const asus: Laptop = new Laptop("Asus", "GL553");
        const acer: Laptop = new Laptop("Acer", "Nitro");
        const laptops: List<Laptop> = new List(dell, asus, acer);

        // [Act]
        const actual: Laptop = laptops.get(1);

        // [Assert]
        expect(actual).toBe(asus);

    });

    test('07 - Should throw an error when trying to get the first cat from an empty list.', () => {

        // [Arrange]
        const cats: List<Cat> = new List();

        // [Act / Assert]
        expect(() => cats.getFirst()).toThrow("The list is empty and must be filled first.");

    });

    test('08 - Should return the first cat when the list is not empty.', () => {

        // [Arrange]
        const indie: Cat = new Cat("Indie", "Didie");
        const kira: Cat = new Cat("Kira", "Kiki");
        const letty: Cat = new Cat("Letty", "Letty");
        const cats: List<Cat> = new List(indie, kira, letty);

        // [Act]
        const actual: Cat = cats.getFirst();

        // [Assert]
        expect(actual).toBe(indie);

    });

    test('09 - Should throw an error when trying to get the last laptop from an empty list.', () => {

        // [Arrange]
        const laptops: List<Laptop> = new List();

        // [Act / Assert]
        expect(() => laptops.getFirst()).toThrow("The list is empty and must be filled first.");

    });

    test('10 - Should return the last laptop when the list is not empty.', () => {

        // [Arrange]
        const dell: Laptop = new Laptop("Dell", "XPS");
        const asus: Laptop = new Laptop("Asus", "GL553");
        const acer: Laptop = new Laptop("Acer", "Nitro");
        const laptops: List<Laptop> = new List(dell, asus, acer);

        // [Act]
        const actual: Laptop = laptops.getLast();

        // [Assert]
        expect(actual).toBe(acer);

    });

});