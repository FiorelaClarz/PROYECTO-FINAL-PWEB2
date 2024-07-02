import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink, CommonModule, MenuComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  items: any[] = [];
  total_price: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    this.apiService.getCart().subscribe(data => {
      this.items = data.items;
      this.total_price = data.total_price;
    });
  }

  removeFromCart(productId: number) {
    this.apiService.removeFromCart(productId).subscribe(response => {
      console.log('Product removed from cart', response);
      this.getCart();
    });
  }
}
