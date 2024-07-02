import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule, MenuComponent, CartComponent],
  // providers: [ApiService],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
// export class MenuComponent {

// }
export class MenuComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  addToCart(productId: number) {
    this.apiService.addToCart(productId).subscribe(response => {
      console.log('Product added to cart', response);
    });
  }

}