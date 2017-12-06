import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routeConfig: Routes = [
  {
    path:'',
    redirectTo: '/DashboardComponent',
    pathMatch:'full'
  },
  {
    path:'stock',
    component:StockManageComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
