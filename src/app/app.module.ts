import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { StarsComponent } from './stars/stars.component';
import { CarouselComponent } from './carousel/carousel.component';

import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { HoemComponent } from './hoem/hoem.component';

registerLocaleData(zh);

registerLocaleData(zh);
const routeConfig: Routes = [
  { path: '', component: HoemComponent },
  { path: 'product/:productTitle', component: ProductDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    ProductDetailComponent,
    SearchComponent,
    StarsComponent,
    CarouselComponent,
    HoemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routeConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
