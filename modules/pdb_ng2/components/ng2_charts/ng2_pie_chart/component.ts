import {Component, Inject, ElementRef} from '@angular/core';
import {Response} from '@angular/http';

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

    constructor(
        @Inject(Ng2JsonLoader) private jsonLoader: Ng2JsonLoader,
        @Inject(ElementRef) private elRef: ElementRef
    ) {
        this.elRef = elRef;
        this.jsonLoader = jsonLoader;
        // Strip the 'instance-id-' off the beginning of our selector for uuid.
        let instanceId = elRef.nativeElement.id.substring(12);
        let field = drupalSettings.pdb.configuration[instanceId]['targetField'];

        const jsonObs = jsonLoader.load(instanceId);

        jsonObs.subscribe((res: Response) => {
            let json = res.json();
            let labels = jsonLoader.getLabels(json, field);
            this.pieChartLabels = labels;
            this.pieChartData = jsonLoader.getData(json, labels, field);
        });
    }

    // Events
    public chartClicked(e:any):void {}

    public chartHovered(e:any):void {}
}