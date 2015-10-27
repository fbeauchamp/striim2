import {ComponentMetadata as Component, ViewMetadata as View,NgFor,NgStyle,NgClass} from 'angular2/angular2';

@Component({
  selector: 'chat-message',
  properties:['message']
})

@View({
  directives:[NgFor,NgStyle,NgClass],
  templateUrl: 'components/chat-message/chat-message.html',
  styleUrls: ['components/chat-message/chat-message.css']
})
export class ChatMessage {
  constructor() {
  }
  onChange() {
  }
}
