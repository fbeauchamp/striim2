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
  onInit() {
    setTimeout(()=>{
      console.log(' post ')
      this.messageposted.next('toto','tata')
    },2000)

  }

}
