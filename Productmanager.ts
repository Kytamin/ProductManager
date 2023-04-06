import {Product} from "./Product";

export class Productmanager {
    private products: Product[] = []

    constructor() {
    }

    getAll() {
        return this.products
    }

    setAdd(product: Product) {
        this.products.push(product)
    }

    setDelete(ID: string) {
        if (this.findProduct(ID) !== -1) {
            this.products.splice(this.findProduct(ID), 1)
        } else {
            throw new Error(`Delete error`)
        }
    }
    setFix(ID:string,name:string){
        if (this.findProduct(ID)!==1){
            this.products[this.findProduct(ID)].setName(name)
        }
    }

    findProduct(ID: string) {
        let i = -1
        this.products.forEach((product, index) => {
            if (product.getID() === ID) {
                i = index
            }
        })
        return i
    }
}