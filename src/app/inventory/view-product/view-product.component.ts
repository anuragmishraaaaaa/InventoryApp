import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit{
constructor(private prodService:ProductService,private router:Router){}
products:Product[];
ngOnInit(): void {
    this.prodService.getProdDetails().subscribe((data:Product[])=>{
      this.products=data;
    })
}
onEdit(id:number){
  this.router.navigateByUrl('/invertory/edit/'+id)
}
onDelete(id:number){
  this.prodService.deleteProdDetails(id).subscribe();
  window.location.reload();
}
}
