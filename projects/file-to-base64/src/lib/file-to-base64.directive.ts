import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[alife-file-to-base64]'
})
export class FileToBase64Directive implements OnInit {

  @Input() type: string;
  @Input() multiple: string;

  isTypeFile: boolean = false;
  isMultiple: boolean = false;
  userCapture: boolean = false;

  globalFilesData: any = [];

  that: any = this;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    this.isTypeFile = this.type === 'file'
    this.isMultiple = this.multiple !== undefined;

    this.init();

  }

  init() {
    console.log("init :: isTypeFile : ", this.isTypeFile);
    console.log("init :: isMultiple : ", this.isMultiple);
    if (!this.isTypeFile) {
      console.error("alife-file-to-base64 will work only when input type is file.");
      return;
    }
    // // Check for the various File API support.
    // if (window.File && window.FileReader && window.FileList && window.Blob) {
    //   // Great success! All the File APIs are supported.
    // } else {
    //   alert('The File APIs are not fully supported in this browser.');
    // }
    this.bindFileChangeAction();
    //this.onFileReadingCompleted();

  }

  onFileReadingCompleted() {
    console.log("File reading completed ");
    console.log("Files :: ", this.globalFilesData);
  }

  handleFileSelection(event) {
    //console.log("handleFileSelection :: file selected");
    let files = event.target.files;
    //console.log("Files :: ", files, files.length);

    let fileOutput = [];

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      // console.log("File : ", file);
      let opt = {
        name: file.name,
        size: file.size,
        type: file.type
      }
      fileOutput.push(opt);
    }

    //console.log("Output file :: ", fileOutput);

    var that = this;
    function fileReadingCompleted() {
      that.globalFilesData = fileOutput;
      that.onFileReadingCompleted();
    }

    var reader = new FileReader();
    function readFile(index) {

      reader.onload = (function (fileData: any) {
        let base64 = fileData.target.result;
        fileOutput[index].base64 = base64;
        readFile(index + 1);
      });

      if (index >= files.length) {
        fileReadingCompleted();
        return;
      }
      reader.readAsDataURL(files[index]);
    }

    readFile(0);

  }

  bindFileChangeAction() {
    this.elementRef.nativeElement.addEventListener('change', this.handleFileSelection.bind(this), this.userCapture);
  }

  removeFileChangeAction() {
    this.elementRef.nativeElement.addEventListener('change', this.handleFileSelection.bind(this), this.userCapture);
  }


}
