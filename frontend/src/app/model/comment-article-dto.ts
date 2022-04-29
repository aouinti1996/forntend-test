export class CommentArticleDto {
    id:number;
    articleId:number;
    createdDate:Date;
    text:string;
    userName:string;


  constructor(id: number, articleId: number, createdDate: Date, text: string, userName: string) {
    this.id = id;
    this.articleId = articleId;
    this.createdDate = createdDate;
    this.text = text;
    this.userName = userName;
  }
}
