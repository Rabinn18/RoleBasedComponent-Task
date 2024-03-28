import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface TreeNode{
  name: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'Node 1',
    children: [
      { name: 'Node 1.1' },
      { name: 'Node 1.2' }
    ]
  },
  {
    name: 'Node 2',
    children: [
      { name: 'Node 2.1' },
      { name: 'Node 2.2' }
    ]
  }
];
@Component({
  selector: 'app-heirarchical-structure-demo',
  templateUrl: './heirarchical-structure-demo.component.html',
  styleUrl: './heirarchical-structure-demo.component.scss'
})
export class HeirarchicalStructureDemoComponent {

  constructor(){
    this.dataSource.data = TREE_DATA;
    console.log(this.dataSource)
  }
  treeControl = new NestedTreeControl<TreeNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();



  hasChild = (a:number, node: TreeNode) => {
    return !!node.children && node.children.length > 0;
  }


}
