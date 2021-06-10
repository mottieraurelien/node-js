export default class Laptop {

    brand: string;
    model: string;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }

    public run() {
        console.log("FAN ON");
    }

}