import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const MainWrapper = () => import(/* webpackChunkName: "mainWrapper" */
  '@/views/MainWrapper/MainWrapper.vue');
const HomeView = () => import(/* webpackChunkName: "homeView" */
  '@/views/HomeView/HomeView.vue');
const AuthView = () => import(/* webpackChunkName: "authView" */
  '@/views/AuthView/AuthView.vue');
const PostsView = () => import(/* webpackChunkName: "postsView" */
  '@/views/PostsView/PostsView.vue');
const PostView = () => import(/* webpackChunkName: "postsView" */
  '@/views/PostView/PostView.vue');
const ProfileView = () => import(/* webpackChunkName: "profileView" */
  '@/views/ProfileView/ProfileView.vue');
const CreatePostView = () => import(/* webpackChunkName: "createPostView" */
  '@/views/CreatePostView/CreatePostView.vue');
const EditPostView = () => import(/* webpackChunkName: "editPostView" */
  '@/views/EditPostView/EditPostView.vue');


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to: any, from: any, savedPosition: any) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      component: MainWrapper,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'auth',
          name: 'auth',
          component: AuthView,
        },
        {
          path: 'posts',
          name: 'posts',
          component: PostsView,
        },
        {
          path: 'posts/:id',
          name: 'post',
          component: PostView,
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView,
        },
        {
          path: 'post/create',
          name: 'create-post',
          component: CreatePostView,
        },
        {
          path: 'post/edit',
          name: 'edit-post',
          component: EditPostView,
        },
      ],
    },
    {
      path: '*',
      redirect() {
        return `/`;
      },
    },
  ],
});
