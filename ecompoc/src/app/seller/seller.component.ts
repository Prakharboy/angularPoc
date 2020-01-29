import { OnInit } from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {ProductService} from './../product.service'
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import {select, Store} from '@ngrx/store';
import { AppState } from './../app.state';
import * as ProductActions from './../actions/product.actions'
import { MatSortModule, } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material'; 

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {


  

  

 


  product$: Observable<Product[]>;
  public temp:any;

  displayedColumns = ['name', 'type', 'price'];
  public dataSource;

   @ViewChild(MatPaginator,{static: true}) paginator: 
    MatPaginator;
    @ViewChild(MatSort,{static: true}) sort: MatSort;

    


 ngOnInit() {
 this.getProducts();
      
    }    
public applyFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  goToPage = null;
updateGoToPage() {

    this.paginator.pageIndex = this.goToPage - 1;
  }

  check()
  {
    return true;
  }

  selectedRowIndex=0;

 highlight(index: number){
     if(index >= 0 && index <= this.dataSource.length - 1)
        this.selectedRowIndex = index;
    console.log(this.selectedRowIndex);
  } 

   arrowUpEvent(index: number){
    this.highlight(index - 1);
       console.log(this.selectedRowIndex);
  }

  arrowDownEvent(index: number){
    console.log(index);
     this.highlight(index + 1);
        console.log(this.selectedRowIndex);
  }


 

  constructor(private store: Store< {product:Product[]}>,private productService :ProductService) { 
    this.product$ =  store.pipe(select('product'));
    console.log('got products'+this.product$)

    
  }



  addProduct(name,type,price)
  {

    this.store.dispatch(new ProductActions.AddProduct({name: name, type:type,price:price}) )

    this.productService.addProduct(name,type,price).subscribe(data=>{console.log(data)});
  

  }

  getProducts()
  {
  this.productService.getProducts().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
    console.log("received product"+data);
  });
  }



}
