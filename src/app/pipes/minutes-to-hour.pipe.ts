import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHour'
})
export class MinutesToHourPipe implements PipeTransform {

  transform(minutes: number, args?: any): any {
    let seconds = minutes * 60;
    const hours = Math.floor(seconds / 3600) % 24;
    seconds -= hours * 3600;
    const min = Math.floor(seconds / 60) % 60;
    return `${hours}hr ${min}min`;
  }

}