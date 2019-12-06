import { PromiseInterface, wrapper, rssAxios } from './Http';
import { Post } from '@/stores/posts/PostModel';

export const getAll = ():
    Promise<PromiseInterface<Post[]>> => (
        wrapper(rssAxios.get('/rss'))
    );
