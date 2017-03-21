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
var lazy_load_component_1 = require('helpers/lazy-load-component');
var component_1 = require('./component');
__export(require('./globals'));
var Ng2Example1Module = (function () {
    function Ng2Example1Module() {
    }
    Ng2Example1Module = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            providers: [
                { provide: lazy_load_component_1.LazyLoadComponent, useValue: component_1.Ng2Example1 }
            ],
            declarations: [
                component_1.Ng2Example1
            ],
            entryComponents: [
                component_1.Ng2Example1
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2Example1Module);
    return Ng2Example1Module;
}());
exports.Ng2Example1Module = Ng2Example1Module;
//# sourceMappingURL=index.js.map