export class ArticleResponse {
    id:number;
    articleName:string;
    url:string;
    description:string;
    userName:string;
    categoryName:string;
    voteCount:number;
    commentCount:number;
    duration:string;
    upVote:boolean;
    downVote:boolean;


  constructor(id: number, articleName: string, url: string, description: string, userName: string, categoryName: string, voteCount: number, commentCount: number, duration: string, upVote: boolean, downVote: boolean) {
    this.id = id;
    this.articleName = articleName;
    this.url = url;
    this.description = description;
    this.userName = userName;
    this.categoryName = categoryName;
    this.voteCount = voteCount;
    this.commentCount = commentCount;
    this.duration = duration;
    this.upVote = upVote;
    this.downVote = downVote;
  }
}
