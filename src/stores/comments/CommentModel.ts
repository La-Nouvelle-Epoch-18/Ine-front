import { Post } from '@/stores/posts/PostModel';

export interface CommentModel {
  content?: string;
  post?: Post['post_id'];
}
