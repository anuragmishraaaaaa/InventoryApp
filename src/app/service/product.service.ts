import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  constructor(private http:HttpClient) { }
  saveProdDetails(prod:Product){
    return this.http.post('http://localhost:3000/product',prod);
  }
  getProdDetails(){
    return this.http.get('http://localhost:3000/product');
  }
  getSingleProduct(id:string){
    return this.http.get('http://localhost:3000/product'+id)
  }
  updateProdDetails(prod:Product){
    return this.http.put('http://localhost:3000/product'+prod.id,prod)
  }
  deleteProdDetails(id:number){
    return this.http.delete('http://localhost:3000/product'+id)
}
}
