import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter'
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';
  pageDesc = '';

  constructor(public router:Router) { 
    router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe((event:NavigationEnd) => {
      if(event.url == '/dashboard'){
        this.pageTitle = "index page"
        this.pageDesc = "this is index page, main content"
      }else if (event.url.startsWith('/stock')){
        this.pageTitle = "stock manage"
        this.pageDesc = "this is the page for stocks management"
      }
    })
  }

  ngOnInit() {
   
  }

}
