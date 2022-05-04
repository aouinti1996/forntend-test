import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../model/article";
import {ArticleResponse} from "../../model/articleResponse";

@Component({
  selector: 'app-forum-card',
  templateUrl: './forum-card.component.html',
  styleUrls: ['./forum-card.component.css']
})
export class ForumCardComponent implements OnInit {

  articles!:ArticleResponse[];

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.getData()
  }

  private getData() {
    this.articleService.getAllArticles().subscribe( (results:ArticleResponse[]) =>
      this.articles = results
    )
  }

  deleteArticle(articleId:number) {
    this.articleService.deleteArticle(articleId).subscribe()
  }
}
