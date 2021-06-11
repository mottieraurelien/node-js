import Cat from "./entities/Cat";
import Laptop from "./entities/Laptop";
import List from "./entities/List";

const firstCat: Cat = new Cat("Indie", "Didie");
const secondCat: Cat = new Cat("Tiger", "Titi");
const thirdCat: Cat = new Cat("Bob", "Bobby");
const cats = new List(firstCat, secondCat, thirdCat);

const firstLaptop: Laptop = new Laptop("Asus", "K53SV");
const secondLaptop: Laptop = new Laptop("Acer", "Nitro");
const thirdLaptop: Laptop = new Laptop("Asus", "FX53VD");
const laptops = new List(firstLaptop, secondLaptop, thirdLaptop);

const foundFirstCat: Cat = cats.getFirst();
const foundLastLaptop: Laptop = laptops.getLast();

console.log("foundCat > ", foundFirstCat);
console.log("foundLaptop > ", foundLastLaptop);

// Exercise : I don't want to use "any" in my list, but I still want to support (properly) any kind of object.
// Hint : I will need to make my List GENERIC.

// When using generics in OOP, our code is more "generic". What does this silly sentence mean ?
//
// It means that we have a class, with many methods, that will work no matter the type of the object that is manipulated.
// Generics are very very useful when it comes to store objects (like our list), or mapper (to transform an object into
// another one, with a different class), ... By using generics, we preserve the type of the object, that's why our list
// knows that it will return a Cat when we declared and populated our list with Cat objects.