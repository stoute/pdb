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
import {Ng2Charts} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartsModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: Ng2Charts}
    ],
    declarations: [
        Ng2Charts
    ],
    entryComponents: [
        Ng2Charts
    ]
})
export class Ng2ChartsModule {}
