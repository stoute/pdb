"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var index_1 = require('../../node_modules/app-base-library/src/library/angular/index');
var drupal_node_component_1 = require('./drupal-node.component');
var Ng2ExampleConfiguration = (function (_super) {
    __extends(Ng2ExampleConfiguration, _super);
    function Ng2ExampleConfiguration(elRef) {
        _super.call(this);
        this.text = '';
        this.text2 = '';
        var instanceId = elRef.nativeElement.id.substring(12);
        this.text = drupalSettings.pdb.configuration[instanceId].text;
        this.text2 = drupalSettings.pdb.configuration[instanceId].text2;
        this.node = drupalSettings.pdb.contexts['entity:node'];
        console.log(this);
        console.log(drupalSettings.pdb);
        console.log(drupalSettings.pdb.contexts);
        console.log(drupalSettings.app_server);
        console.log(drupalTranslations.strings);
        console.log('----');
        console.log(this.node);
    }
    Ng2ExampleConfiguration = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'ng2-example-configuration',
            imports: [drupal_node_component_1.DrupalNodeComponent],
            templateUrl: 'template.html',
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Ng2ExampleConfiguration);
    return Ng2ExampleConfiguration;
}(index_1.AppBaseComponent));
exports.Ng2ExampleConfiguration = Ng2ExampleConfiguration;
//# sourceMappingURL=component.js.map