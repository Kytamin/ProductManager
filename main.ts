import {Product} from "./Product";
import {Productmanager} from "./Productmanager";

let samsung = new Product("samsung", 2000, "A001")
let iphone = new Product("iphone", 3000, "A002")
let laptop = new Product("Laptop", 4000, "A003")

let productmanager = new Productmanager()
productmanager.setAdd(samsung)
productmanager.setAdd(iphone)
productmanager.setAdd(laptop)
productmanager.setFix("A001","Oppo")
// productmanager.setDelete("A001")
console.log(productmanager.getAll())