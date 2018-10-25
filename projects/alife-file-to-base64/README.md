# Alife File To Base64

Angular 4 simple yet powerfull library to convert file to base64

## Install file to base64 from NPM :

Run `npm install alife-file-to-base --save`

## Add Dependecy to your project

-  Import `FileToBase64Module` to your project and include module in imports section

```javascript
import { FileToBase64Module } from 'alife-file-to-base';

@NgModule({
  declarations: [
  ],
  imports: [
    FileToBase64Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

## Syntax
```html
<input type="file" alife-file-to-base64 multiple (onFileChanged)="onFileChanges($event)"/>
```

## Events

 - onFileChanged : Will get called when file will get selected by user. It will contain filename, filesize,type and base64.

## Author

Santosh Sagar

## License

This module is released under the permissive [MIT license](https://github.com/msg2santoshsagar/alife-simple-rating-star/blob/master/LICENSE)