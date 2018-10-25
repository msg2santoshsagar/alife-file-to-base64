import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-to-base64-app';

  type = "file";

  
  onFileChanges(files) {
    console.log("File changed :: ", files);
  }







}
