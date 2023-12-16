import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsArticlesService {

  constructor(private httpClient:HttpClient ) { 

  }
  getTOHeadlines():Observable<any>{
    return  this.httpClient.get(
      `${environment.url_base}top-headlines?country=za&apiKey=${environment.api_key}`
    )
  }
  getArticleByCategory(category:any):Observable<any>{
    return  this.httpClient.get(
      `${environment.url_base}top-headlines?country=za&${category}=sport&apiKey=${environment.api_key}`
    )
  }
}
