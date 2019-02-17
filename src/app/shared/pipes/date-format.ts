import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFormat'})
export class dateFormat implements PipeTransform {
  transform(value: string): string {

    let date = new Date(value);
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    let formatedDate: string = year + "-" + month + "-" + day;
    return formatedDate;
  }
}