import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService, Comment } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;

  public comments: Comment[];

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) {
    console.log('roaaaaaaaaaaaaaaaaaaaar');
  }

  ngOnInit() {
    const id: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(id);
    this.comments = this.productService.getCommentForProductId(id);
  }

}
