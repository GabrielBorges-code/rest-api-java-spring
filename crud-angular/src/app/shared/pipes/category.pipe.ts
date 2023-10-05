import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Desenvolvimento':
        return 'code';
      case 'Investimentos':
        return 'calculate';
      default:
        return 'school';
    }
  }
}
