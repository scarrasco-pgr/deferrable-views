import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-posts-list',
  templateUrl: 'posts-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsListComponent {}
