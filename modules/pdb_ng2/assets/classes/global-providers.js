"use strict";
var GlobalProviders = (function () {
    function GlobalProviders(injectables) {
        this.injectables = injectables;
    }
    GlobalProviders.prototype.importGlobalInjectables = function () {
        var importPromises = [];
        var _loop_1 = function(instanceId) {
            var component = this_1.injectables[instanceId];
            var componentName = this_1.convertToNgClassName(component.element);
            importPromises.push(System.import("/" + component.uri + "/globals")
                .then(function (component) { return ({ component: component, componentName: componentName }); })
                .catch(this_1.onMissingProvidersFileError.bind(this_1, componentName)));
        };
        var this_1 = this;
        for (var instanceId in this.injectables) {
            _loop_1(instanceId);
        }
        return importPromises;
    };
    GlobalProviders.prototype.createGlobalProvidersArray = function (globals) {
        var globalProviders = [];
        var globalImports = [];
        for (var _i = 0, globals_1 = globals; _i < globals_1.length; _i++) {
            var mod = globals_1[_i];
            var globalsName = mod.componentName + "Globals";
            if (!(globalsName in mod.component)) {
                this.onMissingGlobalsExportError(mod.componentName);
            }
            if (!('providers' in mod.component[globalsName])) {
                this.onMissingProvidersExportError(mod.componentName);
            }
            if (!('imports' in mod.component[globalsName])) {
                this.onMissingModulesExportError(mod.componentName);
            }
            globalProviders = globalProviders.concat(mod.component[globalsName].providers);
            globalImports = globalImports.concat(mod.component[globalsName].imports);
        }
        var globalProvidersNames = this.symbolsToNames(globalProviders);
        var globalModulesNames = this.symbolsToNames(globalImports);
        console.log("Global available providers " + globalProvidersNames);
        console.log("Global available modules " + globalModulesNames);
        return { globalProviders: globalProviders, globalImports: globalImports };
    };
    GlobalProviders.prototype.convertToNgClassName = function (elementName) {
        return (elementName.toLowerCase().charAt(0).toUpperCase() +
            elementName.slice(1))
            .replace(/-(.)/g, function (match, group1) { return group1.toUpperCase(); });
    };
    GlobalProviders.prototype.symbolsToNames = function (symbols) {
        return symbols
            .map(function (symb) { return symb.name; })
            .filter(function (el, i, arr) { return arr.lastIndexOf(el) === i; })
            .join(', ');
    };
    GlobalProviders.prototype.onMissingProvidersFileError = function (componentName) {
        throw (componentName + " does not have a global-providers file to load\n      All lazy loaded components need a global-providers file. Check the docs");
    };
    GlobalProviders.prototype.onMissingProvidersExportError = function (componentName) {
        throw (componentName + " does not have a \"providers\" property array\n      in the globals file. Check the docs");
    };
    GlobalProviders.prototype.onMissingModulesExportError = function (componentName) {
        throw (componentName + " does not have an \"imports\" property array\n      in the globals file. Check the docs");
    };
    GlobalProviders.prototype.onMissingGlobalsExportError = function (componentName) {
        throw (componentName + " does not have a \"" + componentName + "Globals\" exported\n      in the globals file. Check the docs");
    };
    return GlobalProviders;
}());
exports.GlobalProviders = GlobalProviders;
//# sourceMappingURL=global-providers.js.map