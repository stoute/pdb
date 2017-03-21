import {Component} from '@angular/core';
// import { AppBaseService } from '../../node_modules/app-base-library/src/library/angular/index';
import { AppBaseComponent, LoginFormComponent } from '../../node_modules/app-base-library/src/library/angular/index';

@Component({
  moduleId: __moduleName,
  selector: 'ng2-example-node',
  templateUrl: 'template.html'
})
export class Ng2ExampleNode extends AppBaseComponent {
  public title: string = '';

  constructor(){
  // constructor(private baseService: AppBaseService){
    super();
    var node = drupalSettings.pdb.contexts['entity:node'];
    this.title = node['title'][0]['value'];

      console.log(this);
      console.log(drupalSettings.pdb);
      console.log(drupalSettings.app_server);
      console.log('----');
      console.log(node);
  }
}
