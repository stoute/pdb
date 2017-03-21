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
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var scroll_loader_1 = require('classes/scroll-loader');
var global_providers_1 = require('classes/global-providers');
var components = drupalSettings.pdb.ng2.components;
var globalProviders = new global_providers_1.GlobalProviders(components);
Promise.all(globalProviders.importGlobalInjectables())
    .then(function (globalServices) {
    var globals = globalProviders
        .createGlobalProvidersArray(globalServices);
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule.prototype.ngDoBootstrap = function () { };
        AppModule = __decorate([
            core_1.NgModule({
                providers: [core_1.SystemJsNgModuleLoader].concat(globals.globalProviders),
                imports: [platform_browser_1.BrowserModule].concat(globals.globalImports)
            }), 
            __metadata('design:paramtypes', [])
        ], AppModule);
        return AppModule;
    }());
    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
})
    .then(function (appModule) {
    var loader = new scroll_loader_1.ScrollLoader(appModule, components);
    loader.initialize();
});
//# sourceMappingURL=app.js.map