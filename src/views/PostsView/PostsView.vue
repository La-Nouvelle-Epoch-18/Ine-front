<template src="./PostsView.html"></template>
<style lang="scss" src="./PostsView.scss" scoped></style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostsList from '@/components/PostsList/PostsList.vue';
import { Post } from '../../stores/posts/PostModel';
import { getAll } from '@/api/PostApi';
import { namespace } from 'vuex-class';
const UserModule = namespace('users');

@Component({
  components: {
    PostsList,
  },
})
export default class PostsView extends Vue {
  public posts: Post[] = [];
  @UserModule.Getter public isConnected!: boolean;

  public async mounted() {
    const { success } = await getAll();
    this.posts = success!;
  }
}
</script>
