import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  type = "file";

  files: any;
  rawFiles: any;

  onFileChanges(files) {
    console.log("File changed By Method :: ", files);
    console.log("File changed By Binding :: ", this.files);
    console.log("Raw files :: ", this.rawFiles);
  }

  test() {
    console.log("This files :: ", this.files);
  }



}
