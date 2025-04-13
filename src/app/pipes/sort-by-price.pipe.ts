import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product.service';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {

  transform(value: Product[], order: 'asc' | 'desc'): Product[] {
    if (!value || value.length === 0) return [];

    return value.slice().sort((a, b) => {
      return order === 'asc'
        ? a.price - b.price
        : b.price - a.price;
    });
  }
}
