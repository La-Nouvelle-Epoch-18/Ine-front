import { PromiseInterface, wrapper, postAxios } from './Http';
import { Post } from '@/stores/posts/PostModel';

export const getAll = ():
    Promise<PromiseInterface<Post[]>> => (
        wrapper(postAxios.get('/posts'))
    );
