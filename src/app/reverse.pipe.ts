import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    //console.log(value.split(''));
    return value.split('').reverse().join('');
  }

}
