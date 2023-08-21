import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Ahmet","Yigit","a@a.com",990000),
    new SalesPerson("Test","Data","tdata@adata.com",5000),
    new SalesPerson("Real me","Degsdf","dasdasa@ddda.com",6000),
    new SalesPerson("Dont Buy Me","Legolas","adsfsf@ardsa.com",3000),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
