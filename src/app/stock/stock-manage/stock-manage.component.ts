import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>

  constructor(public router: Router) { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, "FirstStockName", 1.99, 3.5, "this is first stock,can be any information in here, can be awesome", ['IT', 'Internet']),
      new Stock(2, "SecondStockName", 2.99, 1.5, "this is second stock,can be any information in here, can be awesome", ['Education', 'Internet', 'IT']),
      new Stock(3, "ThirdStockName", 2.39, 3, "this is third stock,can be any information in here, can be awesome", ['IT', 'Media', 'Government']),
      new Stock(4, "FouthStockName", 3.19, 4.5, "this is Fouth stock,can be any information in here, can be awesome", ['Energy', 'Tech']),
      new Stock(5, "FifthStockName", 7.99, 5, "this is Five stock,can be any information in here, can be awesome", ['Power', 'Tech', 'Government']),
      new Stock(6, "SixthStockName", 1.39, 1.5, "this is Sixth stock,can be any information in here, can be awesome", ['E-Commerce', 'Internet', 'IT']),
      new Stock(7, "SeventhStockName", 5.99, 2.5, "this is Seventh stock,can be any information in here, can be awesome", ['Financial']),
      new Stock(8, "EigthStockName", 4.19, 4, "this is Eighth stock,can be any information in here, can be awesome", ['Financial', 'E-Commerce']),

    ];
  }
  create() {
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock) {  
    this.router.navigateByUrl('/stock/' + stock.id); 
  }

}

export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }

}
