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
var http_1 = require('@angular/http');
var Ng2JsonLoader = (function () {
    function Ng2JsonLoader(http) {
        this.http = http;
    }
    Ng2JsonLoader.prototype.load = function (id) {
        var jsonPath = drupalSettings.pdb.configuration[id].jsonPath;
        return this.http.get(jsonPath);
    };
    Ng2JsonLoader.prototype.getLabels = function (json, field) {
        var labels = [];
        for (var _i = 0, json_1 = json; _i < json_1.length; _i++) {
            var a = json_1[_i];
            if (!labels.includes(a[field])) {
                labels.push(a[field]);
            }
        }
        return labels;
    };
    Ng2JsonLoader.prototype.getData = function (json, labels, field) {
        var counts = {};
        for (var _i = 0, json_2 = json; _i < json_2.length; _i++) {
            var a = json_2[_i];
            var c = a[field];
            if (c in counts) {
                counts[c]++;
            }
            else {
                counts[c] = 1;
            }
        }
        var data = [];
        for (var _a = 0, labels_1 = labels; _a < labels_1.length; _a++) {
            var l = labels_1[_a];
            data.push(counts[l]);
        }
        return data;
    };
    Ng2JsonLoader = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], Ng2JsonLoader);
    return Ng2JsonLoader;
    var _a;
}());
exports.Ng2JsonLoader = Ng2JsonLoader;
//# sourceMappingURL=index.js.map