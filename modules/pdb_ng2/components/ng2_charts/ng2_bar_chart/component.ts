import {Component, Inject, ElementRef} from '@angular/core';

@Component({
    moduleId: __moduleName,
    selector: 'ng2-bar-chart',
    templateUrl: 'template.html',
})
export class Ng2BarChart {
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['1992', '1996', '2000', '2004', '2008', '2012', '2016'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
        {data: [65, 52, 60, 81, 14, 55, 40], label: 'Kodos'},
        {data: [28, 48, 40, 19, 86, 27, 60], label: 'Kang'}
    ];

    public randomize():void {
        // Only Change 3 values
        let data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;

    }
}