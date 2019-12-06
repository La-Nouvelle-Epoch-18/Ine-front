<template src="./PostsView.html"></template>
<style lang="scss" src="./PostsView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostsList from '@/components/PostsList/PostsList.vue';
import { Post } from '../../stores/posts/PostModel';
import { getAll } from '@/api/PostApi';

@Component({
  components: {
    PostsList,
  },
})
export default class PostsView extends Vue {
  public posts: Post[] = [];

  public async mounted() {
    const { success } = await getAll();
    this.posts = success!;
  }
}
</script>
