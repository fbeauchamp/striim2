import {Component,  View,NgFor,NgStyle} from 'angular2/angular2';
@Component({
  selector: 'pdf-viewer',
  properties:[]
})

@View({
  directives:[NgFor,NgStyle],
  templateUrl: 'components/pdf-viewer/pdf-viewer.html',
  styleUrls: ['components/pdf-viewer/pdf-viewer.css']
})
export default class PdfViewer {
  constructor() {
    console.info('PdfViewer Component Mounted Successfully');
  }

}
