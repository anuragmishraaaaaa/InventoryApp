import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
constructor(private fb:FormBuilder,private prodService:ProductService
  ,private activeRoutes:ActivatedRoute){ }
  prodForm:FormGroup;
  flag:boolean=false;
  ngOnInit(): void {
      this.prodForm=this.fb.group(
        {
          id:[],
          productName:[],
          manufacturer:[],
          availableQuantity:[],
          reodarLevel:[],
          color:[],
          details:[],
          supplier:this.fb.group(
                {supplierName:[],
                supplierCompanyName:[],
                supplierEmail:[],
                contactNumber:[],
                address:[],
                city:[],
                pincode:[],
                state:[]
                 } 
                 )
        }
      );
      this.patchEditValue();
      }
  patchEditValue() {
   let id:string;
   this.activeRoutes.paramMap.subscribe(
   param=>{
    id=param.get('data');
   }
   );
   this.prodService.getSingleProduct(id).subscribe(
    (data:Product)=>{
      this.prodForm.patchValue(data);
      this.flag=true;
    }
   );

  }
      onSubmit(){
        if(this.flag){
          this.prodService.updateProdDetails(this.prodForm.value).subscribe();
          alert('Product Details Updated..!');
        }
        else{
          this.prodService.saveProdDetails(this.prodForm.value).subscribe();
          alert('Product Details Saved..!');
        }
        this.prodForm.reset();
      }
  }

