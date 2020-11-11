import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogPost } from '../classes/blog-post';
import { BlogDataService } from '../services/blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class BlogListComponent implements OnInit {

  posts: BlogPost[][];
  currentPage: number;
  @ViewChildren("tile") blogPostTiles:QueryList<BlogPostTileComponent>
  constructor(private blogDataService:BlogDataService) { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.posts =this.blogDataService.getBlugData();
  }

  updatePage(newPage: number) {
    this.currentPage = newPage;
  }
  expanedAll(){
    this.blogPostTiles.forEach(e=>e.showFullSummary());
  }
}
