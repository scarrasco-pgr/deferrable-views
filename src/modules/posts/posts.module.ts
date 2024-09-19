import { NgModule } from '@angular/core';
import { PostsListComponent } from '../../components/posts-list/posts-list.component';
import { PostsRoutingModule } from './posts.routing.module';

@NgModule({
  imports: [PostsRoutingModule],
  declarations: [PostsListComponent],
})
export class PostsModule {}
