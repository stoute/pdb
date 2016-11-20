/**
 * @module Ng2Charts
 * @preferred
 */ /** */

// lib imports
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
// external imports
import {ChartsModule} from 'ng2-charts';
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {Ng2BarChart} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule,
        HttpModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng2BarChart}
    ],
    declarations: [
        Ng2BarChart
    ],
    entryComponents: [
        Ng2BarChart
    ]
})
export class Ng2BarChartModule {}
