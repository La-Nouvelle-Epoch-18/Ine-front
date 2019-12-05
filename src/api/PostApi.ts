import myAxios, { PromiseInterface, wrapper } from './Http';
import { Post } from '@/stores/posts/PostModel';

export const getAll = ():
    Promise<PromiseInterface<Post[]>> => (
        wrapper(myAxios.get('/posts'))
    );
