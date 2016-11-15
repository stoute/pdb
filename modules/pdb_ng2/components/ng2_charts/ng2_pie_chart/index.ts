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
import {Ng2PieChart} from './component';
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
        {provide: LazyLoadComponent, useValue: Ng2PieChart}
    ],
    declarations: [
        Ng2PieChart
    ],
    entryComponents: [
        Ng2PieChart
    ]
})
export class Ng2PieChartModule {}
