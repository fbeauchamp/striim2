export class Messages {
  static instance:Messages;
  static isCreating:Boolean = false;

  constructor() {
    if (!Messages.isCreating) {
      throw new Error("You can't call new in Singleton instances!");
    }
  }

  static getInstance() {
    if (Messages.instance == null) {
      Messages.isCreating = true;
      Messages.instance = new Messages();
      Messages.isCreating = false;
    }
    return Messages.instance;
  }

  all(){
    console.log(' all ')
  }
  add(message){
    console.log(' add message')
  }
}
