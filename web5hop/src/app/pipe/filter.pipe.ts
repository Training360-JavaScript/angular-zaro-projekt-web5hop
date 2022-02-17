import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe<T extends { [key: string]: any }>
  implements PipeTransform
{
  transform(
    value: T[] | null,
    phrase: string = '',
    key: string = ''
  ): T[] | null {
    if (!Array.isArray(value) || !phrase) {
      return value;
    }
    phrase = phrase.toLowerCase();

    if (!key) {
      return value.filter((item) => {
        return valuesToStrig(item).includes(phrase);
      });
    }

    return value.filter((item) => {
      // return key === 'address'
      return hasFull(item[key])
        ? item[key]['full'].toLowerCase().includes(phrase)
        : String(item[key]).toLowerCase().includes(phrase);
    });

    function valuesToStrig(item: T): string {
      const values = [];
      for (let key in item) {
        // key === 'address'
        hasFull(item[key])
          ? values.push(item[key]['full'])
          : values.push(item[key]);
      }
      return values.join(' ').toLowerCase();
    }

    function hasFull(obj: T): boolean {
      return typeof obj === 'object' &&  Object.getPrototypeOf(obj).hasOwnProperty('full')
    }
  }
}
