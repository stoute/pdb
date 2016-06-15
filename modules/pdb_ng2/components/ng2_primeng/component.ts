import {Component} from '@angular/core';
import {UIChart} from 'primeng/components/chart/chart.js';
import {CodeHighlighter} from 'primeng/components/codehighlighter/codehighlighter';
import {TabView} from 'primeng/components/tabview/tabview';
import {TabPanel} from 'primeng/components/tabview/tabpanel';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    template: `<p-chart type="bar" [data]="data"></p-chart>`,
    directives: [UIChart,TabPanel,TabView,CodeHighlighter,ROUTER_DIRECTIVES]
})
export class Ng2Primeng {

    data: any;

    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#42A5F5',
                    borderColor: '#1E88E5',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#9CCC65',
                    borderColor: '#7CB342',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        }
    }
}