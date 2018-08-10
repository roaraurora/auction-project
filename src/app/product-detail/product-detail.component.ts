import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productTitle: string;

  constructor(private routeInfo: ActivatedRoute) {
    console.log('roaaaaaaaaaaaaaaaaaaaar');
   }

  ngOnInit() {
    this.productTitle = this.routeInfo.snapshot.params['productTitle'];
    console.log(this.productTitle);
  }

}
