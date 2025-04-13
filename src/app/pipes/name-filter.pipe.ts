import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product.service';

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {

  transform(value: Product[], search: string): Product[] {
    if(!value || value.length === 0) return [];
    if(!search) return value;

    return value.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

  }

}
