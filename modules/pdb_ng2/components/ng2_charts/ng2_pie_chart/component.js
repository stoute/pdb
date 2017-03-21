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
var Ng2PieChart = (function () {
    function Ng2PieChart(jsonLoader, elRef) {
        var _this = this;
        this.jsonLoader = jsonLoader;
        this.elRef = elRef;
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.elRef = elRef;
        this.jsonLoader = jsonLoader;
        var instanceId = elRef.nativeElement.id.substring(12);
        var field = drupalSettings.pdb.configuration[instanceId]['targetField'];
        var jsonObs = jsonLoader.load(instanceId);
        jsonObs.subscribe(function (res) {
            var json = res.json();
            var labels = jsonLoader.getLabels(json, field);
            _this.pieChartLabels = labels;
            _this.pieChartData = jsonLoader.getData(json, labels, field);
        });
    }
    Ng2PieChart.prototype.chartClicked = function (e) { };
    Ng2PieChart.prototype.chartHovered = function (e) { };
    Ng2PieChart = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'ng2-pie-chart',
            templateUrl: 'template.html',
            providers: [index_1.Ng2JsonLoader]
        }),
        __param(0, core_1.Inject(index_1.Ng2JsonLoader)),
        __param(1, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [index_1.Ng2JsonLoader, (typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], Ng2PieChart);
    return Ng2PieChart;
    var _a;
}());
exports.Ng2PieChart = Ng2PieChart;
//# sourceMappingURL=component.js.map