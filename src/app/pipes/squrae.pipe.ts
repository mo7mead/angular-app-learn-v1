import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squrae'
})
export class SquraePipe implements PipeTransform {

  transform(value: number, pow: number): number {
    return Math.pow(value, pow);
  }

}
