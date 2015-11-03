import { Component,  View,NgFor} from 'angular2/angular2';
import {RouterOutlet} from 'angular2/router';

import User from '../user/user';
import Chat from '../chat/chat';
import OtherUsers from '../other-users/other-users';
import Share from '../share/share';

import MessageStore from '../../stores/messages'
import ShareStore from '../../stores/shares'
import UsersStore from '../../stores/users'

@Component({
  selector: 'app'
})

@View({
  directives:[Chat,OtherUsers,User,NgFor,Share,RouterOutlet],
  templateUrl: 'components/app/app.html',
  styleUrls: ['components/app/app.css']
})

export default class App {
  constructor() {
    this.shares=ShareStore.getInstance().all()
    this.messages=MessageStore.getInstance().all()
    this.counter = 0
    this.me = UsersStore.getInstance().me
    this.others = UsersStore.getInstance().others
  }
  onChange(event) {
          console.log('CHANGED',event);
      }
}
