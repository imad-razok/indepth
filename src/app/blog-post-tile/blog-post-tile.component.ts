import { TruncatePipe } from './../pipes/truncate.pipe';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../classes/blog-post';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
 // changeDetection:ChangeDetectionStrategy.OnPush
})
export class BlogPostTileComponent implements OnInit {

  @Input() post:BlogPost;
  fullSummary:string ;
  constructor(private truncate:TruncatePipe) { }

  ngOnInit(): void {
    this.fullSummary=this.post.summary;
    this.post.summary = this.truncate.transform(this.post.summary,15);
  }

  showFullSummary(){
    this.post.summary=this.fullSummary;
  }
  toggleFav(){
    console.log(this.post.isFav);
    this.post.isFav=!this.post.isFav;
  }
}
