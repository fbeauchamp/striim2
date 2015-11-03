export default class MessageStore {
  static instance:MessageStore;
  static isCreating:Boolean;

  constructor() {
    if (!MessageStore.isCreating) {
      throw new Error("You can't call new in Singleton instances!");
    }
    this.data = [{
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

  static getInstance() {
    if (MessageStore.instance == null) {
      MessageStore.isCreating = true;
      MessageStore.instance = new MessageStore();
      MessageStore.isCreating = false;
    }
    return MessageStore.instance;
  }

  all(){
    console.log(' all ')
    return this.data
  }
  add(message){
    console.log(' add message')
  }
}
