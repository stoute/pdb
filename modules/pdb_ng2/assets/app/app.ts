/**
 * @module App
 * @preferred
 */
import {NgModule, SystemJsNgModuleLoader} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ScrollLoader} from 'classes/scroll-loader';
import {GlobalProviders} from 'classes/global-providers';

// import { APP_BASE_COMPONENTS,APP_BASE_DIRECTIVES,APP_BASE_PIPES,APP_BASE_PROVIDERS } from 'app-base-library/angular/index';
import { APP_BASE_PROVIDERS } from '../../node_modules/app-base-library/src/library/angular/index';

// Components contains metadata about all ng2 components on the page.
const components = drupalSettings.pdb.ng2.components;

// Dynamically load all globally shared @Injectable services and pass as providers into main app bootstrap.
const globalProviders = new GlobalProviders(components);

Promise.all(globalProviders.importGlobalInjectables())
    .then(globalServices => {
        // array of providers to pass into longform bootstrap to make @Injectable
        // services shared globally.
        let globals = globalProviders
            .createGlobalProvidersArray(globalServices);

        /**
         * Root module for the whole application
         */
        @NgModule({
            // providers: [SystemJsNgModuleLoader, ...globals.globalProviders],
            providers: [SystemJsNgModuleLoader, ...globals.globalProviders,APP_BASE_PROVIDERS],
            imports: [
                BrowserModule,
                ...globals.globalImports,
                FormsModule,
                HttpModule,
                ReactiveFormsModule,
                //APP_BASE_COMPONENTS,
                //APP_BASE_DIRECTIVES,
                //APP_BASE_PIPES
            ]
            // imports: [BrowserModule, ...globals.globalImports,APP_BASE_COMPONENTS,APP_BASE_DIRECTIVES,APP_BASE_PIPES]
        })
        class AppModule {
            public ngDoBootstrap(): void {}
        }

        return platformBrowserDynamic().bootstrapModule(AppModule);
    })
    .then(appModule => {
        let loader = new ScrollLoader(appModule, components);
        loader.initialize();
    });
