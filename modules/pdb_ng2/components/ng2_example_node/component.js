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
var core_1 = require('@angular/core');
var index_1 = require('../../node_modules/app-base-library/src/library/angular/index');
var Ng2ExampleNode = (function (_super) {
    __extends(Ng2ExampleNode, _super);
    function Ng2ExampleNode() {
        _super.call(this);
        this.title = '';
        var node = drupalSettings.pdb.contexts['entity:node'];
        this.title = node['title'][0]['value'];
        console.log(this);
        console.log(drupalSettings.pdb);
        console.log(drupalSettings.app_server);
        console.log('----');
        console.log(node);
    }
    Ng2ExampleNode = __decorate([
        core_1.Component({
            moduleId: __moduleName,
            selector: 'ng2-example-node',
            templateUrl: 'template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2ExampleNode);
    return Ng2ExampleNode;
}(index_1.AppBaseComponent));
exports.Ng2ExampleNode = Ng2ExampleNode;
//# sourceMappingURL=component.js.map