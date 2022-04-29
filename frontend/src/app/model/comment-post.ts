export class CommentPost {

    id:number;
    text:string;
    postId:number;
    createdDate:Date;
    userId: number;


  constructor(id: number, text: string, postId: number, createdDate: Date, userId: number) {
    this.id = id;
    this.text = text;
    this.postId = postId;
    this.createdDate = createdDate;
    this.userId = userId;
  }
}
