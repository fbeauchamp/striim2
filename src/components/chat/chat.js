import {Component,  View,Attribute , NgFor,NgStyle,EventEmitter} from 'angular2/angular2';

import ChatMessage from '../chat-message/chat-message';
@Component({
  selector: 'chat',
  inputs:['messages'],
  events: ['messageposted']
})

@View({
  directives:[NgFor,NgStyle,ChatMessage],
  templateUrl: 'components/chat/chat.html',
  styleUrls: ['components/chat/chat.css']
})
export default class Chat {
  message;
  messageposted;
  constructor( ) {
    this.messageposted = new EventEmitter();
    console.info('CHAT Component Mounted Successfully');
  }
  doneTyping($event){
    if($event.which === 13) {
      console.log('ENTER ',$event.target.value)
      this.messageposted.next({
        color: 'red',
        at: new Date(),
        text: $event.target.value,
        mine: Math.random() < 0.5
      })
      $event.target.value = null;
    }
  }

}
