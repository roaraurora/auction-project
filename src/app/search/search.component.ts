import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;

  categories: string[];

  constructor(private productService: ProductService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
    this.formModel = this.fb.group({
      title: ['', Validators.minLength(3)],
      price: [null, this.positiveNumberValidator],
      category: []
    });
  }

  positiveNumberValidator(control: FormControl): any {
    if (!control.value) {
      return null;
    }
    const price = parseInt(control.value, 10);
    if (price > 0) {
      return null;
    } else {
      return { positiveNumber: true };
    }
  }

  onSearch() {
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

}
