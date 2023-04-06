export class Product {
    private name: string
    private price: number
    private ID: string

    constructor(name: string, price: number, ID: string) {
        this.name = name;
        this.price = price;
        this.ID = ID

    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }

    setName(name: string) {
        this.name = name
    }

    setPrice(price: number) {
        this.price = price
    }

    setID(ID: string) {
        this.ID = ID
    }

    getID() {
        return this.ID
    }
}