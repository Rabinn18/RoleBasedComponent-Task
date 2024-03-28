import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ToastrService } from 'ngx-toastr';
import { TreeNode } from 'src/app/app.module';
import { ProductService } from 'src/app/services/products/product.service';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli', children: [{name: 'demo1'},{name: "demo2"}]}
        , {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public productList: any;
  treeItems: TreeNode[] = [] ;

  loading = false;
  constructor(
    private productService: ProductService,
  ){this.dataSource.data = TREE_DATA;}

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser(){
    this.productService.getAllProducts().subscribe(res => {
      this.productList = res;
      // console.log(res)
    });
  }

  public TreeNode = [] = [
    {
      label: 'Node 1',
      children: [
        { label: 'Node 1.1' },
        { label: 'Node 1.2' }
      ]
    },
    {
      label: 'Node 2',
      children: [
        { label: 'Node 2.1' },
        { label: 'Node 2.2' }
      ]
    }
  ];

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;


}
