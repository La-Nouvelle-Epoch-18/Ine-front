import { PromiseInterface, wrapper, postAxios } from './Http';
import { Post } from '@/stores/posts/PostModel';

export const getAll = ():
    Promise<PromiseInterface<Post[]>> => (
        wrapper(postAxios.get(''))
    );

export const getPost = (id: string):
    Promise<PromiseInterface<Post>> => (
        wrapper(postAxios.get(id))
    );

export const getPermanentPosts = ():
    Promise<PromiseInterface<null>> => (
        wrapper(postAxios.get('/permanent'))
    );

export const getTemporaryPosts = ():
    Promise<PromiseInterface<null>> => (
        wrapper(postAxios.get('/temporary'))
    );

export const createPost = (post: Post):
    Promise<PromiseInterface<null>> => (
        wrapper(postAxios.post('', post))
    );

export const votePost = (id: string, negative: boolean = false):
    Promise<PromiseInterface<null>> => (
        wrapper(postAxios.put(`/${id}/vote`, { negative }))
    );

export const editPost = (id: string, post: Post):
    Promise<PromiseInterface<null>> => (
        wrapper(postAxios.put(`/${id}`, post))
    );
