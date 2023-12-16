import { Component, OnInit } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
selectedCategory="health"
topHeadlines :any[] = [] ;

  constructor(private articleService:NewsArticlesService ) {
    articleService.getTOHeadlines().subscribe((results)=>{
     
      this.topHeadlines.push(...results.articles)
      console.log(this.topHeadlines);
      
    })
    articleService.getArticleByCategory(this.selectedCategory).subscribe((results) =>{
      //console.log(results);
    })
    
   }
   getDetailss(selectedArticle :any ){
    
   }
   
   

  ngOnInit() {
  }
  

}
