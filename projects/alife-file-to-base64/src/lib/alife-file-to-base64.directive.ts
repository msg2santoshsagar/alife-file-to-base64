import { Directive, EventEmitter, ElementRef, Input, Output } from '@angular/core';

@Directive({
  selector: '[alife-file-to-base64]'
})
export class AlifeFileToBase64Directive {

  @Input() type: string;
  @Input() fileModel: any;

  @Output() onFileChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() fileModelChange: EventEmitter<any> = new EventEmitter();

  isTypeFile: boolean = false;
  userCapture: boolean = false;

  globalFilesData: any = [];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.isTypeFile = this.type === 'file';
    this.init();
  }

  /**
   * Initialize the action
   */
  init() {
    if (!this.isTypeFile) {
      console.error("alife-file-to-base64 will work only when input type is file.");
      this.removeFileChangeAction();
      return;
    }
    // // Check for the various File API support.
    // if (window.File && window.FileReader && window.FileList && window.Blob) {
    //   // Great success! All the File APIs are supported.
    // } else {
    //   alert('The File APIs are not fully supported in this browser.');
    // }
    this.bindFileChangeAction();
  }

  /**
   * Fire the events
   */
  onFileReadingCompleted() {
    this.onFileChanged.next(this.globalFilesData);
    this.fileModelChange.next(this.globalFilesData);
  }

  /**
   * 
   * Read the files and prepare the output json with base64.
   * 
   * @param event
   */
  handleFileSelection(event) {

    if (!this.isTypeFile) {
      return;
    }

    let files = event.target.files;

    let fileOutput = [];

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let opt = {
        name: file.name,
        size: file.size,
        type: file.type
      }
      fileOutput.push(opt);
    }


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

  /**
   * Add Event listener action on input 
   */
  bindFileChangeAction() {
    this.elementRef.nativeElement.addEventListener('change', this.handleFileSelection.bind(this), this.userCapture);
  }

  /**
   * Remove Event listener action on input 
   */
  removeFileChangeAction() {
    this.elementRef.nativeElement.addEventListener('change', this.handleFileSelection.bind(this), this.userCapture);
  }

}
