import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public productList: any;
  constructor(
    private productService: ProductService,
  ){}

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser(){
    this.productService.getAllProducts().subscribe(res => {
      this.productList = res;
      console.log(res)
    });
  }
}
