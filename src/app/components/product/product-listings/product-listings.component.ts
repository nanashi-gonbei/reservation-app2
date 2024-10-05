import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { products } from '../../../data/products';

@Component({
  selector: 'list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss',
})
export class ProductListComponent {
  public products: any[] = [];

  ngOnInit() {
    this.products = products;
  }
}
