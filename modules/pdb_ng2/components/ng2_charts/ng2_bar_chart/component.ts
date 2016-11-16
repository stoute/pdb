import {Component, Inject, ElementRef} from '@angular/core';
import {Response} from '@angular/http';

import {Ng2JsonLoader} from '../ng2_json_loader/index';

@Component({
    moduleId: __moduleName,
    selector: 'ng2-bar-chart',
    templateUrl: 'template.html',
    providers: [Ng2JsonLoader]
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

    constructor(
        @Inject(Ng2JsonLoader) private jsonLoader: Ng2JsonLoader,
        @Inject(ElementRef) private elRef: ElementRef
    ) {

        // Strip the 'instance-id-' off the beginning of our selector for uuid.
        let instanceId = elRef.nativeElement.id.substring(12);
        let field = drupalSettings.pdb.configuration[instanceId]['targetField'];

        console.log(field);

        const jsonObs = jsonLoader.load(instanceId);

        jsonObs.subscribe((res: Response) => {
            let json = res.json();
            console.log(json);
            let labels = jsonLoader.getLabels(json, field);
            console.log(labels);
            this.barChartLabels = labels;
            let data = jsonLoader.getData(json, labels, field);
            this.barChartData = [{data: `${data}`, label: 'Test'}];
        });
    }
}