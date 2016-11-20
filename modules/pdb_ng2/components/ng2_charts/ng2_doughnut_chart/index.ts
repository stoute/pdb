/**
 * @module Ng2Charts
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
// external imports
import {ChartsModule} from 'ng2-charts';
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng2DoughnutChart} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng2DoughnutChart}
    ],
    declarations: [
        Ng2DoughnutChart
    ],
    entryComponents: [
        Ng2DoughnutChart
    ]
})
export class Ng2DoughnutChartModule {}
