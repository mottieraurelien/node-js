import Cat from "./entities/Cat";
import Laptop from "./entities/Laptop";
import List from "./entities/List";

const firstCat: Cat = new Cat("Indie", "Didie");
const secondCat: Cat = new Cat("Tiger", "Titi");
const thirdCat: Cat = new Cat("Bob", "Bobby");
const cats: List = new List(firstCat, secondCat, thirdCat);

const firstLaptop: Laptop = new Laptop("Asus", "K53SV");
const secondLaptop: Laptop = new Laptop("Acer", "Nitro");
const thirdLaptop: Laptop = new Laptop("Asus", "FX53VD");
const laptops: List = new List(firstLaptop, secondLaptop, thirdLaptop);

console.log("typeof cats.getFirst() ->", typeof cats.getFirst());
console.log("typeof laptops.getLast() ->", typeof laptops.getLast());

// Exercise : I want the console.log (right Above) to return the right type and not "object".
// Hint : I will need to make my List GENERIC.