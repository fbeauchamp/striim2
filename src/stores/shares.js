export default class ShareStore {
  static instance:ShareStore;
  static isCreating:Boolean;

  constructor() {
    if (!ShareStore.isCreating) {
      throw new Error("You can't call new in Singleton instances!");
    }
    this.data = [
      {
        name:'sitac.jpg',
        icon:'fa-file-image-o',
        type:'image'
      },
      {
        name:'Bloc notte',
        icon:'fa-file-text-o',
        type:'pad'

      },
      {
        name:'plan titanic.pdf',
        icon:'fa-file-pdf-o',
        type:'pdf'

      },
      {
        name:'Mâcon',
        icon:'fa-map',
        type:'map'

      }
    ]
  }

  static getInstance() {
    if (ShareStore.instance == null) {
      ShareStore.isCreating = true;
      ShareStore.instance = new ShareStore();
      ShareStore.isCreating = false;
    }
    return ShareStore.instance;
  }

  all(){
    console.log(' all ')
    return this.data
  }
  add(share){
    console.log(' add share')
  }
}
