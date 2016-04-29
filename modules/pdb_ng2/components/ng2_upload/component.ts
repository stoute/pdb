import {Component} from 'angular2/core';
import { FILE_UPLOAD_DIRECTIVES, FileUploader } from 'ng2-file-upload';

@Component({
  moduleId: __moduleName,
  selector: 'ng2-upload'
  templateUrl: 'template.html',
  directives: [FILE_UPLOAD_DIRECTIVES]
})
export class Ng2Upload
{
  private uploader = new FileUploader({ url: '/upload' });

  fileOver (event) {
    console.log('A dragon is here');
  }
}
