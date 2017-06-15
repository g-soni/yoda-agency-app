import { Pipe, PipeTransform } from '@angular/core';
import { AgencyService } from './agency.service';

@Pipe({
  name: 'sortByGrade'
})

export class sortByGradePipe implements PipeTransform {
  constructor(public agencyService: AgencyService) {

  }

  transform(array: Array<any>): Array<any> {
    let grades = this.agencyService.grades;
    array.sort((a: any, b: any) => {
      let g1 = grades.filter(grd => grd.value == a.grade)[0];
      let g2 = grades.filter(grd => grd.value == b.grade)[0];
      if (g1.id > g2.id) {
        return -1;
      } else if (g1.id < g2.id) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
