import {Component, View,NgFor,NgStyle,NgClass} from 'angular2/angular2';

@Component({
  selector: 'chat-message',
  properties:['message']
})

@View({
  directives:[NgFor,NgStyle,NgClass],
  templateUrl: 'components/chat-message/chat-message.html',
  styleUrls: ['components/chat-message/chat-message.css']
})
export default class ChatMessage {
  constructor() {
  }
  onChange() {
    console.log(' change in chat message',this)
  }
}
