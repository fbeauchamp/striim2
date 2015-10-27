import {ComponentMetadata as Component, ViewMetadata as View,NgFor,NgStyle} from 'angular2/angular2';

import {ChatMessage} from 'components/chat-message/chat-message';
@Component({
  selector: 'chat',
  properties:['messages']
})

@View({
  directives:[NgFor,NgStyle,ChatMessage],
  templateUrl: 'components/chat/chat.html',
  styleUrls: ['components/chat/chat.css']
})
export class Chat {
  constructor() {
    console.info('CHAT Component Mounted Successfully');
    console.log(this)
  }
}
