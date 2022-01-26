import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  constructor(private scullyService: ScullyRoutesService) {}

  posts: ScullyRoute[] = [];
  private routerSub: Subscription | undefined;

  ngOnInit(): void {
    this.routerSub = this.scullyService.available$.subscribe((posts) => {
      this.posts = posts.filter((post) => post.title);
    });
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }
}
