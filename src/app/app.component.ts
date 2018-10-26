import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alife-file-to-base64-app';

  type = "file";

  files: any;

  onFileChanges(files) {
    console.log("File changed :: ", files);
  }

  test() {
    console.log("This files :: ", this.files);
  }



}
