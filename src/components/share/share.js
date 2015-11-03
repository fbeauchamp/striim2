import {Component, View  } from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'share',
  properties:['share']
})

@View({
  directives:[RouterLink],
  templateUrl: 'components/share/share.html',
  styleUrls: ['components/share/share.css']
})
export default class Share {
  constructor() {
  }
  onInit() {
    this.classMap='fa fa-fw '+this.share.icon
  }

}
