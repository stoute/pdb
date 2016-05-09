import {Component} from 'angular2/core';
import {BarChart} from './node_modules/primeng/components/chart/barchart/barchart.d.ts';

@Component({
    selector: 'ng2-primeng',
    templateUrl: Drupal.url('modules/pdb/modules/pdb_ng2/components/ng2_primeng/template.html')
})
export class Ng2Primeng {

    data: any;

    msgs: Message[];

    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fillColor: '#42A5F5',
                    strokeColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    fillColor: '#9CCC65',
                    strokeColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }

    onSelect(event) {
        if(event.bars) {
            this.msgs = [];
            for(var i = 0; i < event.bars.length; i++) {
                this.msgs.push({severity: 'info', summary: 'Bar Selected', 'detail': event.bars[i].label + ' ' + event.bars[i].value});
            }

        }
    }
}