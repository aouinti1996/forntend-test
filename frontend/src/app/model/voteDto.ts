export class VoteDto {
  voteType: string;
  articleId: number;


  constructor(voteType: string, articleId: number) {
    this.voteType = voteType;
    this.articleId = articleId;
  }
}
