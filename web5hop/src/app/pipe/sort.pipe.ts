import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  transform(items: [], direction: string, column: string, type: string = 'string') {
    if (!items) return
    let sortedItems = [];
    sortedItems =
      direction === 'asc'
        ? this.sortAscending(items, column, type)
        : this.sortDescending(items, column, type);
    return sortedItems;
  }

  sortAscending(items: any, column: any, type: any) {
    return [
      ...items.sort((a: any, b: any) => {
        if (type === 'string') {
          if(column === 'address') return a.address.full.localeCompare(b.address.full);
          if (a[column].toUpperCase() < b[column].toUpperCase()) return -1;
          if (a[column].toUpperCase() > b[column].toUpperCase()) return 1;
          return 0;
        } else {
          return a[column] - b[column];
        }
      }),
    ];
  }

  sortDescending(items: any, column: any, type: any) {
    return [
      ...items.sort((a: any, b: any) => {
        if (type === 'string') {
          if(column === 'address') return b.address.full.localeCompare(a.address.full);
          if (a[column].toUpperCase() > b[column].toUpperCase()) return -1;
          if (a[column].toUpperCase() < b[column].toUpperCase()) return 1;
          return 0;
        } else {
          return b[column] - a[column];
        }
      }),
    ];
  }
}
