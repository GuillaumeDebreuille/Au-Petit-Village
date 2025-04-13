import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../services/product.service';
import { SortByPricePipe } from '../pipes/sort-by-price.pipe';
import { FormsModule } from '@angular/forms';
import { NameFilterPipe } from '../pipes/name-filter.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SortByPricePipe, NameFilterPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  tri : 'asc' | 'desc' = 'asc';
  recherche: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}

