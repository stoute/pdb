"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_charts_1 = require('ng2-charts');
var lazy_load_component_1 = require('helpers/lazy-load-component');
var component_1 = require('./component');
__export(require('./globals'));
var Ng2PieChartModule = (function () {
    function Ng2PieChartModule() {
    }
    Ng2PieChartModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule,
                http_1.HttpModule
            ],
            providers: [
                { provide: lazy_load_component_1.LazyLoadComponent, useValue: component_1.Ng2PieChart }
            ],
            declarations: [
                component_1.Ng2PieChart
            ],
            entryComponents: [
                component_1.Ng2PieChart
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2PieChartModule);
    return Ng2PieChartModule;
}());
exports.Ng2PieChartModule = Ng2PieChartModule;
//# sourceMappingURL=index.js.map