import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'character'
})
export class CharacterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const end = args.length ? args[0] : value.length;
    const windowSize = window.innerWidth;
    return windowSize > 375 ? value : value.substring(0, end);
  }

}
