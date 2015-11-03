import Firebase from 'firebase/lib/firebase-web.js'
export default class RemoteStorage{
    messages: Firebase;
    constructor() {
        this.dataRef = new Firebase('https://striim.firebaseio.com/');

    }
    list(url,cb){
      this.dataRef.child(url).on("value", function(snapshot) {
          cb(snapshot.val())
      });
    }
    push(url,data){
      console.log(  this.dataRef,url,data)
      this.dataRef.child(url).push(data)
    }
    on(url,cb){
      this.dataRef.child(url).on("child_added", function(snapshot, prevChildKey) {
        cb(snapshot.val())
      });
    }
}
/**
:roomid
  |- messages
    |- [{
        from:userid
        at:Date
        text:""
        to:{room | userid}
      }]
  |-shares
  |-signaling-webrtc
**/
