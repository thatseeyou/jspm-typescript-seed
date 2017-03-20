import { Component, OnInit }      from '@angular/core';
import { NewsItem } from './news-item';
import { NewsService }from './news.service';

@Component({
  //moduleId: module.id,
  selector: 'top10',
  providers: [ NewsService ],
  templateUrl: './app/top10.component.html',
  styleUrls: [ './app/top10.component.css' ]
})
export class Top10Component implements OnInit {
    private news: NewsItem[];
    private overNumber = 1;

    constructor(private newsService:NewsService) {}

    ngOnInit(): void {
        this.newsService.getNews().then(news => this.news = news);
    }

    over(item:NewsItem): void {
        this.overNumber = item.number;
        console.log(item);
    }
}
