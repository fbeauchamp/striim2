import { Component,  View} from 'angular2/angular2';


@Component({
  selector: 'user',
  properties: ['user']
})

@View({
  templateUrl: 'components/user/user.html',
  styleUrls: ['components/user/user.css']
})
export default class User {
  constructor() {
    console.log(this)
    console.info('user  Component Mounted Successfully');

  }

}
