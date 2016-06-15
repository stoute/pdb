System.register(['@angular/core', 'primeng/components/chart/chart.js', 'primeng/components/codehighlighter/codehighlighter', 'primeng/components/tabview/tabview', 'primeng/components/tabview/tabpanel', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, chart_js_1, codehighlighter_1, tabview_1, tabpanel_1, router_1;
    var Ng2Primeng;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chart_js_1_1) {
                chart_js_1 = chart_js_1_1;
            },
            function (codehighlighter_1_1) {
                codehighlighter_1 = codehighlighter_1_1;
            },
            function (tabview_1_1) {
                tabview_1 = tabview_1_1;
            },
            function (tabpanel_1_1) {
                tabpanel_1 = tabpanel_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Ng2Primeng = (function () {
                function Ng2Primeng() {
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
                    };
                }
                Ng2Primeng = __decorate([
                    core_1.Component({
                        template: "<p-chart type=\"bar\" [data]=\"data\"></p-chart>",
                        directives: [chart_js_1.UIChart, tabpanel_1.TabPanel, tabview_1.TabView, codehighlighter_1.CodeHighlighter, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Ng2Primeng);
                return Ng2Primeng;
            }());
            exports_1("Ng2Primeng", Ng2Primeng);
        }
    }
});
//# sourceMappingURL=component.js.map