import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
  moduleId: __moduleName,
  selector: "ng2-example-2",
  templateUrl: 'template.html'
})
export class Ng2Example2{
  name: string = "John";
  color: string = "Red";
}
