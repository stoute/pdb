import {Component} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";

@Component({
  selector: "ng2-example-2",
  templateUrl: "/modules/pdb/modules/pdb_ng2/components/ng2-example-2/ng2-example-2.html",
})
class AppComponent {
  name: string = "John";
  color: string = "Red";

  showEvent(e: any) {
    console.log(e);
  }
}

bootstrap(AppComponent);
