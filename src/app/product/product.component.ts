import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Product[];

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, '第一个商品', 1.99, 0.5, '这是第一个商品的描述', ['分类1', '分类2']),
      new Product(2, '第一个商品', 1.99, 1.5, '这是第一个商品的描述', ['分类1', '分类3']),
      new Product(3, '第一个商品', 1.99, 2.5, '这是第一个商品的描述', ['分类1', '分类4']),
      new Product(4, '第一个商品', 1.99, 4.5, '这是第一个商品的描述', ['分类3', '分类2']),
      new Product(5, '第一个商品', 1.99, 3.5, '这是第一个商品的描述', ['分类4', '分类2']),
      new Product(6, '第一个商品', 1.99, 5.0, '这是第一个商品的描述', ['分类3', '分类4']),
    ];

  }

}
