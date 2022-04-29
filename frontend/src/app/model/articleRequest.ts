export class ArticleRequest {

   articleId:number;
   categoryName:string;
   articleName:string;
   url:string;
   description:string


  constructor(articleId: number, categoryName: string, articleName: string, url: string, description: string) {
    this.articleId = articleId;
    this.categoryName = categoryName;
    this.articleName = articleName;
    this.url = url;
    this.description = description;
  }
}
