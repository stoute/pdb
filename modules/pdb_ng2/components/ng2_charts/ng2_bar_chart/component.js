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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var index_1 = require('../ng2_json_loader/index');
var Ng2BarChart = (function () {
    function Ng2BarChart(jsonLoader, elRef) {
        var _this = this;
        this.jsonLoader = jsonLoader;
        this.elRef = elRef;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['1992', '1996', '2000', '2004', '2008', '2012', '2016'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 52, 60, 81, 14, 55, 40], label: 'Kodos' },
            { data: [28, 48, 40, 19, 86, 27, 60], label: 'Kang' }
        ];
        this.elRef = elRef;
        this.jsonLoader = jsonLoader;
        var instanceId = elRef.nativeElement.id.substring(12);
        var field = drupalSettings.pdb.configuration[instanceId]['targetField'];
        var jsonObs = jsonLoader.load(instanceId);
        jsonObs.subscribe(function (res) {
            var json = res.json();
            var labels = jsonLoader.getLabels(json, field);
            _this.barChartLabels = labels;
            var data = jsonLoader.getData(json, labels, field);
            _this.barChartData = [{ data: "" + data, label: 'Test' }];
        });
    }
    Ng2BarChart = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'ng2-bar-chart',
            templateUrl: 'template.html',
            providers: [index_1.Ng2JsonLoader]
        }),
        __param(0, core_1.Inject(index_1.Ng2JsonLoader)),
        __param(1, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [index_1.Ng2JsonLoader, core_1.ElementRef])
    ], Ng2BarChart);
    return Ng2BarChart;
}());
exports.Ng2BarChart = Ng2BarChart;
//# sourceMappingURL=component.js.map