import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageCalculator'
})
export class AgeCalculatorPipe implements PipeTransform {

  transform(birthDate: string, args?: any): any {
    if (birthDate) {
      var timeDiff = Math.abs(Date.now() - new Date(birthDate).getTime());
      return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }

}