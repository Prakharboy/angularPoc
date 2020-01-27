import { OnInit } from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProductService} from './../product.service'
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import {select, Store} from '@ngrx/store';
import { AppState } from './../app.state';
import * as ProductActions from './../actions/product.actions'

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {


   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

    applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  product$: Observable<Product[]>;
  public temp:any;

  displayedColumns = ['name', 'type', 'price'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static: true}) sort: MatSort;

  constructor(private store: Store< {product:Product[]}>,private productService :ProductService) { 
    this.product$ =  store.pipe(select('product'));
    console.log('got products'+this.product$)

    this.getProuct();
  }


  ngOnInit() {
  }

  selectedRowIndex: any;


    highlight(row: any){
    this.selectedRowIndex = row.position;
    console.log(this.selectedRowIndex);
  }

   arrowUpEvent(row: object, index: number){
     console.log(index);
    var nextrow = this.dataSource[index - 2];
    this.highlight(nextrow);
  }

  arrowDownEvent(row: object, index: number){
    console.log(index);
    var nextrow = this.dataSource[index];
     this.highlight(nextrow);
  }
  addProduct(name,type,price)
  {

    this.store.dispatch(new ProductActions.AddProduct({name: name, type:type,price:price}) )
  

  }

  getProuct()
  {
  this.productService.getProuct().subscribe(data=>{
    this.dataSource=new MatTableDataSource(data);
  });
  }



}
