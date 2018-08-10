import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
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
import { ProductService } from './shared/product.service';
import { FilterPipe } from './pipe/filter.pipe';

registerLocaleData(zh);
const routeConfig: Routes = [
  { path: '', component: HoemComponent },
  { path: 'product/:productId', component: ProductDetailComponent }
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
    HoemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
