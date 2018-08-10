import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 0.5, '这是第一个商品的描述', ['分类1', '分类2']),
    new Product(2, '第一个商品', 1.99, 1.5, '这是第一个商品的描述', ['分类1', '分类3']),
    new Product(3, '第一个商品', 1.99, 2.5, '这是第一个商品的描述', ['分类1', '分类4']),
    new Product(4, '第一个商品', 1.99, 4.5, '这是第一个商品的描述', ['分类3', '分类2']),
    new Product(5, '第一个商品', 1.99, 3.5, '这是第一个商品的描述', ['分类4', '分类2']),
    new Product(6, '第一个商品', 1.99, 5.0, '这是第一个商品的描述', ['分类3', '分类4']),
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '13:23', '张三', 3, '东西不行'),
    new Comment(2, 1, '13:23', '张三', 3, '东西不行~~~'),
    new Comment(3, 1, '13:23', '张三', 3, '东西不行~'),
    new Comment(4, 2, '13:23', '张三', 3, '东西不行~'),
    new Comment(5, 3, '13:23', '张三', 3, '东西不行...'),
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id === Number(id));
  }

  getCommentForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === Number(id));
  }
}

export class Comment {

  private id: number;
  public productId: number;
  public timestamp: string;
  public user: string;
  public rating: number;
  public content: string;

  constructor(
    id, productId, timestamp, user, rating, content
  ) {
    this.id = id;
    this.productId = productId;
    this.timestamp = timestamp;
    this.user = user;
    this.rating = rating;
    this.content = content;
  }
}
