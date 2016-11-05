import {Component, Inject, ElementRef} from '@angular/core';
//import {Response} from '@angular/http';

import {Ng2JsonLoader} from '../ng2_json_loader/index';

@Component({
    moduleId: __moduleName,
    selector: 'ng2-pie-chart',
    templateUrl: 'template.html',
    providers: [Ng2JsonLoader]
})
export class Ng2PieChart {
    // Pie
    public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';

    constructor(@Inject(Ng2JsonLoader) private jsonLoader: Ng2JsonLoader) {
        const jsonObs = jsonLoader.load();
        this.pieChartLabels = jsonObs.labels;
        this.pieChartData = jsonObs.data;
        this.pieChartType = 'pie';
    }

    // Events
    public chartClicked(e:any):void {}

    public chartHovered(e:any):void {}
}