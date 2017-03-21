import {Component, Inject, ElementRef} from '@angular/core';
// import {TranslateService} from 'ng2-translate';
import {AppBaseService, DrupalService} from '../../node_modules/app-base-library/src/library/angular/index';
import {AppBaseComponent, LoginFormComponent} from '../../node_modules/app-base-library/src/library/angular/index';
import { DrupalNodeComponent } from './drupal-node.component';

@Component({
    moduleId: __moduleName,
    selector: 'ng2-example-configuration',
    imports:[DrupalNodeComponent],
    templateUrl: 'template.html',
})
export class Ng2ExampleConfiguration extends AppBaseComponent {
    // We define default values in our YAML file instead of here.
    public text: string = '';
    public text2: string = '';
    public node: any;

    constructor(@Inject(ElementRef) elRef: ElementRef) {
        // constructor( @Inject(ElementRef) elRef: ElementRef, translate: TranslateService){
        super();

        //translate.setDefaultLang('nl');
        // sites/default/files/translations/drupal-8.2.7.nl.po

        // Strip the 'instance-id-' off the beginning of our selector for uuid.
        var instanceId = elRef.nativeElement.id.substring(12);
        // Grab the text value defined in our info.yml and instance configurated and feed it to our template.
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
}
