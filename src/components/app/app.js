import {ComponentMetadata as Component, ViewMetadata as View,NgFor} from 'angular2/angular2';

import {Chat} from 'components/chat/chat';
import {OtherUsers} from 'components/other-users/other-users';
import {User} from 'components/user/user';
import {Share} from 'components/share/share';


console.log(' in app')
@Component({
  selector: 'app'
})

@View({
  directives: [Chat,OtherUsers,User,NgFor,Share],
  templateUrl: 'components/app/app.html',
  styleUrls: ['components/app/app.css']
})

export class App {

  constructor() {
    console.info('App Component Mounted Successfully');
    this.me={
      picture:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
      name:'florent',
      me:true
    }

    this.others=[{
      name:'Arnaud',
      picture: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg',
      me:false
    },
    {
      name:'Olivier',
      picture: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg',
      me:false
    },
    {
      name:'Susanne',
      picture: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg',
      me:false
    },
    {
      name:'Marie',
      picture: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg',
      me:false
    }]

    this.shares=[
      {
        name:'sitac.jpg',
        icon:'fa-file-image-o'
      },
      {
        name:'Bloc notte',
        icon:'fa-file-text-o'
      },
      {
        name:'plan titanic.pdf',
        icon:'fa-file-pdf-o'
      },
      {
        name:'Mâcon',
        icon:'fa-map'
      }
    ]
    setTimeout(()=>{

    },0)
    this.messages=[{
      from:'Florent',
      at: 'Il y a 3 minutes ',
      color:'#86BB71',
      text:'Hi Arnaud, how are you? How is the project coming along?',
      mine:true
    },{
      from:'Arnaud',
      at: 'Il y a 2 minutes ',
      color:'#94C2ED',
      text:'Are we meeting today? Project has been already finished and I have results to show you.'
    },{
      from:'Florent',
      at: 'Il y a 1 minutes ',
      color:'#86BB71',
      text:'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?',
      mine:true
    },{
      from:'Arnaud',
      at: 'Il y a quelques secondes',
      color:'#94C2ED',
      text:'No , really'
    } ]
  }

}
