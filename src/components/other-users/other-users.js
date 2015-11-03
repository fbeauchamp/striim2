import {Component, View, NgFor  } from 'angular2/angular2';
import User from '../user/user';

@Component({
  selector: 'other-users',
  properties:['users']
})

@View({
  directives:[User,NgFor],
  templateUrl: 'components/other-users/other-users.html',
  styleUrls: ['components/other-users/other-users.css']
})
export default class OtherUsers {
  constructor() {
    console.info('other users  Component Mounted Successfully');
  }

}
