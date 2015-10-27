import {Component, View  } from 'angular2/angular2';

@Component({
  selector: 'share',
  properties:['share']
})

@View({
  directives:[],
  templateUrl: 'components/share/share.html',
  styleUrls: ['components/share/share.css']
})
export class Share {
  constructor() {
    console.info('share  Component Mounted Successfully');

  }

}
