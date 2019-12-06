import { PromiseInterface, wrapper, postAxios } from './Http';
import { Post } from '@/stores/posts/PostModel';
import { CommentModel } from '@/stores/comments/CommentModel';

export const getAll = ():
    Promise<PromiseInterface<Post[]>> => (
        wrapper(postAxios.get(''))
    );

export const getPost = (id: string):
    Promise<PromiseInterface<Post>> => (
        wrapper(postAxios.get(`/${id}`))
    );

export const getPermanentPosts = ():
    Promise<PromiseInterface<Post[]>> => (
        wrapper(postAxios.get('/permanent'))
    );

export const getTemporaryPosts = ():
    Promise<PromiseInterface<Post[]>> => (
        wrapper(postAxios.get('/temporary'))
    );

export const createPost = (post: Post):
    Promise<PromiseInterface<null>> => (
        wrapper(postAxios.post('', post))
    );

export const votePost = (id: number, negative: boolean = false):
    Promise<PromiseInterface<null>> => (
        wrapper(postAxios.put(`/${id}/vote`, { negative }))
    );

export const editPost = (id: number, post: Post):
    Promise<PromiseInterface<null>> => (
        wrapper(postAxios.put(`/${id}`, post))
    );

export const getPostComments = (id: number):
    Promise<PromiseInterface<CommentModel[]>> => (
        wrapper(postAxios.get(`/${id}/comments`))
    );

export const createComment = (id: number, comment: CommentModel):
    Promise<PromiseInterface<null>> => (
        wrapper(postAxios.post(`/${id}/comment`, comment))
    );
