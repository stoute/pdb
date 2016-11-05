import {Inject, Injectable} from '@angular/core';

@Injectable()
export class Ng2JsonLoader {
    constructor() { }

    load() {
        //return this.http.get('../demo-data/phones.json');
        var pieChartLabels:string[] = ['Brown', 'Blonde', 'Black'];
        var pieChartData:number[] = [100, 100, 100];
        var res = {
            labels: pieChartLabels,
            data: pieChartData
        };
        return res;
    }
}
