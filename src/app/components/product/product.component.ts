import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'products',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {}
