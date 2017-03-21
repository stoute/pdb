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
var core_1 = require('@angular/core');
var Ng2RadarChart = (function () {
    function Ng2RadarChart() {
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
    }
    Ng2RadarChart.prototype.chartClicked = function (e) { };
    Ng2RadarChart.prototype.chartHovered = function (e) { };
    Ng2RadarChart = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'ng2-radar-chart',
            templateUrl: 'template.html',
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2RadarChart);
    return Ng2RadarChart;
}());
exports.Ng2RadarChart = Ng2RadarChart;
//# sourceMappingURL=component.js.map