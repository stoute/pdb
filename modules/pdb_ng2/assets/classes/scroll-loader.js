"use strict";
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/operator/debounceTime');
var lazy_load_component_1 = require('helpers/lazy-load-component');
if (drupalSettings.pdb.ng2.development_mode === 0) {
    core_1.enableProdMode();
}
var ScrollLoader = (function () {
    function ScrollLoader(appModule, components) {
        this.appModule = appModule;
        this.components = components;
        this.componentIds = Object.keys(components);
        this.subscribe();
    }
    ScrollLoader.prototype.initialize = function () {
        var componentsWrapper = 'body';
        var content = document.querySelector(componentsWrapper);
        if (content) {
            this.checkElements(this.componentIds);
        }
    };
    ScrollLoader.prototype.subscribe = function () {
        var _this = this;
        Observable_1.Observable.fromEvent(window, 'scroll')
            .debounceTime(200)
            .subscribe(function (x) {
            _this.checkElements(_this.componentIds);
        });
        Observable_1.Observable.fromEvent(window, 'resize')
            .debounceTime(200)
            .subscribe(function (x) {
            _this.checkElements(_this.componentIds);
        });
        Observable_1.Observable.fromEvent(window, 'orientationchange')
            .subscribe(function (x) {
            _this.checkElements(_this.componentIds);
        });
    };
    ScrollLoader.prototype.unsubscribe = function (id) {
        if (this.componentIds.length) {
            var index = this.componentIds.indexOf(id);
            if (index > -1) {
                this.componentIds = this.componentIds.slice(0, index).concat(this.componentIds.slice(index + 1));
            }
        }
    };
    ScrollLoader.prototype.checkElements = function (ids) {
        var _this = this;
        ids.forEach(function (id, index) {
            var el = document.getElementById(id);
            if (el && _this.elementInViewport(el)) {
                if (el.innerHTML.length === 0) {
                    var ngClassName = (typeof _this.components[id]["ngClassName"] === 'string') ?
                        _this.components[id]["ngClassName"] : _this.convertToNgClassName(_this.components[id]["element"]);
                    var selector = '#' + id;
                    _this.bootstrapComponent(id, ngClassName, selector);
                }
            }
        });
    };
    ScrollLoader.prototype.bootstrapComponent = function (id, ngClassName, selector) {
        var _this = this;
        var componentFile = Drupal.url(drupalSettings.pdb.ng2.components[id]["uri"]) + '/index';
        var ngModuleLoader = this.appModule.injector.get(core_1.SystemJsNgModuleLoader);
        return ngModuleLoader.loadAndCompile(componentFile + "#" + ngClassName)
            .then(function (moduleFactory) {
            _this.bootstrapWithCustomSelector(moduleFactory, selector, ngClassName);
        })
            .then(function () {
            _this.unsubscribe(id);
        });
    };
    ScrollLoader.prototype.bootstrapWithCustomSelector = function (moduleFactory, selector, ngClassName) {
        var _this = this;
        var ngZone = this.appModule.injector.get(core_1.NgZone);
        ngZone.run(function () {
            var parentInjector = core_1.ReflectiveInjector.resolveAndCreate([], _this.appModule.injector);
            var ngModule = moduleFactory.create(parentInjector);
            var appRef = ngModule.injector.get(core_1.ApplicationRef);
            var inj = ngModule.injector.get(core_1.Injector);
            var initStatus = ngModule.injector.get(core_1.ApplicationInitStatus);
            var lazyLoad = ngModule.injector.get(lazy_load_component_1.LazyLoadComponent);
            if (!lazyLoad) {
                throw (ngClassName + " is not using the LazyLoadComponent. This is\n          necessary to bootstrap the component. Check the docs.");
            }
            initStatus.donePromise.then(function () {
                var compFactory = ngModule.componentFactoryResolver
                    .resolveComponentFactory(lazyLoad);
                var compRef = compFactory.create(inj, [], selector);
                compRef.changeDetectorRef.detectChanges();
                appRef.registerChangeDetector(compRef.changeDetectorRef);
            });
        });
    };
    ScrollLoader.prototype.convertToNgClassName = function (elementName) {
        return (elementName.toLowerCase().charAt(0).toUpperCase() +
            elementName.slice(1))
            .replace(/-(.)/g, function (match, group1) { return group1.toUpperCase(); }) +
            'Module';
    };
    ScrollLoader.prototype.elementInViewport = function (el) {
        var rect;
        if (this.supportsBoundingClientRect()) {
            rect = el.getBoundingClientRect();
        }
        else {
            rect = this.androidChromeBoundingClientRect(el);
        }
        return !(rect.bottom < 0 ||
            rect.right < 0 ||
            rect.left > (window.innerWidth || document.documentElement.clientWidth) ||
            rect.top > (window.innerHeight || document.documentElement.clientHeight));
    };
    ScrollLoader.prototype.androidChromeBoundingClientRect = function (el) {
        var top = el.offsetTop - window.scrollY;
        var bottom = top + el.clientHeight;
        var left = el.offsetLeft - window.scrollX;
        var right = left + el.clientWidth;
        return { top: top, bottom: bottom, right: right, left: left };
    };
    ScrollLoader.prototype.supportsBoundingClientRect = function () {
        return !/android.*chrome\/[.0-9]+/i.test(window.navigator.userAgent);
    };
    return ScrollLoader;
}());
exports.ScrollLoader = ScrollLoader;
//# sourceMappingURL=scroll-loader.js.map