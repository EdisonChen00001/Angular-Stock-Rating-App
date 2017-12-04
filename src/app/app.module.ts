import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import { StarsComponent } from './stars/stars.component';
import {RouterModule} from '@angular/router';

const routeConfig: Routes = [
  {path: 'stock', component : StockManageComponent}
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

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
