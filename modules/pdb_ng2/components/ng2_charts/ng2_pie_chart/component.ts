import {Component, Inject, ElementRef} from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'ng2-pie-chart',
    templateUrl: 'template.html',
})
export class Ng2PieChart {
    // Pie
    public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';
}