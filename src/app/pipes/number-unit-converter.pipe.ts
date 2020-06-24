import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberUnitConverter'
})
export class NumberUnitConverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value !== 0
      ? Math.abs(Number(value)) >= 1.0e+9
        ? "$" + Math.abs(Number(value)) / 1.0e+9 + "B"
        : Math.abs(Number(value)) >= 1.0e+6
          ? "$" + Math.abs(Number(value)) / 1.0e+6 + "M"
          : Math.abs(Number(value)) >= 1.0e+3
            ? "$" + Math.abs(Number(value)) / 1.0e+3 + "K"
            : Math.abs(Number(value))
      : "N/A";
  }

}