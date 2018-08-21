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

  newRating = 5;
  newComment = '';

  constructor(private routeInfo: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    const id: number = this.routeInfo.snapshot.params['productId'];
    this.product = this.productService.getProduct(id);
    this.comments = this.productService.getCommentForProductId(id);
  }

  addComment() {
    console.log('damn');
    const comment = new Comment(0, this.product.id, new Date().toISOString(), 'anymous', this.newRating, this.newComment);
    this.comments.unshift(comment);
  }
}
