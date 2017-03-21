import {Component} from '@angular/core';

@Component({
  moduleId: __moduleName,
  selector: 'ng2-example-node',
  templateUrl: 'template.html'
})
export class Ng2ExampleNode {
  public title: string = '';

  constructor(){
    var node = drupalSettings.pdb.contexts['entity:node'];
    this.title = node['title'][0]['value'];
  }
}
