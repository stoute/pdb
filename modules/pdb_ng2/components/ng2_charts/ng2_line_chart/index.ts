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
import {Ng2LineChart} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng2LineChart}
    ],
    declarations: [
        Ng2LineChart
    ],
    entryComponents: [
        Ng2LineChart
    ]
})
export class Ng2LineChartModule {}
