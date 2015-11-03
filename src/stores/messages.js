import {Injectable} from 'angular2/core';
import RemoteStorage  from '../services/remote-storage.js'

@Injectable()
export default class MessageStore {
  static instance:MessageStore;
  static isCreating:Boolean;
  remotestorage:remotestorage;
  constructor() {
    this.remotestorage = new RemoteStorage()
    if (!MessageStore.isCreating) {
      throw new Error("You can't call new in Singleton instances!");
    }
    this.data = []

    this.counter = 0;
    this.remotestorage.on('/messages', (message)=>{
      console.log(' new message',message)
        this.data.push(message)
        console.log(this.data)
    })
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
    return this.data
  }
  add(message){
    this.remotestorage.push('/messages', message)
  }
}
