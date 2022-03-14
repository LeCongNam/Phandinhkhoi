import { Component, OnInit } from '@angular/core';
import { Product } from "../../model/product.model";
import { ProductServices } from "../../services/ProductServices";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  data: any;

  constructor(private productServices:ProductServices ) { }

  ngOnInit(): void {
    this.getProduct()
  }


    getProduct() {
      this.productServices.getProduct({})
          .then((res: any) => {
              this.data = res
          })
          .catch(err => console.log(err))
  }

}
