import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../../../data/products';

@Component({
  selector: 'detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  public product: any = {};
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = products[+params.get('productId')!];
    });
  }
}
