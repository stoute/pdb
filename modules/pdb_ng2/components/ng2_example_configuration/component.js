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
var Ng2ExampleConfiguration = (function () {
    function Ng2ExampleConfiguration(elRef) {
        this.text = '';
        var instanceId = elRef.nativeElement.id.substring(12);
        this.text = drupalSettings.pdb.configuration[instanceId].text;
    }
    Ng2ExampleConfiguration = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'ng2-example-configuration',
            templateUrl: 'template.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2ExampleConfiguration);
    return Ng2ExampleConfiguration;
}());
exports.Ng2ExampleConfiguration = Ng2ExampleConfiguration;
//# sourceMappingURL=component.js.map