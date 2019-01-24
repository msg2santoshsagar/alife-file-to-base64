# Alife File To Base64

Angular simple yet powerfull library to convert file to base64

## Install file to base64 from NPM :

Run `npm install alife-file-to-base64 --save`

## Add Dependecy to your project

-  Import `AlifeFileToBase64Module` to your project and include module in imports section

```javascript
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

@NgModule({
  declarations: [
  ],
  imports: [
    AlifeFileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Syntax
```html
<input type="file" alife-file-to-base64 multiple (onFileChanged)="onFileChanges($event)" [(fileModel)]="files" [(rawFileModel)]="rawFiles" />
```

## Events

 - onFileChanged : Will get called when file will get selected by user. It will contain filename, filesize, type and base64.
 - fileModel     : To set the value of component variable
 - rawFileModel  : To set the value of component variable for raw files

## Author

Santosh Sagar

## License

This module is released under the permissive [MIT license](https://github.com/msg2santoshsagar/alife-simple-rating-star/blob/master/LICENSE)