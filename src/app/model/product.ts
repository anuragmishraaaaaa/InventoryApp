import { Supplier } from "./supplier";
export class Product {
    id:number;
    productName:string;
    manufacturer:string;
    availableQuantity:number;
    reoderLevel:string;
    color:string;
    details:string;
    supplier:Supplier;
}
