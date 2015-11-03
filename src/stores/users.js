export default class UserStore {
  static instance:UserStore;
  static isCreating:Boolean;

  constructor() {
    if (!UserStore.isCreating) {
      throw new Error("You can't call new in Singleton instances!");
    }
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
  }


  static getInstance() {
    if (UserStore.instance == null) {
      UserStore.isCreating = true;
      UserStore.instance = new UserStore();
      UserStore.isCreating = false;
    }
    return UserStore.instance;
  }

  all(){
    console.log(' all ')
    return this.data
  }
  add(share){
    console.log(' add share')
  }
}
