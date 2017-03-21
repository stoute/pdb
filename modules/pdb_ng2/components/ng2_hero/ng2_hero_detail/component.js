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
var hero_1 = require('../hero');
var Ng2HeroDetail = (function () {
    function Ng2HeroDetail() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], Ng2HeroDetail.prototype, "hero", void 0);
    Ng2HeroDetail = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'ng2-hero-detail',
            templateUrl: 'template.html',
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2HeroDetail);
    return Ng2HeroDetail;
}());
exports.Ng2HeroDetail = Ng2HeroDetail;
//# sourceMappingURL=component.js.map